import { headers as getHeaders, cookies as getCookies } from "next/headers";

import { baseProcedure, createTRPCRouter } from "@/trpc/init";

import z from "zod";
import { TRPCError } from "@trpc/server";
import { AUTH_COOKIE } from "../constants";

export const authRouter = createTRPCRouter({
  session: baseProcedure.query(async ({ ctx }) => {
    const headers = await getHeaders();

    const session = await ctx.db.auth({ headers });

    return session;
  }),
  logout: baseProcedure.mutation(async () => {
    const cookies = await getCookies();
    cookies.delete(AUTH_COOKIE);
  }),
  register: baseProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(6),
        username: z
          .string()
          .min(3, "Username must be at least 3 characters")
          .max(63, "Username must be less than 63 characters")
          .regex(
            /^[a-z0-9][a-z0-9-]*[a-z0-9]$/,
            "Username can only contain lowercase letters, numbers and hyphens. It must start and end with a letter or number"
          )
          .refine(
            (val) => !val.includes("--"),
            "Username cannot contain consecutive hyphens"
          )
          .transform((val) => val.toLowerCase()),
      })
    )
    .mutation(async ({ input, ctx }) => {
      await ctx.db.create({
        collection: "users",
        data: {
          email: input.email,
          username: input.username,
          password: input.password, // This will be hashed
        },
      });

      const data = await ctx.db.login({
        collection: "users",
        data: {
          email: input.email,
          password: input.password,
        },
      });

      if (!data.token) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Failed to login",
        });
      }

      const cookies = await getCookies();
      cookies.set({
        name: AUTH_COOKIE,
        value: data.token,
        httpOnly: true,
        path: "/",
        // TODO: Ensure cross-domain cookies sharing
        // sameSite: "none",
        // domain: ""
      });
    }),

  login: baseProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const data = await ctx.db.login({
        collection: "users",
        data: {
          email: input.email,
          password: input.password,
        },
      });

      if (!data.token) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Failed to login",
        });
      }

      const cookies = await getCookies();
      cookies.set({
        name: AUTH_COOKIE,
        value: data.token,
        httpOnly: true,
        path: "/",
        // TODO: Ensure cross-domain cookies sharing
        // sameSite: "none",
        // domain: ""
      });

      return data;
    }),
});

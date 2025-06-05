import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateTenantURL(tenantSlug: string) {
  if (process.env.NODE_ENV === "development") {
    return `/tenants/${tenantSlug}`;
  }

  const protocol = "https";
  const domain = process.env.NEXT_PUBLIC_TENANT_DOMAIN!;

  return `${protocol}://${tenantSlug}.${domain}`;
}

export function formatCurrency(value: number | string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "THB",
    maximumFractionDigits: 0,
  }).format(Number(value));
}

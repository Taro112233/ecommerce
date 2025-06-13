import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  slug: string;
}

export const Navbar = ({ slug }: NavbarProps) => {
  // Remove unused parameter warning
  void slug;
  return (
    <nav className="h-20 border-b font-medium bg-white">
      <div className="max-w-(--breakpoint-xl) mx-auto flex justify-between items-center h-full px-4 lg:px-12">
        <p className="text-xl">Checkout</p>
        <Button variant="elevated" asChild>
          <Link href="/">Home</Link>
        </Button>
      </div>
    </nav>
  );
};
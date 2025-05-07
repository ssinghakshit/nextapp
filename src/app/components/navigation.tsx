"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton } from "@clerk/nextjs";

export const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-center items-center p-4">
      <Link
        href="/"
        className={pathname === "/" ? "font-bold mr-4" : "mr-4 text-blue-500"}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={
          pathname === "/about" ? "font-bold mr-4" : "mr-4 text-blue-500"
        }
      >
        About
      </Link>
      <Link
        href="/products/1"
        className={
          pathname.startsWith("/products/1")
            ? "font-bold mr-4"
            : "mr-4 text-blue-500"
        }
      >
        Product 1
      </Link>
      <SignInButton mode="modal" />
    </nav>
  );
};

"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkItemProps {
  label: string;
  href: string;
  id: string;
}

const NavLinkItem = ({ href, label, id }: NavLinkItemProps) => {
  const pathname = usePathname();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`/${label}`);

  return (
    <>
      <Link className="uppercase" href={href}>
        <div
          className={cn(
            "flex gap-x-2 py-4 hover:border-b-2 hover:border-b-fadeBlack",
            isActive && "border-b-2",
          )}
        >
          <p className="text-fadeBlack md:hidden">{id}</p>
          <p className="letter-spacing-3 font-condensed md:text-sm">{label}</p>
        </div>
      </Link>
    </>
  );
};

export default NavLinkItem;

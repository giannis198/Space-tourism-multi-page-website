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
            "flex gap-x-2 py-2 hover:border-b-2 hover:border-b-fadeBlack lg:items-center lg:py-9",
            isActive && "md:border-b-2",
          )}
        >
          <p className="text-center font-semibold text-fadeBlack md:hidden lg:block lg:text-base">
            {id}
          </p>
          <p className="letter-spacing-3 font-condensed md:text-sm lg:text-base">
            {label}
          </p>
        </div>
      </Link>
    </>
  );
};

export default NavLinkItem;

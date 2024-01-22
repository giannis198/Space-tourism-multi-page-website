import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavLinks from "./Navlinks";
import HamburgerMenuIcon from "../public/shared/icon-hamburger.svg";

const MobileMenu = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            className="cursor-pointer md:hidden"
            src={HamburgerMenuIcon}
            alt="hamburger menu"
          />
        </SheetTrigger>
        <SheetContent side="right" className="bg-Dark backdrop-blur-sm">
          <NavLinks />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileMenu;

import Image from "next/image";
import Link from "next/link";

import MobileMenu from "./MobileMenu";
import NavLinks from "./Navlinks";
import logo from "../public/shared/logo.svg";
import Container from "./Container";
import { Separator } from "./ui/separator";

const Navbar = () => {
  return (
    <nav className="fixed my-4 w-full px-4">
      <Container>
        <div className="flex items-center justify-between ">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <MobileMenu />

          <Separator className="left-20 hidden w-[20rem] lg:absolute" />

          <div className="hidden bg-fadeWhite md:block ">
            <NavLinks />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

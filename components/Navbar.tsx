import Image from "next/image";
import Link from "next/link";

import MobileMenu from "./MobileMenu";
import NavLinks from "./Navlinks";
import logo from "../public/shared/logo.svg";
import Container from "./Container";
import { Separator } from "./ui/separator";

const Navbar = () => {
  return (
    <nav className="fixed w-full overflow-hidden px-4 py-4 lg:py-8">
      <Container>
        <div className="flex items-center justify-between lg:relative">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <MobileMenu />

          <Separator className="left-20 z-10 hidden w-[29.5rem] opacity-30 lg:absolute lg:block" />

          <div className="lg: hidden bg-navBarBg backdrop-blur-2xl md:block">
            <NavLinks />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

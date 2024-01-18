import Image from "next/image";
import Link from "next/link";

import MobileMenu from "./MobileMenu";
import NavLinks from "./Navlinks";
import logo from "../public/shared/logo.svg";
import Container from "./Container";

const Navbar = () => {
  return (
    <nav className="fixed my-4 w-full px-4">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <MobileMenu />

          <div className="hidden lg:block">
            <NavLinks />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

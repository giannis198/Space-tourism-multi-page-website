import NavLinkItem from "./NavLinkItem";

const NavLinks = () => {
  const navLinks = [
    { id: "00", url: "/", title: "home" },
    { id: "01", url: "destination", title: "destination" },
    { id: "02", url: "crew", title: "crew" },
    { id: "03", url: "technology", title: "technology" },
  ];
  return (
    <ul className="grid gap-y-5 text-xl text-White md:grid-flow-col md:gap-x-6 md:px-5">
      {navLinks.map((navLink) => (
        <li key={navLink.id}>
          <NavLinkItem
            id={navLink.id}
            label={navLink.title}
            href={navLink.url}
          />
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;

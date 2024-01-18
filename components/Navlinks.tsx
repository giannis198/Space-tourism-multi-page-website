import Link from "next/link";

const NavLinks = () => {
  const navLinks = [
    { id: "00", url: "/", title: "home" },
    { id: "01", url: "destination", title: "destination" },
    { id: "02", url: "crew", title: "crew" },
    { id: "03", url: "technology", title: "technology" },
  ];
  return (
    <ul className="grid gap-5 pt-20 text-xl text-white md:grid-flow-col md:gap-x-16 md:pt-0">
      {navLinks.map((navLink) => (
        <li className="link" key={navLink.id}>
          <Link
            key={navLink.id}
            className="relative uppercase"
            href={navLink.url}
          >
            <div className="flex gap-x-2">
              <p>{navLink.id}</p>
              <p>{navLink.title}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;

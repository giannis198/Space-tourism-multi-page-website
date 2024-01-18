import Link from "next/link";
import Container from "./Container";

const Footer = () => {
  return (
    <Container>
      <section className="fixed bottom-0 w-full  text-white ">
        <div className="attribution decoration-none mx-4">
          Challenge by&nbsp;
          <Link href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor <br />
          </Link>
          Coded by&nbsp;
          <Link href="https://www.linkedin.com/in/ioannis-nikitopoulos-547a99122/">
            Ioannis Nikitopoulos
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default Footer;

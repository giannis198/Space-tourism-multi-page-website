import Container from "@/components/Container";
import Section from "@/components/Section";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <Container>
        <Section image="background-home-image">
          <div className="mb-20">
            <h1 className="letter-spacing-2 text-center font-condensed text-base text-Accent">
              SO, YOU WANT TO TRAVEL TO <br />
              <span className="letter-spacing-0 font-bellefair text-[80px] text-White">
                SPACE
              </span>
            </h1>
            <p className="text-center text-sm leading-loose text-Accent">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>

          <div className="grid justify-center p-10 ">
            <Link
              href="/destination"
              className="grid h-[9.375rem] w-[9.375rem] items-center rounded-full bg-White text-center text-xl uppercase text-Dark outline transition-all hover:outline-[3rem] hover:outline-fadeWhite"
            >
              explore
            </Link>
          </div>
        </Section>
      </Container>
    </>
  );
};

export default HomePage;

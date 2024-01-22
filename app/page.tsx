import Container from "@/components/Container";
import Section from "@/components/Section";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <Container>
        <Section image="background-home-image">
          <div className="mx-auto md:w-2/3 md:py-16">
            <h1 className="letter-spacing-2 text-center font-condensed text-base text-Accent md:text-[20px]">
              SO, YOU WANT TO TRAVEL TO <br />
              <span className="letter-spacing-0 font-bellefair text-[80px] text-White md:text-6xl">
                SPACE
              </span>
            </h1>
            <p className="mb-20 text-center text-sm leading-loose text-Accent md:text-base">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>

            <div className="grid justify-center">
              <Link
                href="/destination"
                className="grid h-[9.375rem] w-[9.375rem] items-center rounded-full border-none bg-White text-center text-xl uppercase text-Dark outline transition-all hover:outline-[3rem] hover:outline-fadeWhite md:h-[15.125rem] md:w-[15.125rem]"
              >
                explore
              </Link>
            </div>
          </div>
        </Section>
      </Container>
    </>
  );
};

export default HomePage;

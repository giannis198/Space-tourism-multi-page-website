import ButtonLarge from "@/components/ButtonLarge";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <Container>
        <Section>
          <div className="mb-20">
            <h1 className="letter-spacing-2 font-condensed text-center text-base text-Accent">
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

          <div className="z-10 grid items-center justify-center">
            <Link
              href="/destination"
              className="large-button relative grid h-40 w-40 items-center rounded-full bg-White text-center text-xl uppercase text-Dark"
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

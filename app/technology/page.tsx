import Container from "@/components/Container";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const TechnologyPage = () => {
  const technologies = [
    {
      name: "Launch vehicle",
      images: {
        portrait: "/technology/image-launch-vehicle-portrait.jpg",
        landscape: "/technology/image-launch-vehicle-landscape.jpg",
      },
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: "Spaceport",
      images: {
        portrait: "/technology/image-spaceport-portrait.jpg",
        landscape: "/technology/image-spaceport-landscape.jpg",
      },
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      name: "Space capsule",
      images: {
        portrait: "/technology/image-space-capsule-portrait.jpg",
        landscape: "/technology/image-space-capsule-landscape.jpg",
      },
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ];
  return (
    <>
      <Container>
        <Section image="background-technology-image lg:px-0 lg:pl-20">
          <SectionHeader title="SPACE LAUNCH 101" id="03" />
          <div className="relative grid items-center justify-center pb-20">
            <Tabs
              defaultValue={technologies[0].name}
              className="relative items-center justify-center space-y-6 lg:grid lg:grid-cols-[auto_2fr_auto]"
            >
              <div className="relative col-start-3 row-start-1">
                {technologies.map((technology, index) => (
                  <TabsContent
                    key={index}
                    value={technology.name}
                    className=" m-0 grid justify-center"
                  >
                    <div className="relative h-[25vh] w-[100vw] lg:hidden ">
                      <Image
                        fill
                        sizes="(min-width: 768px) 100vw, (min-width: 1440px) 50vw, 100vw"
                        className="object-contain"
                        src={technology.images.landscape}
                        alt={technology.name}
                      />
                    </div>
                    <div className="relative hidden lg:block lg:h-[32.9rem] lg:w-[32.18rem]">
                      <Image
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1440px) 40vw, 33vw"
                        className="object-contain"
                        src={technology.images.portrait}
                        alt={technology.name}
                      />
                    </div>
                  </TabsContent>
                ))}
              </div>

              <div className="col-start-1">
                <TabsList className="my-4 w-full gap-y-4 space-x-3 bg-transparent lg:flex-col">
                  {technologies.map((tecnology, index) => (
                    <TabsTrigger
                      key={index}
                      value={tecnology.name}
                      className="h-10 w-10 rounded-full text-White ring-White transition-all hover:ring-1 md:h-[3.75rem] md:w-[3.75rem] md:text-[1.5rem] lg:m-0 lg:h-20 lg:w-20 lg:py-4 lg:text-[2rem]"
                    >
                      {index + 1}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <div className="col-start-2">
                {technologies.map((technology, index) => (
                  <TabsContent
                    key={index}
                    value={technology.name}
                    className="m-0 mx-auto grid justify-center gap-y-3 text-center md:w-2/3 md:gap-y-8 lg:ml-8 lg:w-4/5 lg:text-start"
                  >
                    <p className="letter-spacing-3 font-condensed text-sm text-Accent md:text-base lg:text-base">
                      THE TERMINOLOGY…
                    </p>
                    <h1 className="font-bellefair text-2xl uppercase md:text-[2.5rem] lg:text-4xl">
                      {technology.name}
                    </h1>

                    <p className=" font-barlow text-sm leading-loose text-Accent md:text-base lg:text-xl ">
                      {technology.description}
                    </p>
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </div>
        </Section>
      </Container>
    </>
  );
};

export default TechnologyPage;

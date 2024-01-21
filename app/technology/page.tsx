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
        <Section image="background-technology-image">
          <SectionHeader title="SPACE LAUNCH 101" id="03" />
          <div className="grid justify-center pb-20">
            <Tabs defaultValue={technologies[0].name} className="relative">
              {technologies.map((technology, index) => (
                <TabsContent
                  key={index}
                  value={technology.name}
                  className=" m-0 grid justify-center"
                >
                  <div className="relative h-[30vh] w-[100vw]">
                    <Image
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                      className="object-contain"
                      src={technology.images.landscape}
                      alt={technology.name}
                    />
                  </div>
                </TabsContent>
              ))}

              <TabsList className="my-4 w-full space-x-3 bg-transparent">
                {technologies.map((tecnology, index) => (
                  <TabsTrigger
                    key={index}
                    value={tecnology.name}
                    className="h-10 w-10 rounded-full text-White ring-White transition-all hover:ring-1"
                  >
                    {index + 1}
                  </TabsTrigger>
                ))}
              </TabsList>
              <p className="letter-spacing-3 font-condensed text-sm text-Accent">
                THE TERMINOLOGY…
              </p>

              {technologies.map((technology, index) => (
                <TabsContent
                  key={index}
                  value={technology.name}
                  className="m-0 grid justify-center text-center"
                >
                  <h1 className="font-bellefair text-2xl uppercase">
                    {technology.name}
                  </h1>

                  <p className="px-4 font-barlow text-sm leading-loose text-Accent ">
                    {technology.description}
                  </p>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </Section>
      </Container>
    </>
  );
};

export default TechnologyPage;

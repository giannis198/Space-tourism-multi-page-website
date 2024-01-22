import Container from "@/components/Container";
import Section from "@/components/Section";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import moon from "/public/destination/image-moon.png";
import mars from "/public/destination/image-mars.png";
import europa from "/public/destination/image-europa.png";
import titan from "/public/destination/image-titan.png";
import { Separator } from "@/components/ui/separator";
import SectionHeader from "@/components/SectionHeader";

const DestinationPage = () => {
  const constants = [
    {
      id: "01",
      title: "moon",
      imgUrl: moon,
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days",
    },
    {
      id: "02",
      title: "mars",
      imgUrl: mars,
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travel: "9 months",
    },
    {
      id: "03",
      title: "europa",
      imgUrl: europa,
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travel: "3 years",
    },
    {
      id: "04",
      title: "titan",
      imgUrl: titan,
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travel: "7 years",
    },
  ];
  return (
    <>
      <Container>
        <Section image="background-destination-image">
          <SectionHeader id="01" title="Pick your destination" />
          <div className="relative grid justify-center pb-20">
            <Tabs defaultValue="moon" className="relative space-y-5">
              {constants.map((planet) => (
                <TabsContent
                  key={planet.id}
                  value={planet.title}
                  className="m-0 grid justify-center "
                >
                  <Image
                    className="h-[10.6rem] w-[10.6rem] md:h-[18.75rem] md:w-[18.75rem] "
                    src={planet.imgUrl}
                    alt={planet.title}
                  />
                </TabsContent>
              ))}
              <TabsList className="gap-x-5 bg-transparent p-0">
                {constants.map((planet) => (
                  <TabsTrigger
                    key={planet.id}
                    value={planet.title}
                    className="letter-spacing-2 rounded-none bg-transparent p-0 font-condensed text-sm uppercase text-White hover:border-b-2 hover:border-b-fadeBlack data-[state=active]:border-b-2 data-[state=active]:bg-transparent data-[state=active]:text-White "
                  >
                    {planet.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {constants.map((planet) => (
                <TabsContent
                  key={planet.id}
                  value={planet.title}
                  className="m-0 grid justify-center gap-y-12 text-center md:w-[35.8rem] "
                >
                  <div>
                    <h1 className="font-bellefair text-4xl uppercase md:text-[5rem]">
                      {planet.title}
                    </h1>
                    <p className="text-sm leading-loose text-Accent ">
                      {planet.description}
                    </p>
                  </div>

                  <Separator className="bg-Accent opacity-50" />
                </TabsContent>
              ))}

              {constants.map((planet) => (
                <TabsContent
                  key={planet.id}
                  value={planet.title}
                  className="m-0 grid justify-center text-center"
                >
                  <div className="justify-between gap-x-14 md:flex">
                    <div className="space-y-1 pb-8">
                      <h3 className="letter-spacing-2 font-condensed text-sm text-Accent">
                        AVG. DISTANCE
                      </h3>
                      <p className="font-bellefair text-2xl uppercase">
                        {planet.distance}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <h3 className="letter-spacing-2 font-condensed text-sm text-Accent">
                        Est. travel time
                      </h3>
                      <p className="font-bellefair text-2xl uppercase">
                        {planet.travel}
                      </p>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </Section>
      </Container>
    </>
  );
};

export default DestinationPage;

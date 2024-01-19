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
        <Section>
          <SectionHeader id="01" title="Pick your destination" />
         
          <div className="relative grid justify-center pb-20">
            <Tabs defaultValue="moon" className="space-y-5">
              {constants.map((planet) => (
                <TabsContent
                  key={planet.id}
                  value={planet.title}
                  className="m-0 grid justify-center  "
                >
                  <Image
                    height={225}
                    width={225}
                    src={planet.imgUrl}
                    alt={planet.title}
                  />
                </TabsContent>
              ))}
              <TabsList className="bg-transparent">
                {constants.map((planet) => (
                  <TabsTrigger
                    key={planet.id}
                    value={planet.title}
                    className="font-condensed letter-spacing-2 link text-[14px] uppercase text-White transition-all"
                  >
                    {planet.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {constants.map((planet) => (
                <TabsContent
                  key={planet.id}
                  value={planet.title}
                  className="m-0 grid justify-center text-center"
                >
                  <h1 className="font-bellefair text-4xl uppercase">
                    {planet.title}
                  </h1>
                  <p className="text-sm leading-loose text-Accent ">
                    {planet.description}
                  </p>
                </TabsContent>
              ))}

              <Separator className="bg-Accent opacity-50" />

              {constants.map((planet) => (
                <TabsContent
                  key={planet.id}
                  value={planet.title}
                  className="m-0 grid justify-center text-center"
                >
                  <div className="space-y-1 pb-8">
                    <h3 className="font-condensed letter-spacing-2 text-sm text-Accent">
                      AVG. DISTANCE
                    </h3>
                    <p className="font-bellefair text-2xl uppercase">
                      {planet.distance}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-condensed letter-spacing-2 text-sm text-Accent">
                      Est. travel time
                    </h3>
                    <p className="font-bellefair text-2xl uppercase">
                      {planet.travel}
                    </p>
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            {/* <Tabs defaultValue="moon">
              <TabsContent value="moon" className="grid justify-center">
                <Image height={225} width={225} src={moon} alt="moon" />
              </TabsContent>
              <TabsContent value="mars">mars</TabsContent>
              <TabsContent value="europa">europa</TabsContent>
              <TabsContent value="titan">titan</TabsContent>
              <TabsList>
                <TabsTrigger value="moon" className="bg-none">
                  MOON
                </TabsTrigger>
                <TabsTrigger value="mars">MARS</TabsTrigger>
                <TabsTrigger value="europa">EUROPA</TabsTrigger>
                <TabsTrigger value="titan">TITAN</TabsTrigger>
              </TabsList>
            </Tabs> */}
          </div>
        </Section>
      </Container>
    </>
  );
};

export default DestinationPage;

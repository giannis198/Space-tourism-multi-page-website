import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabsNew";
import Image from "next/image";

import Container from "@/components/Container";
import Section from "@/components/Section";
import { Separator } from "@/components/ui/separator";
import hurleyImg from "/public/crew/image-douglas-hurley.png";
import markImg from "/public/crew/image-mark-shuttleworth.png";
import victorImg from "/public/crew/image-victor-glover.png";
import ansariImg from "/public/crew/image-anousheh-ansari.png";
import IconDot from "@/components/IconDot";
import SectionHeader from "@/components/SectionHeader";
import CrewTabs from "@/components/CrewTabs";

const crew = [
  {
    name: "Douglas Hurley",
    image: hurleyImg,

    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    image: markImg,
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    image: victorImg,
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    image: ansariImg,
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

const CrewPage = () => {
  return (
    <>
      <Container>
        <Section image="background-crew-image">
          <SectionHeader title="Meet your crew" id="02" />
          <div className="relative grid justify-center pb-20">
            <CrewTabs crew={crew} />
          </div>
        </Section>
      </Container>
    </>
  );
};

export default CrewPage;

import Image, { StaticImageData } from "next/image";
import { Tabs, TabsContent, TabsList } from "./ui/tabsNew";
import { TabsTrigger } from "./ui/tabsCrew";
import { Separator } from "./ui/separator";

import { cn } from "@/lib/utils";

interface CrewTabsProps {
  crew: {
    name: string;
    image: string | StaticImageData;
    role: string;
    bio: string;
  }[];
}

const CrewTabs = ({ crew }: CrewTabsProps) => {
  return (
    <>
      <Tabs defaultValue={crew[0].name}>
        {crew.map((member, index) => (
          <TabsContent
            key={index}
            value={member.name}
            className="m-0 grid justify-center "
          >
            <div className="relative h-[300px] w-[259px]">
              <Image
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
                src={member.image}
                alt={member.name}
              />
            </div>
          </TabsContent>
        ))}
        <Separator className="opacity-50" />
        <TabsList className="my-4 space-x-2 bg-transparent">
          {crew.map((member, index) => (
            <TabsTrigger key={index} value={member.name} />
          ))}
        </TabsList>

        {crew.map((member, index) => (
          <TabsContent
            key={index}
            value={member.name}
            className="m-0 grid justify-center space-y-1 text-center"
          >
            <h3 className="font-bellefair text-base uppercase text-White opacity-50">
              {member.role}
            </h3>
            <h1 className="font-bellefair text-2xl uppercase">{member.name}</h1>

            <p className="font-barlow text-sm leading-loose text-Accent ">
              {member.bio}
            </p>
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
};

export default CrewTabs;

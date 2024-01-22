import Image, { StaticImageData } from "next/image";
import { Tabs, TabsContent, TabsList } from "./ui/tabsNew";
import { TabsTrigger } from "./ui/tabsCrew";
import { Separator } from "./ui/separator";

interface CrewTabsTabletProps {
  crew: {
    name: string;
    image: string | StaticImageData;
    role: string;
    bio: string;
  }[];
}

const CrewTabsTablet = ({ crew }: CrewTabsTabletProps) => {
  return (
    <>
      <Tabs defaultValue={crew[0].name} className="relative mx-auto w-4/5">
        {crew.map((member, index) => (
          <TabsContent key={index} value={member.name} className="">
            <h3 className="font-bellefair text-base uppercase text-White opacity-50 md:text-[1.5rem]">
              {member.role}
            </h3>
            <h1 className="font-bellefair text-2xl uppercase md:text-[2.5rem]">
              {member.name}
            </h1>

            <p className="font-barlow text-sm leading-loose text-Accent md:text-base">
              {member.bio}
            </p>
          </TabsContent>
        ))}

        <TabsList className="my-4 gap-x-5 bg-transparent">
          {/* White Dots */}
          {crew.map((member, index) => (
            <TabsTrigger key={index} value={member.name} />
          ))}
        </TabsList>

        {crew.map((member, index) => (
          <TabsContent key={index} value={member.name} className="">
            {/* Image Section */}
            <div className="relative mx-auto h-[532px] w-[433px]">
              <Image
                fill
                sizes="(min-width: 768px) 100vw, (min-width: 1200px) 50vw, 33vw"
                className="object-contain"
                src={member.image}
                alt={member.name}
              />
            </div>
          </TabsContent>
        ))}

        {/* Description Section */}
      </Tabs>
    </>
  );
};

export default CrewTabsTablet;

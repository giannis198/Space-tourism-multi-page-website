import Image, { StaticImageData } from "next/image";
import { Tabs, TabsContent, TabsList } from "./ui/tabsNew";
import { TabsTrigger } from "./ui/tabsCrew";
import { Separator } from "./ui/separator";

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
            className=" m-0 grid justify-center"
          >
            {/* Image Section */}
            <div className="relative  h-[300px] w-[259px]">
              <Image
                fill
                sizes="(min-width: 768px) 50vw, (min-width: 1200px) 50vw, 33vw"
                className="object-contain"
                src={member.image}
                alt={member.name}
              />
            </div>
          </TabsContent>
        ))}

        <Separator className="opacity-50 md:hidden" />

        <TabsList className="my-4 gap-x-5 bg-transparent">
          {/* White Dots */}
          {crew.map((member, index) => (
            <TabsTrigger key={index} value={member.name} />
          ))}
        </TabsList>

        {/* Description Section */}

        {crew.map((member, index) => (
          <TabsContent
            key={index}
            value={member.name}
            className="m-0 grid justify-center space-y-1 text-center md:mx-auto md:w-1/2"
          >
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
      </Tabs>
    </>
  );
};

export default CrewTabs;

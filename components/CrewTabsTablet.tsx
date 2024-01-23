import Image, { StaticImageData } from "next/image";
import { Tabs, TabsContent, TabsList } from "./ui/tabsNew";
import { TabsTrigger } from "./ui/tabsCrew";

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
      <Tabs
        defaultValue={crew[0].name}
        className="relative mx-auto items-center justify-between md:w-4/5 lg:mx-0 lg:flex lg:w-full lg:text-start"
      >
        <div className="lg:space-y-20">
          {crew.map((member, index) => (
            <TabsContent key={index} value={member.name} className="">
              <h3 className="font-bellefair text-base uppercase text-White opacity-50 md:text-[1.5rem] lg:text-[2rem]">
                {member.role}
              </h3>
              <h1 className="font-bellefair text-2xl uppercase md:text-[2.5rem] lg:text-[3.5rem]">
                {member.name}
              </h1>

              <p className="font-barlow text-sm leading-loose text-Accent md:text-base lg:w-2/3 lg:text-xl">
                {member.bio}
              </p>
            </TabsContent>
          ))}

          <TabsList className="gap-x-5 bg-transparent">
            {/* White Dots */}
            {crew.map((member, index) => (
              <TabsTrigger key={index} value={member.name} />
            ))}
          </TabsList>
        </div>
        <div>
          {crew.map((member, index) => (
            <TabsContent key={index} value={member.name} className="">
              {/* Image Section */}
              <div className="relative mx-auto h-[532px] w-[433px] lg:h-[44.5rem] lg:w-[35.5rem]">
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
        </div>
      </Tabs>
    </>
  );
};

export default CrewTabsTablet;

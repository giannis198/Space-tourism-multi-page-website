import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  image: string;
}

const Section = ({ children, image }: SectionProps) => {
  return (
    <section
      className={cn(
        "h-[100vh] overflow-x-hidden px-4 pt-20 text-center lg:px-20",
        image,
      )}
    >
      {children}
    </section>
  );
};

export default Section;

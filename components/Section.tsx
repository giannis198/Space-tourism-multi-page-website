import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  image: string;
}

const Section = ({ children, image }: SectionProps) => {
  return (
    <section
      className={cn(
        "h-[100svh] overflow-x-hidden px-4 pt-28 text-center",
        image,
      )}
    >
      {children}
    </section>
  );
};

export default Section;

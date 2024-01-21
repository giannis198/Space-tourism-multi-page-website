import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  image: string;
}

const Section = ({ children, image }: SectionProps) => {
  return (
    <section className={cn("h-[100svh] px-4 py-28 text-center", image)}>
      {children}
    </section>
  );
};

export default Section;

interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return (
    <section className="background-destination-image h-[100svh] px-4 py-28 text-center">
      {children}
    </section>
  );
};

export default Section;

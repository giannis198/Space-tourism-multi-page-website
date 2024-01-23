interface SectionHeaderProps {
  id: string;
  title: string;
}

const SectionHeader = ({ id, title }: SectionHeaderProps) => {
  return (
    <div className="letter-spacing-1 my-8 flex justify-center gap-x-5 font-condensed uppercase text-White md:justify-start md:text-xl lg:mt-16 lg:text-2xl">
      <p className="bold text-fadeWhite">{id}</p>
      <p>{title}</p>
    </div>
  );
};

export default SectionHeader;

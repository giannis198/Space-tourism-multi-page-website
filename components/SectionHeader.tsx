interface SectionHeaderProps {
  id: string;
  title: string;
}

const SectionHeader = ({ id, title }: SectionHeaderProps) => {
  return (
    <div className="letter-spacing-1  mb-10 flex justify-center gap-x-5 font-condensed uppercase text-White md:justify-start md:text-xl">
      <p className="bold text-fadeWhite">{id}</p>
      <p>{title}</p>
    </div>
  );
};

export default SectionHeader;

import { cn } from "@/lib/utils";

interface IconDotProps {
  isActive: boolean;
}

const IconDot = ({ isActive }: IconDotProps) => {
  return (
    <div
      className={cn(
        "hover:bg-fadeBlack h-3 w-3 rounded-full bg-fadeWhite",
        isActive && "bg-White",
      )}
    />
  );
};

export default IconDot;

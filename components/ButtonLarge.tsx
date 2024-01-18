import Link from "next/link";
import { Button } from "./ui/button";

interface ButtonLargeProps {
  text: string;
}

const ButtonLarge = ({ text }: ButtonLargeProps) => {
  return <button className="large-button">{text}</button>;
};

export default ButtonLarge;

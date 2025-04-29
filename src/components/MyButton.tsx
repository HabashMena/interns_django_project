import { ReactNode } from "react";

interface buttonProps {
  children: ReactNode;
  color?: "primary" | "secondary"; //? means optinal
  onClick: () => void;
}

const MyButton = ({ children, color, onClick }: buttonProps) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default MyButton;

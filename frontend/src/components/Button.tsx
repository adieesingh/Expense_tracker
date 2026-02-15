import type React from "react";

interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      type="submit"
      className="btn btn-primary w-full mt-3"
      disabled={props.disabled}
      
    >
      {props.text}
    </button>
  );
};

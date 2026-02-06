import type React from "react";

interface ButtonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
            onClick={props.onClick}
            type="submit"
            className="btn btn-primary w-full"
          >
            {props.text}
          </button>
  );
};

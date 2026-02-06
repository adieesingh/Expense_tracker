import { Link } from "react-router-dom";

interface FooterProps {
  text: string;
  message: string;
  link:string
}
export const Footer = (props: FooterProps) => {
  return (
    <p className="text-center text-sm text-gray-600 mt-6">
      {props.message}?{" "}
      <span className="text-indigo-600 cursor-pointer hover:underline">
        <Link to={props.link} >{props.text} </Link>
      </span>
    </p>
  );
};

interface HeaderProps {
  text: string;
}

export const Heading = (props: HeaderProps) => {
  return (
    <h1 className="text-2xl font-bold text-center text-gray-800 pt-4">
      {props.text}
    </h1>
  );
};

interface DropDownProps {
  props: string[];
  text: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  formData: string;
  option: string;
}
export const DropDown = (props: DropDownProps) => {
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-700">
        {props.text}
      </label>
      <select
        value={props.formData}
        onChange={props.onChange}
        className="selectBar"
      >
        <option value="">{props.option}</option>
        {props.props.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
    </>
  );
};

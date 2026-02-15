
import DatePicker from "react-datepicker";
interface DateProps{
    onChange:React.ChangeEventHandler<HTMLInputElement>
    date:Date |null
}
export const Date =(props:DateProps)=>{
    
  

  return <DatePicker selected={props.date} onChange={props.onChange} />;
};



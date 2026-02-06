

interface InputProps{
    type:string,
    placeholder:string,
    onChange:React.ChangeEventHandler<HTMLInputElement>,
    value:string
    text:string

}
export const InputBox =(props:InputProps)=>{
    return <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              {props.text}
            </label>
            <input
              type={props.type}
              placeholder={props.placeholder}
              onChange={props.onChange}
              className="input"
            />
          </div> 
}
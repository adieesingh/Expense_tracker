interface BottomProps{
    text:string
}

export const Bottom =(props:BottomProps)=>{
    return  <div className="flex justify-start text-center">
                <a
                  href="#"
                  className="text-sm text-indigo-600 hover:underline text-center"
                >
                 {props.text}
                </a>
              </div>
}
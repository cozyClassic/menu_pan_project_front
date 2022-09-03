import { useState } from "react";
import DIV_NAMES from "../constants/div_names"

function InputProps(props){
    const [value, setValue] = useState(props.value);
    const onChange = (event) => setValue(event.target.value);
    return (
      <div>
      <div className={`input-prop ${props.className}`}> {DIV_NAMES[props.className]} :
      <input value={value} onChange={onChange}/>
      </div>
      </div>
    )
  }

export default InputProps;

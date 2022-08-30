import { useState } from "react";
import DIV_NAMES from "../constants/div_names"

function InputProps(prop){
    const [value, setValue] = useState(prop.value);
    const onChange = (event) => setValue(event.target.value);
    return (
      <div>
      <div className={`input-prop ${prop.className}`}> {DIV_NAMES[prop.className]} :
      <input value={value} onChange={onChange}/>
      </div>
      </div>
    )
  }

export default InputProps;

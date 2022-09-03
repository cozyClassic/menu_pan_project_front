import DIV_NAMES from "../constants/div_names"

function GetProps(props){
    return (
      <div>
      <div className={`getProp ${props.className}`}> {DIV_NAMES[props.className]} : {props.value} </div>
      </div>
    )
  }

export default GetProps
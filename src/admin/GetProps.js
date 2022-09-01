import DIV_NAMES from "../constants/div_names"

function GetProps(prop){
    return (
      <div>
      <div className={`getProp ${prop.className}`}> {DIV_NAMES[prop.className]} : {prop.value} </div>
      </div>
    )
  }

export default GetProps
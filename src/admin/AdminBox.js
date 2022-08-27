// import { useState } from "react";
import GetProps from "./GetProps";
// import InputProps from "./InputProps";
// import { useParams } from "react-router-dom";

function AdminBox(props){
  // const [updating, setUpdate] = useState(false);
  // const [value, setValue] = useState(data.value);
  // const onChange = (event) => setValue(event.target.value)
  let updating = false;
  // const value = Object.entries(props.data)
  // console.log(data)
  const get_props = Object.entries(props.data)

  return (
    <div className="AdminBox">
      <h2> Admin Box! </h2>
      <button className="plusDepth"> 하위 보기 </button>
      <button className="update"> 수정 </button>
      <button className="delete"> 삭제 </button>
      {get_props.map((key_value) => 
        <GetProps className={key_value[0]} value={key_value[1]} />
      )}
      {/* {updating ? ( 
        data.map((_, prop) => 
          <inputProps {...prop}/>)
        ):(
        data.map((_, prop) => 
          <GetProps {...prop}/>)
        )} */}
    </div>
  )
}

export default AdminBox;
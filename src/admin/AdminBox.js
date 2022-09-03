import { useState } from "react";
import GetProps from "./GetProps";
import InputProps from "./InputProps";
import "./AdminBox.css";

function AdminBox(props){
  const [updating, setUpdate] = useState(true);
  let datas = Object.entries(props.data)
  const update = () => setUpdate(!updating)

  return (
    <div className="AdminBox">
      
      {updating ? (
        <div>
        <button className="rightButton plusDepth"> 하위 보기 </button>
        <button className="rightButton update" onClick={update}> 수정 </button>
        <button className="rightButton delete"> 삭제 </button>
        {datas.map((key_value) => 
          <GetProps key={key_value[0]} className={key_value[0]} value={key_value[1]} />)}
        </div>
        )
        :(
        <form>
        <button className="rightButton update" onClick={update}> 저장 </button>
        <button className="rightButton delete"> 취소 </button>
        {datas.map((key_value) => 
          <InputProps key={key_value[0]} className={key_value[0]} value={key_value[1]} />)}
        </form>
        )}
        
    </div>
  )
}

export default AdminBox;
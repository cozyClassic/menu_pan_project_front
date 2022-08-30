import { useState } from "react";
import GetProps from "./GetProps";
import InputProps from "./InputProps";

function AdminBox(props){
  const [updating, setUpdate] = useState(true);
  let datas = Object.entries(props.data)
  const update = () => setUpdate(!updating)

  return (
    <div className="AdminBox">
      <form>
      <h2> Admin Box! </h2>
      <button className="plusDepth"> 하위 보기 </button>
      <button className="update" onClick={update}> 수정 </button>
      <button className="delete"> 삭제 </button>

      {updating ? ( 
        datas.map((key_value) => 
        <GetProps key={key_value[0]} className={key_value[0]} value={key_value[1]} />
        )
        ):(
          datas.map((key_value) => 
          <InputProps key={key_value[0]} className={key_value[0]} value={key_value[1]} />
        )
        )}
        </form>
    </div>
  )
}

export default AdminBox;
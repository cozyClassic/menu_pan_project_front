import {useEffect, useState} from "react";

import AdminBox from './admin/AdminBox';

import "./App.css"

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async() => {
    const path = window.location.pathname;
    const API = `http://localhost:8000/admin${path}`;
    const response = await fetch(API);
    const json = await response.json();
    setData([...json]);
    setLoading(false);
  }

  const addData = async() => {
    const emptyData = {}
    Object.keys(data[0]).map((key)=> {
      emptyData[key] = ""
    })
    emptyData.name = (Math.floor(Math.random() * 100) + 1).toString();
    setData([...data,emptyData]);
  }

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div className="App">
        <h1> APP! </h1>
    {loading ? (
      <h1> Loading ... </h1>
    ): (
      <div> 
      {data.map((_data) =>  
      <AdminBox key={_data.name} data={_data} />)}
      {/* 추가버튼 누르면 여기에 div가 추가되어야 함*/}
      <button id="addButton" onClick={addData}> 추가 </button>
      </div>
    )}
    </div>
  );
}

export default App;

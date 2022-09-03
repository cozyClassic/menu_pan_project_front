import {useEffecft, useState} from "react";

import AdminBox from './admin/AdminBox';

import "./App.css"

const MOCK1 = [
  {
  name : "스타벅스",
  banner_url : "https://www.naver.com",
  banner_link : "https://www.naver.com"
  },
  {
    name : "한솥도시락",
    banner_url : "https://www.naver.com",
    banner_link : "https://www.naver.com"
    }
]

function App() {
  const [loading, setLoading] = useState(true);
  const [mock, setMock] = useState("");
  // 과제2 : fetch 사용 위해서 비동기로 처리하기

  const getMock = async() => {
    const path = window.location.pathname;
    const API = `http://localhost:8000/admin${path}`;
    const response = await fetch(API);
    const json = await response.json();
    setMock(json);
    setLoading(false);
  }
  
  return (
    <div className="App">
    {loading ? (
      <div>
        <h1> APP! </h1>
        {MOCK1.map((_mock) =>  
          <AdminBox key={_mock.name} data={_mock} />)}
      </div>
    ): (
      <h1> Loading ... </h1>
    )}
    </div>
  );
}

export default App;

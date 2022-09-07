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
    setData([...json.data]);
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div className="App">
      <div>
        <h1> APP! </h1>
    {loading ? (
      <h1> Loading ... </h1>
    ): (
      data.map((_data) =>  
      <AdminBox key={_data.name} data={_data} />)
    )}
      </div>
    </div>
  );
}

export default App;

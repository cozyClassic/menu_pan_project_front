import AdminBox from './admin/AdminBox';

const MOCK = [
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
  return (
    <div className="App">
      <h1> APP! </h1>
      {MOCK.map((_mock) =>  
        <AdminBox key={_mock.name} data={_mock} />)}
    </div>
  );
}

export default App;

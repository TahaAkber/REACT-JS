import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [data, setdata] = useState("");
  useEffect(() => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setdata(res.data.fact);
    });
  }, []);

  return (
    <div className="App">
      <button>Generate Table</button>
      <h2>{data}</h2>
    </div>
  );
}

export default App;

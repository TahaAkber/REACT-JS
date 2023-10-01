import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [excuse, setexcuse] = useState("");
  const fetchdata = (excuse) => {
    axios
      .get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`)
      .then((res) => {
        setexcuse(res.data[0].excuse);
        console.log(res.data);
      });
  };
  return (
    <div className="App">
      <h3>Generate an Excuse</h3>
      <button onClick={() => fetchdata("family")}>Family Excuse</button>
      <button onClick={() => fetchdata("party")}>Party</button>
      <button onClick={() => fetchdata("office")}>Office</button>
      <div>
        <p>{excuse}</p>
      </div>
    </div>
  );
}

export default App;

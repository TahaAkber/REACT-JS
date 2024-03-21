import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setdata] = useState([]);

  const party = () => {
    axios
      .get("https://excuser-three.vercel.app/v1/excuse/party/")
      .then((res) => {
        setdata(res.data);
      });
  };

  const family = () => {
    axios
      .get("https://excuser-three.vercel.app/v1/excuse/family/")
      .then((res) => {
        setdata(res.data);
      });
  };

  const office = () => {
    axios
      .get("https://excuser-three.vercel.app/v1/excuse/office/")
      .then((res) => {
        setdata(res.data);
      });
  };

  return (
    <div className="App">
      <h1>Generate an Excuse</h1>

      <button
        onClick={() => {
          party();
        }}
      >
        Party
      </button>
      <button
        onClick={() => {
          family();
        }}
      >
        {" "}
        Family
      </button>
      <button
        onClick={() => {
          office();
        }}
      >
        {" "}
        Office
      </button>
      <p>
        {data.map((i) => (
          <div>{i.excuse}</div>
        ))}
      </p>
    </div>
  );
}

export default App;

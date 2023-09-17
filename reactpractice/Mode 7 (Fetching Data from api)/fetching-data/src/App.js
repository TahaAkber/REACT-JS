import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";
function App() {
  Axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    console.log(res.data);
  });
  return (
    <div className="App">
      <button>Generate Table</button>
    </div>
  );
}

export default App;

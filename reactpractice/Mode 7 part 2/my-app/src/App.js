import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const [name, setname] = useState("");
  const fetchdata = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div className="App">
      <input
        placeholder="Ex.. Pedro"
        onChange={(event) => {
          setname(event.target.value);
        }}
      />
      <button onClick={fetchdata}>Predict Age</button>
      <h2>Predicted Age</h2>
    </div>
  );
}

export default App;

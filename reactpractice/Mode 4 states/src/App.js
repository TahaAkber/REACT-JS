import { useState } from "react";
import "./App.css";

function App() {
  const [Count, setCount] = useState(0);

  const HandleChange = () => {
    setCount(Count + 1);
  };
  const HandleDecrease = () => {
    setCount(Count - 1);
  };
  const Settozero = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <button onClick={HandleChange}>Increase Count</button>
      <button onClick={HandleDecrease}>Decrease Count</button>
      <button onClick={Settozero}> set to 0</button>
      <h2>{Count}</h2>
    </div>
  );
}

export default App;

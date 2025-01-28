import "./App.css";
import { useEffect, useState as Taha } from "react";
function App() {
  const [timer, settimer] = Taha(0);
  const [decrease, setdecrease] = Taha(0);

  let value = 5;
  const cloneusetate = (anvalue) => {
    value = anvalue;
    console.log(value);
    return [value];
  };
  console.log([value]);
  useEffect(() => {
    console.log("mounted with everyvalue change check");
  }, [timer]);
  return (
    <div className="App">
      <button
        onClick={() => {
          settimer(timer + 1);
        }}
      >
        increment timer
      </button>
      <button
        onClick={() => {
          setdecrease(decrease - 1);
        }}
      >
        Decrease timer
      </button>
      <button
        onClick={() => {
          cloneusetate(2);
        }}
      >
        New Function
      </button>
      <p>{timer}</p>
      <p>{decrease}</p>
      <div>{value}</div>
    </div>
  );
}

export default App;

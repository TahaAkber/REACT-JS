import { useEffect, useState } from "react";
import Task from "./components/Task";
import "./App.css";

function App() {
  const [showtext, setshowtext] = useState(false);

  //if want trigger one when component mounted then use empty array or use state in an array
  useEffect(() => {
    console.log("Component Mounted");
  }, [showtext]);
  return (
    <div className="App">
      <button
        onClick={() => {
          setshowtext(!showtext);
        }}
      >
        showtext
      </button>
      {showtext && <Task />}
    </div>
  );
}

export default App;

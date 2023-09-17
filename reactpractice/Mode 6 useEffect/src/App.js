import { useEffect, useState } from "react";
import Task from "./components/Task";
import "./App.css";

function App() {
  const [showtext, setshowtext] = useState(false);
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

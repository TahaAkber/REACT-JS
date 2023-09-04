import { useState } from "react";
import "./App.css";

function App() {
  const [todolist, settodolist] = useState([]);
  const [value, setvalue] = useState("");

  const handlechange = (event) => {
    setvalue(event.target.value);
  };

  const handleadd = () => {
    settodolist([...todolist, value]);
  };
  return (
    <div className="App">
      <div className="Addtask">
        <input onChange={handlechange} />
        <button onClick={handleadd}>Add Task</button>
      </div>
      <div className="displaytask">
        {todolist.map((i) => {
          return <h3>{i}</h3>;
        })}
      </div>
    </div>
  );
}

export default App;

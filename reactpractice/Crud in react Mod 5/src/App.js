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

  const deletetask = (taskName) => {
    const newarray = todolist.filter((i) => {
      if (i === taskName) {
        return false;
      } else {
        return true;
      }
    });
    settodolist(newarray);
  };
  return (
    <div className="App">
      <div className="Addtask">
        <input onChange={handlechange} />
        <button onClick={handleadd}>Add Task</button>
      </div>
      <div className="displaytask">
        {todolist.map((i) => {
          return (
            <div>
              <h3>{i}</h3>
              <button onClick={() => deletetask(i)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

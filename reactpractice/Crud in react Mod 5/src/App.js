import { useState } from "react";
import Task from "./Components/Task";
import "./App.css";

function App() {
  const [todolist, settodolist] = useState([]);
  const [value, setvalue] = useState("");

  const handlechange = (event) => {
    setvalue(event.target.value);
  };

  const handleadd = () => {
    const task = {
      //if todolist has element 1 or more then take array from array take last member and id then + 1 to id
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      taskname: value,
    };
    settodolist([...todolist, task]);
  };

  const deletetask = (id) => {
    const newarray = todolist.filter((i) => {
      if (i.id === id) {
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
            <Task taskname={i.taskname} id={i.id} deletetask={deletetask} />
          );
        })}
      </div>
    </div>
  );
}

export default App;

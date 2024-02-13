import "./App.css";
import { useState } from "react";
function App() {
  const [newvalue, setnewvalue] = useState(null);
  const [list, settodolist] = useState([]);
  const handleaddtolist = () => {
    if (newvalue != null) {
      const newarray = {
        id: list.length + 1,
        value: newvalue,
        complete: false,
      };
      settodolist([...list, newarray]);
    } else {
      alert("Enter value please to add");
    }
  };
  const deletetask = (id) => {
    const newlist = list.filter((i) => {
      if (i.id === id) {
        return false;
      } else {
        return true;
      }
    });
    settodolist(newlist);
  };

  return (
    <div className="App">
      <input
        placeholder="Enter Task"
        onChange={(e) => {
          setnewvalue(e.target.value);
        }}
      />

      <button
        onClick={() => {
          handleaddtolist();
        }}
      >
        add to list
      </button>
      <p>
        {list.map((i) => (
          <div>
            <p>{i.value}</p>
            <p>{i.id}</p>
            <div>
              <button
                onClick={() => {
                  deletetask(i.id);
                }}
              >
                Delete
              </button>
              <button>Completed task</button>
            </div>
          </div>
        ))}
      </p>
    </div>
  );
}

export default App;

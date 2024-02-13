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
  const handlecomplete = (id) => {
    const newlist = list.map((item) => {
      if (id === item.id) {
        return { ...item, complete: true };
      } else {
        return item;
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
            <label>{i.id}</label>
            <p style={{ color: !i.complete ? "red" : "green" }}>{i.value}</p>
            <div>
              <button
                onClick={() => {
                  deletetask(i.id);
                }}
              >
                X
              </button>
              <button
                onClick={() => {
                  handlecomplete(i.id);
                }}
              >
                Completed
              </button>
            </div>
          </div>
        ))}
      </p>
    </div>
  );
}

export default App;

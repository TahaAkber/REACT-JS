import "./App.css";
import { useState } from "react";
function App() {
  const [value, setvalue] = useState("");
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
            <p>{i.complete}</p>
          </div>
        ))}
      </p>
    </div>
  );
}

export default App;

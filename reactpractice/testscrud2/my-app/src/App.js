import "./App.css";
import { useState } from "react";
function App() {
  const [value, setvalue] = useState(null);
  const [newvalue, setnewvalue] = useState("");
  const [list, settodolist] = useState([]);
  const handleadd = () => {
    setvalue(newvalue);
  };
  const handleaddtolist = () => {
    const newarray = {
      id: list.length + 1,
      value: newvalue,
      complete: false,
    };
    settodolist([...list, newarray]);
  };
  return (
    <div className="App">
      <input
        placeholder="entertask"
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
      <p>{value}</p>
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

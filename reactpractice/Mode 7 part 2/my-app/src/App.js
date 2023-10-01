import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const [name, setname] = useState("");
  //give only 0 which is a value if we set to null or {} then we can get all the object and can print one by one
  const [predictedage, setpredictedage] = useState({});

  //const [predictedage, setpredictedage] = useState(0);
  const fetchdata = () => {
    //set res.data if we have full object
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setpredictedage(res.data);
    });
    // Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
    //   setpredictedage(res.data.age);
    // });
  };
  return (
    <div className="App">
      <input
        placeholder="Ex.. Pedro"
        onChange={(event) => {
          setname(event.target.value);
        }}
      />
      {/* question mark shows that to bring name,age,count of an object if exist */}
      <button onClick={fetchdata}>Predict Age</button>
      <h2>Name: {predictedage?.name}</h2>
      <h2>Predicted Age: {predictedage?.age}</h2>
      <h2>Count: {predictedage?.count}</h2>
    </div>
  );
}

export default App;

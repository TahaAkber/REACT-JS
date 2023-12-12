import React from 'react';
import './App.css';
import  Persons from './Components/Persons';
import {Country} from './Components/Persons';
function App() {
  //states using typescript
  //const[name,setname] = useState<string>("");
  return (
    <div className="App">
      <Persons
        name="Taha"
        email="taha@gmail.com"
        age={21}
        ismarried={false}
        friends={["zulminun", "talha", "wahab", "abdullah"]}
        //here we cant put any country other then 3 described
        country={Country.pakistan}
      />
    </div>
  );
}

export default App;

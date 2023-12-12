import React from 'react';
import './App.css';
import Persons from './Components/Persons';

function App() {
  return (
    <div className="App">
      <Persons
        name="Taha"
        email="taha@gmail.com"
        age={21}
        ismarried={false}
        friends={["zulminun","talha","wahab","abdullah"]}
      />
    </div>
  );
}

export default App;

import "./App.css";
import Job from "./Components/Job";
import User from "./Components/User";

function App() {
  // const isGreen = true;
  // const Age = 19;

  // mapped this using props and component
  // const Users = [
  //   { name: "Taha", age: 22 },
  //   { name: "Talha", age: 24 },
  //   { name: "Zulminun", age: 21 },
  // ];
  //Exercise
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];

  return (
    <div className="App">
      {/* Map using props and component dynamic */}
      {/* {Users.map((user) => {
        return (
          <div>
            <User name={user.name} age={user.age} />
          </div>
        );
      })} */}
      {/* Ternary Operators if and else.. */}
      {/* {Age >= 18 ? <h3>Over Age</h3> : <h3>Under Age</h3>}
      <h1 style={{ color: isGreen ? "green" : "red" }}>This is the Color</h1> */}
      {/* This is if statement */}
      {/* {isGreen && <button> This is button</button>} */}
      {/* simple user nhi lagega kuyun k Users wale function ko object banadia hai tou dot krke access hongi cheezein */}
      {/* props */}
      {/* <Job salary={25000} position="Senior Dev" company="Amazon" />
      <Job salary={20000} position="Junior Dev" company="Apple" />
      <Job salary={10000} position="Project Manager" company="Google" /> */}

      {planets.map((i) => i.isGasPlanet && <h2>{i.name}</h2>)}
    </div>
  );
}

export default App;

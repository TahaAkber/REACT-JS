import "./App.css";
import Planets from "./components/Planets";

function App() {
  const planets = [
    { name: "Mars", isGasplanet: false },
    { name: "Earth", isGasplanet: false },
    { name: "jupiter", isGasplanet: true },
    { name: "venus", isGasplanet: false },
    { name: "Neptune", isGasplanet: true },
    { name: "Uranus", isGasplanet: true },
  ];
  return (
    <div className="App">
      {planets.map((i) => (
        <div>
          <Planets name={i.name} isGasplanet={i.isGasplanet} />
        </div>
      ))}
    </div>
  );
}

export default App;

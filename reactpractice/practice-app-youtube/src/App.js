import "./App.css";
import Job from "./Components/Job";

function App() {
  return (
    <div className="App">
      <Job salary={25000} position="Senior Dev" company="Amazon" />
      <Job salary={20000} position="Junior Dev" company="Apple" />
      <Job salary={10000} position="Project Manager" company="Google" />
    </div>
  );
}

export default App;

import "./App.css";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <div className="App">
      <div className="searchbarcontainer">
        <div className="searchbar">
          <Searchbar />
        </div>
        <div className="searchresults"></div>
      </div>
    </div>
  );
}

export default App;

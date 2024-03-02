import "./App.css";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <div className="App">
      <div className="searchbarcontainer">
        <div className="searchbar">
          <b>
            <Searchbar />
          </b>
        </div>
        <div className="searchresults">
          <b>Search Results</b>
        </div>
      </div>
    </div>
  );
}

export default App;

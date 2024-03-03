import { useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";

function App() {
  const [results, setresults] = useState([]);
  return (
    <div className="App">
      <div className="searchbarcontainer">
        <div className="searchbar">
          <b>
            <Searchbar setresults={setresults} />
          </b>
        </div>
        <div className="searchresults">
          <b>Search Results</b>
          <p>
            {results.map((i) => (
              <div>
                <b>{i.name}</b>
              </div>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

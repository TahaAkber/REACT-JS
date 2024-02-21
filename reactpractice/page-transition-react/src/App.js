import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import NewRoutes from "./routes/NewRoutes";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <NewRoutes />
      </Router>
    </div>
  );
}

export default App;

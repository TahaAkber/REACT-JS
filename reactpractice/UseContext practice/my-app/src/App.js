import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./NAVBAR/Navbar";
import Profile from "./component/Profile";
import Contact from "./component/Contact";
import New from "./component/New";
import { useState, useContext } from "react";
function App() {
  const [name, setname] = useState("Taha");
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home name={name} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Profile" element={<Profile name={name} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

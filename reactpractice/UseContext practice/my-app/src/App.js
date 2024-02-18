import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./NAVBAR/Navbar";
import Profile from "./component/Profile";
import Contact from "./component/Contact";
import { useState, useContext, createContext } from "react";
export const Appcontext = createContext();
function App() {
  const [name, setname] = useState("Taha");
  return (
    <div className="App">
      <Appcontext.Provider value={{ name, setname }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </Router>
      </Appcontext.Provider>
    </div>
  );
}

export default App;

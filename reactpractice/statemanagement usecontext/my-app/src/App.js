import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";
import Navbar from "./Pages/Navbar";
import { useState, createContext } from "react";

export const AppContext = createContext();
function App() {
  const [username, setusername] = useState("Taha");
  return (
    <div className="App">
      <AppContext.Provider value={{ username, setusername }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h2>Error 404</h2>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;

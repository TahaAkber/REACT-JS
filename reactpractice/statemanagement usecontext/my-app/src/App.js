import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";
import Navbar from "./Pages/Navbar";
import { useState } from "react";

function App() {
  const [username, setusername] = useState("Taha");
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home username={username} setusername={setusername} />}
          />
          <Route path="/Menu" element={<Menu username={username} />} />
          <Route path="/contact" element={<Contact username={username} />} />
          <Route path="*" element={<h2>Error 404</h2>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

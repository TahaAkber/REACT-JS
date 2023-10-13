import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          NAVBAR
          <Link to={"/"}> Home</Link>
          <Link to={"/Menu"}> Menu</Link>
          <Link to={"/contact"}> contact</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h2>Error 404</h2>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

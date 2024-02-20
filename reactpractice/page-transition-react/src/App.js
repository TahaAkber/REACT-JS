import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Menu from "./components/pages/Menu";
import Navbar from "./components/navbar/Navbar";
import { AnimatePresence } from "framer-motion";
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

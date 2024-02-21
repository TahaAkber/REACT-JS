import React, { createContext } from "react";
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
import { useContext } from "react";
const Appcontext = createContext();
function App() {
  return (
    <div className="App">
      <Appcontext.Provider>
        <Router>
          <Navbar />
          <NewRoutes />
        </Router>
      </Appcontext.Provider>
    </div>
  );
}

export default App;

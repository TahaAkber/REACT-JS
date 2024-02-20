import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import About from "../components/pages/About";
import Home from "../components/pages/Home";
import Menu from "../components/pages/Menu";
import Contact from "../components/pages/Contact";
import { AnimatePresence } from "framer-motion";
function NewRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Menu" element={<Menu />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default NewRoutes;

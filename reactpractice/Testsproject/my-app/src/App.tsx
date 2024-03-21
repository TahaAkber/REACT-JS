import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/main";
import Login from "./pages/login";
import Navbar from "./components/navbar";
import Createpost from "./pages/createpost";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route path="/login" element={<Login />}></Route>
          {/* <Route path="/createpost" element={<Createpost />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

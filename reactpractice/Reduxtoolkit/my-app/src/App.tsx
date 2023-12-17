import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider} from 'react-redux'
import Home from './Components/Home';
import Login from './Components/Login';
import Contactus from './Components/Contactus';
import { store } from './store';
function App() {
  return (
    <div className="App">
      <Provider store = {store}>
      <Router>
        <Routes>
          <Route path="/" element={ <Home />}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/contact" element={<Contactus/>}></Route>
        </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;

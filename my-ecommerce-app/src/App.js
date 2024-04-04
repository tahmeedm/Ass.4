import LoginPage from './component/LoginPage';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './component/Homepage';
import Productpage from './component/Productpage';
<Route path="/login" element={<LoginPage />} />


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;

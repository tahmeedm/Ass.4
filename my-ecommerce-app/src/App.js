
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './component/Homepage';
import Productpage from './component/Productpage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/products" element={<Productpage />} />
       
      </Routes>
    </div>
  );
}

export default App;

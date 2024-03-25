
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './component/Homepage';
import Productpage from './component/Productpage';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/products" element={<Productpage />} />
        {/* Add other routes here */}
      </Routes>
    </div>
  );
}

export default App;

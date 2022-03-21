import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import LandingPage from './pages/landing-page';
import Mint from './pages/mint';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/mint' element={<Mint />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

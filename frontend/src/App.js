import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Registeruser from './pages/Registeruser';
import Mark from './pages/Mark';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registeruser />} />
        <Route path="/mark" element={<Mark />} />
    
      </Routes>
    </BrowserRouter>
  )
}
import React from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Navbar name="Text Utils" about="About Text Utils" />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<Textform title="Enter Text Below" />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

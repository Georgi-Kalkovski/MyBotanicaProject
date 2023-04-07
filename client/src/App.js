import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Details from './components/Details';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/species/:id" element={<Details />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
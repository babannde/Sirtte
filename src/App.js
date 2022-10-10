import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rent from "./pages/Rent";
import Culture from "./pages/Culture";
import Rentals from "./pages/Rentals";
import Rents from "./pages/Rents";
import './App.css';

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rent" element={<Rent />} />
      <Route path="/culture" element={<Culture />} />
      <Route path="/rentals" element={<Rentals />} />
      <Route path="/rents" element={<Rents />} />
    </Routes>
  )
};

export default App;

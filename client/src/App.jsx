import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RepairTypes from "./pages/RepairTypes";
import BrandsServed from "./pages/BrandsServed";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repair-types" element={<RepairTypes />} />
        <Route path="/brands-served" element={<BrandsServed />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

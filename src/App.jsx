import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TypesOfRepair from "./pages/TypesOfRepair";
import BrandsServed from "./pages/BrandsServed";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/types-of-repair" element={<TypesOfRepair />} />
        <Route path="/brands-served" element={<BrandsServed />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

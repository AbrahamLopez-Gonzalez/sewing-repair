import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import RepairTypesPage from "./pages/RepairTypesPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import ContactUsPage from "./pages/ContactUsPage.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/repair-types" element={<RepairTypesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
    </>
  );
}

export default App;

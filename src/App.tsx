import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import PackageDetails from './components/PackageDetails';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Packages />
            </>
          } />
          <Route path="/package/:id" element={<PackageDetails />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
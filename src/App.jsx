import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import NotFound from './components/NotFound.jsx';
import ServiceUnavailable from './components/ServiceUnavailable.jsx';
import useParallax from './components/useParallax.js';
import useRevealOnScroll from './components/useRevealOnScroll.js';

const App = () => {
  useParallax();
  useRevealOnScroll();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/503" element={<ServiceUnavailable />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

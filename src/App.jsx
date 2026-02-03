import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ExploreBook from './components/ExploreBook.jsx';
import EbookOfWeek from './components/EbookOfWeek.jsx';
import SearchSection from './components/SearchSection.jsx';
import WhyBuy from './components/WhyBuy.jsx';
import Testimonials from './components/Testimonials.jsx';
import PopularBanner from './components/PopularBanner.jsx';
import BooksOnSale from './components/BooksOnSale.jsx';
import Footer from './components/Footer.jsx';
import useParallax from './components/useParallax.js';
import useRevealOnScroll from './components/useRevealOnScroll.js';

const App = () => {
  useParallax();
  useRevealOnScroll();

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <Hero />
      <ExploreBook />
      <EbookOfWeek />
      <SearchSection />
      <WhyBuy />
      <Testimonials />
      <PopularBanner />
      <BooksOnSale />
      <Footer />
    </div>
  );
};

export default App;

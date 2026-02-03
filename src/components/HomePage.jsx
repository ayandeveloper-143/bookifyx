import React from 'react';
import Header from './Header.jsx';
import Hero from './Hero.jsx';
import ExploreBook from './ExploreBook.jsx';
import EbookOfWeek from './EbookOfWeek.jsx';
import SearchSection from './SearchSection.jsx';
import WhyBuy from './WhyBuy.jsx';
import Testimonials from './Testimonials.jsx';
import PopularBanner from './PopularBanner.jsx';
import BooksOnSale from './BooksOnSale.jsx';
import Footer from './Footer.jsx';

const HomePage = () => {
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

export default HomePage;

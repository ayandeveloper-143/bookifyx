import React from 'react';
import BookCarousel from './BookCarousel.jsx';

const ExploreBook = () => {
  return (
    <section className="w-full py-12 md:py-16 md:mt-12 bg-sand border-y border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-4 md:space-y-6 fade-in-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Your Personal
            <br />
            Digital Library.
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
            Read your purchased books instantly on all devices.
            <br />
            Your library grows with every book you buy.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <button className="border border-gray-300 px-6 py-2 md:py-3 rounded-lg font-medium flex items-center justify-center gap-2 text-white w-full sm:w-auto bg-primary border-primary">
              View My Library
              <span className="text-xl hidden sm:inline">→</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center mt-12 lg:mt-0 w-full fade-in-right">
          <BookCarousel />

          <p className="mt-6 text-gray-700 dark:text-gray-300 text-center text-sm md:text-lg">
            Enjoy the insightful experience
            <br />
            with the <span className="font-semibold text-primary">new releases</span> e-book
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExploreBook;

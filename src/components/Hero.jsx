import React from 'react';
import ThemeImage from './ThemeImage.jsx';

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-16 relative">
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-30 pointer-events-none gradient-splash hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center relative z-10">
        <div className="space-y-4 md:space-y-6 fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Discover Your <span className="text-primary">Favorite</span>
            <br />
            Book With <span className="text-primary">BookifyX</span>.
          </h1>

          <p className="text-gray-600 text-base md:text-lg">
            Browse, buy, and read millions of e-books instantly. From timeless classics to latest releases,
            your next great read is just a purchase away.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
            <button className="text-white px-6 py-2 md:py-3 rounded-lg font-medium hover:opacity-90 border-2 transition-opacity w-full sm:w-auto bg-primary border-primary">
              Shop Now
            </button>

            <button className="border border-gray-300 dark:border-gray-600 px-6 py-2 md:py-3 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-100 flex items-center justify-center gap-2 transition-colors w-full sm:w-auto">
              Browse Books
              <span className="text-xl hidden sm:inline">→</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-4 md:gap-8 pt-4 opacity-70 relative">
            <ThemeImage
              lightSrc="/src/assets/rezorpay.svg"
              darkSrc="/src/assets/rezorpay_dark.svg"
              className="h-5 md:h-6 select-none"
              draggable={false}
              alt="Rezorpay"
            />
            <ThemeImage
              lightSrc="/src/assets/cashfree.svg"
              darkSrc="/src/assets/cashfree_dark.svg"
              className="h-5 md:h-6 select-none"
              draggable={false}
              alt="Cashfree"
            />
            <ThemeImage
              lightSrc="/src/assets/payu.svg"
              darkSrc="/src/assets/payu_dark.svg"
              className="h-5 md:h-6 select-none"
              draggable={false}
              alt="PayU"
            />
          </div>
        </div>

        <div className="relative mt-8 lg:mt-0 hidden lg:block fade-in-right">
          <img
            src="/src/assets/dot.png"
            data-parallax="0.3"
            className="absolute -top-6 right-0 h-12 w-12 opacity-40 select-none parallax-dot"
            draggable={false}
            alt="Decorative dot"
          />

          <img
            src="/src/assets/student.png"
            className="relative z-10 mx-auto select-none max-w-full h-auto"
            draggable={false}
            alt="Student"
          />

          <div
            data-parallax="0.1"
            className="absolute top-40 right-0 bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md border dark:border-gray-600 z-20 flex items-start gap-3 w-60"
          >
            <img src="/src/assets/laptop.png" className="h-7 w-7 select-none" draggable={false} alt="" />
            <div>
              <h4 className="font-semibold dark:text-white">Choose favourites</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">We really have a variety of courses.</p>
            </div>
          </div>

          <div
            data-parallax="0.15"
            className="absolute top-60 left-0 bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md border dark:border-gray-600 z-20 flex items-start gap-3 w-60"
          >
            <img src="/src/assets/book.png" className="h-7 w-7 select-none" draggable={false} alt="" />
            <div>
              <h4 className="font-semibold dark:text-white">Start Learning</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Let your learning adventure begin!</p>
            </div>
          </div>

          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-white px-10 py-6 rounded-xl shadow-sm flex items-center gap-4 z-30 whitespace-nowrap bg-primary">
            <div className="text-center">
              <p className="text-2xl font-bold">250+</p>
              <p className="text-sm text-white/70">Subjects to choose from</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">150+</p>
              <p className="text-sm text-white/70">Professional tutors</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">550+</p>
              <p className="text-sm text-white/70">Awesome courses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

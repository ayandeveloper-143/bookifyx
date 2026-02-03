import React from 'react';

const PopularBanner = () => {
  return (
    <section className="w-full bg-gray-50 dark:bg-[#1a1a1a] py-12 md:py-20 transition-colors duration-300">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-10 px-6">
        <div className="max-w-xl fade-in-left">
          <h2 className="font-serif text-3xl md:text-5xl text-gray-900 dark:text-white leading-tight">
            Most Popular E-Books <br className="hidden sm:block" />
            On BookifyX
          </h2>
          <button className="mt-6 rounded bg-[#268fe0] px-8 py-3 text-white shadow">Shop</button>
        </div>

        <div className="hidden md:block fade-in-right">
          <img className="h-40 w-64" src="/src/assets/home-1-rev-3.png" alt="Book" />
        </div>
      </div>
    </section>
  );
};

export default PopularBanner;

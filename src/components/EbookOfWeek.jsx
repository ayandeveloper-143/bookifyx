import React from 'react';

const books = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: `Book ${i + 1}`,
  src: `https://placehold.co/240x360?text=Book+${i + 1}`
}));

const BookWeekCard = ({ src }) => {
  return (
    <div className="relative w-[135px] h-[210px] rounded-xl overflow-hidden flex-shrink-0 shadow">
      <span className="absolute top-0 left-0 text-white text-[11px] font-medium px-2 py-1 rounded-br-lg bg-primary">
        E-book<br />of the week
      </span>
      <img src={src} className="w-full h-full object-cover" alt="E-book of the week" />
    </div>
  );
};

const EbookOfWeek = () => {
  const sliderBooks = [...books, ...books];

  return (
    <section className="w-full bg-white dark:bg-gray-800 py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-10 fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">E-book of the week</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm md:text-base">
            Discover the story everyone’s talking about.
          </p>
        </div>

        <div className="relative overflow-hidden pb-4 fade-in">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none slider-fade-left"></div>

          <div className="books-slider-track flex items-center gap-6">
            {sliderBooks.map((book, index) => (
              <BookWeekCard key={`${book.id}-${index}`} src={book.src} />
            ))}
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none slider-fade-right"></div>
        </div>
      </div>
    </section>
  );
};

export default EbookOfWeek;

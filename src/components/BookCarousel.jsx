import React, { useEffect, useState } from 'react';

const books = [
  { id: 1, title: 'Book 1', src: '/src/assets/book-1.png' },
  { id: 2, title: 'Book 2', src: '/src/assets/book-2.png' },
  { id: 3, title: 'Book 3', src: '/src/assets/book-3.png' }
];

const positions = ['pos-left', 'pos-center', 'pos-right'];

const BookCarousel = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOffset((prev) => (prev + 1) % 3);
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="book-carousel" id="bookCarousel">
        {books.map((book, index) => {
          const position = positions[(index + offset) % 3];
          return (
            <div key={book.id} className={`book-item ${position}`}>
              <img src={book.src} draggable={false} alt={book.title} />
            </div>
          );
        })}
      </div>

      <div className="flex gap-2 mt-4" id="carouselDots">
        {books.map((book, index) => {
          const isActive = index === offset % 3;
          return (
            <span
              key={book.id}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                isActive ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-500'
              }`}
            />
          );
        })}
      </div>
    </>
  );
};

export default BookCarousel;

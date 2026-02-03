import React from 'react';

const books = [
  {
    id: 1,
    title: 'The Missadventure of..',
    categories: 'ADVENTURE, SURVIVAL',
    rating: '4.7',
    price: '$45.4',
    original: '$98.4',
    discount: '50%',
    image: 'https://placehold.co/300x420'
  },
  {
    id: 2,
    title: 'The Missadventure of..',
    categories: 'ADVENTURE, SURVIVAL',
    rating: '4.7',
    price: '$45.4',
    original: '$98.4',
    discount: '50%',
    image: 'https://placehold.co/300x420'
  },
  {
    id: 3,
    title: 'Battle Drive',
    categories: 'THRILL, DRAMA, HORROR',
    rating: '4.7',
    price: '$45.4',
    original: '$98.4',
    discount: '50%',
    image: 'https://placehold.co/300x420'
  },
  {
    id: 4,
    title: 'Seconds [PART 1]',
    categories: 'THRILL, DRAMA, HORROR',
    rating: '6.5',
    price: '$45.4',
    original: '$98.4',
    discount: '50%',
    image: 'https://placehold.co/300x420'
  },
  {
    id: 5,
    title: 'Terrible Madness',
    categories: 'THRILL, DRAMA, HORROR',
    rating: '4.7',
    price: '$45.4',
    original: '$98.4',
    discount: '30%',
    image: 'https://placehold.co/300x420'
  },
  {
    id: 6,
    title: 'Take Out Tango',
    categories: 'SPORTS, DRAMA',
    rating: '6.8',
    price: '$56.4',
    original: '$98.4',
    discount: '40%',
    image: 'https://placehold.co/300x420'
  }
];

const SaleBookCard = ({ book }) => {
  return (
    <div className="w-full">
      <div className="relative">
        <img
          src={book.image}
          className="w-full h-64 sm:h-64 md:h-64 object-cover rounded-lg md:rounded-xl shadow-sm hover:shadow-sm transition-shadow"
          alt={book.title}
        />
        <span className="absolute top-2 left-2 md:top-3 md:left-3 bg-orange-500 text-white text-xs md:text-sm font-bold px-3 md:px-4 py-1 rounded-lg">
          {book.discount}
        </span>
      </div>

      <h3 className="mt-2 md:mt-3 font-semibold text-sm md:text-base text-gray-900 dark:text-gray-100 truncate">
        {book.title}
      </h3>
      <p className="text-xs text-[#268fe0] dark:text-[#268fe0] font-semibold mt-1">{book.categories}</p>

      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center space-x-1 text-orange-500 text-xs md:text-sm">
          <i className="fa-solid fa-star"></i>
          <span>{book.rating}</span>
        </div>
        <div className="flex items-center gap-1 md:gap-2">
          <span className="font-bold text-sm md:text-base text-gray-900 dark:text-gray-100">{book.price}</span>
          <span className="line-through text-gray-400 dark:text-gray-500 text-xs md:text-sm">{book.original}</span>
        </div>
      </div>
    </div>
  );
};

const BooksOnSale = () => {
  return (
    <section className="w-full py-12 md:py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-end justify-between mb-8 md:mb-10 fade-in">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">Books on Sale</h2>
          </div>
          <button type="button" className="text-sm md:text-base text-white px-5 py-2 rounded-lg font-medium bg-primary">
            View More
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8 fade-in delay-100">
          {books.map((book) => (
            <SaleBookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksOnSale;

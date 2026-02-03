import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const genres = ['JavaScript', 'Python', 'React', 'DSA', 'System Design'];

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/browse?query=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleGenreClick = (genre) => {
    setSearchTerm(genre);
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <section className="w-full bg-white dark:bg-gray-800 py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-10 fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">Find & Buy E-Books</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm md:text-base">
            Search millions of titles and buy e-books instantly across all genres.
          </p>
        </div>

        <div className="flex justify-center px-0 fade-in delay-100">
          <div className="w-full max-w-xl px-4 md:px-0">
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search e-books"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                onKeyDown={handleKeyDown}
                className="search-input w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-full px-4 md:px-6 py-2 md:py-3 pr-12 text-lg md:text-base transition-all duration-300 md:placeholder-gray-500"
              />

              <button
                type="button"
                onClick={handleSearch}
                className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-400 search-icon border-none bg-transparent"
                aria-label="Search"
              >
                <i className="fas fa-search text-lg"></i>
              </button>

              <button
                type="button"
                onClick={handleSearch}
                className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 text-white rounded-full px-4 py-2 search-button bg-primary"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-8 mb-8">
          <div className="flex flex-wrap gap-2 justify-center px-4 md:px-0 fade-in delay-200">
            {genres.map((genre) => (
              <button
                key={genre}
                type="button"
                onClick={() => handleGenreClick(genre)}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition border dark:border-gray-700"
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;

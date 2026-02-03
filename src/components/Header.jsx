import React, { useCallback, useEffect, useRef, useState } from 'react';
import ThemeToggle from './ThemeToggle.jsx';
import ThemeImage from './ThemeImage.jsx';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Browse Books', href: '/browse' },
  { label: 'Categories', href: '/categories' },
  { label: 'Best Sellers', href: '/best-sellers' },
  { label: 'About', href: '/about' }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const headerRef = useRef(null);

  const closeMenu = useCallback(() => {
    if (!isOpen) return;
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  }, [isOpen]);

  const toggleMenu = useCallback(() => {
    if (isOpen) {
      closeMenu();
      return;
    }
    setIsOpen(true);
  }, [closeMenu, isOpen]);

  useEffect(() => {
    const handleClick = (event) => {
      if (!headerRef.current) return;
      if (isOpen && !headerRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [closeMenu, isOpen]);

  return (
    <header
      ref={headerRef}
      id="header"
      className={`sticky top-0 z-50 w-full transition-colors duration-300 bg-white/85 backdrop-blur-[15px] border-b border-black/10 ${isOpen ? 'menu-open' : ''
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between relative">
        <div className="flex items-center space-x-10">
          <a href="#" className="flex items-center justify-center -mt-1 flex-shrink-0">
            <ThemeImage
              lightSrc="/src/assets/2.png"
              darkSrc="/src/assets/2_dark.png"
              className="h-8 w-auto rounded-md"
              alt="Logo"
            />
          </a>

          <nav className="hidden md:flex items-center space-x-6 text-gray-700 font-medium dark:text-gray-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <ThemeToggle />

          <button className="hidden sm:block px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            Sign in
          </button>

          <button className="hidden sm:block px-5 py-2 rounded-lg font-medium text-white bg-primary">
            Create free account
          </button>

          <button
            type="button"
            className={`hamburger md:hidden ${isOpen ? 'active' : ''}`}
            id="hamburger"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className={`mobile-menu ${isOpen ? 'active' : ''} ${isClosing ? 'closing' : ''}`}
      >
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <div className="flex flex-col gap-2 px-6 py-2">
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors w-full">
            Sign in
          </button>
          <button className="px-4 py-2 rounded-lg font-medium text-white w-full bg-primary">
            Create free account
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

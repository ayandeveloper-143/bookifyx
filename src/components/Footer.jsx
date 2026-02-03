import React from 'react';
import ThemeImage from './ThemeImage.jsx';

const footerColumns = [
  {
    title: 'Browse',
    links: [
      { label: 'All Books', href: '/all-books' },
      { label: 'Best Sellers', href: '/bestsellers' },
      { label: 'New Releases', href: '/new-releases' },
      { label: 'Categories', href: '/categories' },
      { label: 'My Library', href: '/my-library' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' }
    ]
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/help' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Send Feedback', href: '/feedback' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms', href: '/terms' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Cookies', href: '/cookies' },
      { label: 'DMCA', href: '/dmca' }
    ]
  }
];

const socialLinks = [
  { icon: 'fa-youtube', href: 'https://youtube.com' },
  { icon: 'fa-instagram', href: 'https://instagram.com' },
  { icon: 'fa-dribbble', href: 'https://dribbble.com' },
  { icon: 'fa-linkedin', href: 'https://linkedin.com' },
  { icon: 'fa-facebook', href: 'https://facebook.com' }
];

const Footer = () => {
  return (
    <footer className="w-full py-8 md:py-12 relative overflow-hidden border-b border-t border-black/5 dark:border-white/10 bg-sand">
      <div className="absolute -right-7 top-4 pointer-events-none z-0 hidden md:block rotate-[-16deg] opacity-[0.02]">
        <img src="/src/assets/sc-1.png" className="w-32 h-32 object-contain" alt="" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row justify-between gap-6 md:gap-8 items-start relative z-10">
        <div className="w-full md:w-1/5 space-y-4 md:mr-8">
          <div className="flex items-center gap-2">
            <a href="#" className="flex items-center justify-center -mt-1">
              <ThemeImage
                lightSrc="/src/assets/2.png"
                darkSrc="/src/assets/2_dark.png"
                className="h-8 w-auto rounded-md"
                alt="BookifyX"
              />
            </a>
          </div>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Your trusted marketplace to buy and read e-books from around the world.
          </p>

          <div className="flex items-center gap-4 ml-1 pt-2">
            {socialLinks.map((link) => (
              <a
                key={link.icon}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <i className={`fab ${link.icon} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title} className="w-full sm:w-1/2 md:w-1/5 space-y-2">
            <h3 className="font-semibold text-base md:text-lg dark:text-gray-100 text-primary">{column.title}</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 md:mt-12 border-t border-black/5 dark:border-white/10"></div>

      <div className="max-w-7xl mx-auto mt-6 md:mt-7 flex flex-col md:flex-row flex-wrap items-center justify-between pt-4 md:pt-6 text-xs md:text-sm px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 text-gray-600 dark:text-gray-400 w-full md:w-auto">
          <a href="/terms" className="hover:text-primary dark:hover:text-primary transition-colors cursor-pointer">
            Terms & Conditions
          </a>
          <a href="/cookies" className="hover:text-primary dark:hover:text-primary transition-colors cursor-pointer">
            Cookies
          </a>
          <a href="/privacy" className="hover:text-primary dark:hover:text-primary transition-colors cursor-pointer">
            Privacy Policy
          </a>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mt-8 md:mt-0 text-center md:text-right w-full md:w-auto">
          © 2026 BookifyX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

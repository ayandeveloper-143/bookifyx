import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const ServiceUnavailable = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main className="min-h-[calc(100vh-8rem)] bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center px-6">
        <div className="max-w-xl text-center">
          <div className="error-number">503</div>
          <h1 className="mt-4 text-3xl md:text-5xl font-semibold">Service temporarily unavailable</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            We’re doing a bit of maintenance. Please check back soon.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <a href="/"
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-center">
              Go to Homepage
            </a>
            <a href="/browse"
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-center">
              Browse Books
            </a>
          </div>
        </div>
      </main>
      <Footer />

    </div>
  );
};

export default ServiceUnavailable;

import React from 'react';

const ServiceUnavailable = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-400">503</p>
        <h1 className="mt-4 text-3xl md:text-5xl font-semibold">Service temporarily unavailable</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          We’re doing a bit of maintenance. Please check back soon.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/"
            className="inline-flex px-6 py-3 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition"
          >
            Back to home
          </a>
          <a
            href="mailto:support@bookifyx.com"
            className="inline-flex px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            Contact support
          </a>
        </div>
      </div>
    </main>
  );
};

export default ServiceUnavailable;

import React from 'react';

const steps = [
  {
    id: 1,
    title: 'Best Prices',
    description: 'Affordable e-books with regular discounts and special offers.'
  },
  {
    id: 2,
    title: 'Instant Delivery',
    description: 'Buy and start reading instantly. No waiting or shipping delays.'
  },
  {
    id: 3,
    title: 'Read Anywhere',
    description: 'Access your purchased books on phone, tablet, or computer anytime.'
  },
  {
    id: 4,
    title: 'Own Your Books',
    description: 'Your purchased books are yours forever. Build your digital library.'
  }
];

const WhyBuy = () => {
  return (
    <section className="w-full bg-gray-50 dark:bg-[#1a1a1a] py-12 md:py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-50 leading-tight fade-in">
          Why Buy on <br className="hidden sm:block" /> <span className="text-primary">BookifyX?</span>
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto fade-in">
          Best prices on e-books, instant delivery, easy checkout, and read across all your devices. Own your
          books forever.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mt-10 sm:mt-12 md:mt-16">
          {steps.map((step, index) => (
            <div key={step.id} className={`flex items-start gap-4 sm:flex-col sm:items-center fade-in delay-${(index + 1) * 100}`}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary hover:bg-[#e67e1f] dark:hover:bg-[#fd9e48] flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                <span className="text-white font-bold text-lg sm:text-xl">{step.id}</span>
              </div>
              <div className="text-left sm:text-center">
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-sm sm:text-base">
                  {step.title}
                </h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBuy;

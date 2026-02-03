import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const HelpCenter = () => {
    const helpTopics = [
        {
            icon: 'fas fa-book',
            title: 'Getting Started',
            description: 'Learn how to browse, search, and purchase e-books on BookifyX.',
        },
        {
            icon: 'fas fa-download',
            title: 'Downloading E-Books',
            description: 'Step-by-step guide to download your purchased e-books.',
        },
        {
            icon: 'fas fa-credit-card',
            title: 'Payment & Billing',
            description: 'Information about payment methods, invoices, and refunds.',
        },
        {
            icon: 'fas fa-user-cog',
            title: 'Account Settings',
            description: 'Manage your profile, password, and preferences.',
        },
        {
            icon: 'fas fa-mobile-alt',
            title: 'Reading on Devices',
            description: 'How to read e-books on different devices and apps.',
        },
        {
            icon: 'fas fa-shield-alt',
            title: 'Privacy & Security',
            description: 'Learn about how we protect your data and privacy.',
        },
    ];

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
            <Header />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
                <div className="text-center mb-12 fade-in">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Help Center
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Find answers to common questions and learn how to get the most out of BookifyX.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {helpTopics.map((topic, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-xl p-6 transition-all duration-300 fade-in border border-gray-200 dark:border-gray-700"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                                <i className={`${topic.icon} text-white text-xl`}></i>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {topic.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                {topic.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="bg-gray-50 dark:bg-[#1a1a1a] rounded-2xl p-8 text-center fade-in">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                        Still need help?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Can't find what you're looking for? Our support team is here to help.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
                    >
                        Contact Support
                    </a>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default HelpCenter;

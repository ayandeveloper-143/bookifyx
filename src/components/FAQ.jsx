import React, { useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'How do I purchase an e-book?',
            answer: 'Simply browse our collection, click on the book you want, and click "Buy Now". You can pay using credit/debit cards, UPI, or net banking. Once payment is complete, the e-book will be available in your library.',
        },
        {
            question: 'What formats are the e-books available in?',
            answer: 'Our e-books are available in PDF, EPUB, and MOBI formats. You can choose your preferred format during download.',
        },
        {
            question: 'Can I read e-books on multiple devices?',
            answer: 'Yes! Once you purchase an e-book, you can read it on any device. Simply log in to your BookifyX account and access your library from anywhere.',
        },
        {
            question: 'How do I download my purchased e-books?',
            answer: 'Go to "My Library" in your account, find the book you want to download, and click the download button. Choose your preferred format and the download will start automatically.',
        },
        {
            question: 'What is your refund policy?',
            answer: 'Refunds are only provided if you do not receive your e-book in your email or BookifyX account within 7 days of purchase. For any other issues, please contact our support team for assistance.',
        },
        {
            question: 'Do you offer any discounts for students?',
            answer: 'Yes! We offer a 20% student discount. Verify your student status through your .edu email address to unlock the discount on all purchases.',
        },
        {
            question: 'How can I reset my password?',
            answer: 'Click on "Forgot Password" on the login page, enter your registered email address, and we\'ll send you a password reset link.',
        },
        {
            question: 'Are the e-books DRM protected?',
            answer: 'Some e-books have DRM protection as per publisher requirements. DRM-free books are clearly marked on the product page.',
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
            <Header />
            <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
                <div className="text-center mb-12 fade-in">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Quick answers to questions you may have about BookifyX.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden fade-in border border-gray-200 dark:border-gray-700 shadow-sm"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                            >
                                <span className="font-medium text-gray-900 dark:text-white pr-4">
                                    {faq.question}
                                </span>
                                <i
                                    className={`fas fa-chevron-down text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                ></i>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <p className="px-6 pb-4 text-gray-600 dark:text-gray-400">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center fade-in">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Didn't find your answer?
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
                    >
                        Contact Us
                    </a>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default FAQ;

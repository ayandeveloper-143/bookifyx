import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const TermsConditions = () => {
    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative py-12 md:py-16 bg-gray-50 dark:bg-[#1a1a1a]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center fade-in">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Terms and Conditions
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Last updated: February 4, 2026
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-12 md:py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6">
                        <div className="prose prose-lg dark:prose-invert max-w-none">

                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-8 fade-in">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Introduction</h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Welcome to BookifyX! These Terms and Conditions outline the rules and regulations for the use of our website and services. By accessing and using BookifyX, you accept and agree to be bound by these terms. If you disagree with any part of the terms, please do not use our website.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-8 fade-in">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Account Registration</h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    To access certain features, you must create an account. You agree to:
                                </p>
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                                    <li>Provide accurate and complete information during registration</li>
                                    <li>Maintain the security of your account credentials</li>
                                    <li>Notify us immediately of any unauthorized access</li>
                                    <li>Be responsible for all activities under your account</li>
                                    <li>Not share your account with others</li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-8 fade-in">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Use of Services</h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    You agree to use BookifyX only for lawful purposes. You must NOT:
                                </p>
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                                    <li>Violate any applicable laws or regulations</li>
                                    <li>Infringe on intellectual property rights of others</li>
                                    <li>Distribute, copy, or share purchased e-books without authorization</li>
                                    <li>Attempt to hack, disrupt, or damage our services</li>
                                    <li>Use automated systems to access our platform</li>
                                    <li>Engage in fraudulent activities or misrepresentation</li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-8 fade-in">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">E-Book Purchases & Licenses</h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    When you purchase an e-book on BookifyX:
                                </p>
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                                    <li>You receive a limited, non-transferable license to read the content</li>
                                    <li>You do not own the e-book; you own a license to access it</li>
                                    <li>E-books are for personal, non-commercial use only</li>
                                    <li>You may download on up to 5 devices linked to your account</li>
                                    <li>Redistribution or resale is strictly prohibited</li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-8 fade-in">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Intellectual Property</h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    All content on BookifyX, including text, graphics, logos, images, and software, is the property of BookifyX or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our explicit written permission.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-8 fade-in">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Payments & Pricing</h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Regarding payments on our platform:
                                </p>
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                                    <li>All prices are listed in Indian Rupees (₹) unless stated otherwise</li>
                                    <li>Prices may change without prior notice</li>
                                    <li>Applicable taxes will be added at checkout</li>
                                    <li>We accept major credit/debit cards, UPI, and net banking</li>
                                    <li>Refunds are subject to our <a href="/refund-policy" className="text-primary hover:underline">Refund Policy</a></li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-8 fade-in">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Limitation of Liability</h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    BookifyX shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the website. We do not guarantee uninterrupted or error-free service. Our total liability shall not exceed the amount paid by you in the last 12 months.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-8 fade-in">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Account Termination</h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    We reserve the right to suspend or terminate your account at any time if you violate these terms, engage in fraudulent activity, or for any reason at our sole discretion. Upon termination, your access to purchased e-books may be revoked.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-8 fade-in">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Changes to Terms</h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    We reserve the right to modify these Terms and Conditions at any time. Any changes will be posted on this page with an updated revision date. Continued use of our services after changes constitutes acceptance of the updated terms. We recommend reviewing this page periodically.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 fade-in">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    If you have any questions or concerns about our Terms and Conditions, please contact us:
                                </p>
                                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                                    <p><strong>Email:</strong> legal@bookifyx.com</p>
                                    <p><strong>Address:</strong> 123 Book Street, Kolkata, West Bengal 700001</p>
                                </div>
                                <div className="mt-6">
                                    <a href="/contact" className="inline-block bg-primary text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
                                        Contact Support
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default TermsConditions;
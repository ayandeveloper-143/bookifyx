import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const PrivacyPolicy = () => {
    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative py-12 md:py-16 bg-gray-50 dark:bg-[#1a1a1a]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center fade-in">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Privacy Policy
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
                                    At BookifyX, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our website and services. By using BookifyX, you agree to the collection and use of information in accordance with this policy.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-8 fade-in">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Information We Collect</h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    We collect several types of information to provide and improve our services:
                                </p>
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                                    <li><strong>Personal Information:</strong> Name, email address, phone number, billing address</li>
                                    <li><strong>Account Information:</strong> Username, password, profile preferences</li>
                                    <li><strong>Payment Information:</strong> Credit card details, UPI ID, payment history</li>
                                    <li><strong>Usage Data:</strong> Pages visited, time spent, reading habits, search queries</li>
                                    <li><strong>Device Information:</strong> IP address, browser type, operating system</li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-8 fade-in">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">How We Use Your Information</h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    We use the collected information for various purposes:
                                </p>
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                                    <li>To provide and maintain our services</li>
                                    <li>To process transactions and send purchase confirmations</li>
                                    <li>To personalize your reading experience and recommendations</li>
                                    <li>To send promotional emails and newsletters (with your consent)</li>
                                    <li>To provide customer support and respond to inquiries</li>
                                    <li>To detect and prevent fraud or unauthorized access</li>
                                    <li>To analyze usage patterns and improve our platform</li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-8 fade-in">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Data Sharing</h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    We do not sell your personal information. We may share your data with:
                                </p>
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                                    <li><strong>Payment Processors:</strong> To complete transactions securely</li>
                                    <li><strong>Service Providers:</strong> Hosting, analytics, and email delivery services</li>
                                    <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                                    <li><strong>Business Transfers:</strong> In case of merger, acquisition, or asset sale</li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-8 fade-in">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Data Security</h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes SSL encryption, secure data storage, regular security audits, and access controls. However, no method of transmission over the internet is 100% secure.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-8 fade-in">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Your Rights</h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    You have the following rights regarding your personal data:
                                </p>
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                                    <li><strong>Access:</strong> Request a copy of your personal data</li>
                                    <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                                    <li><strong>Deletion:</strong> Request deletion of your account and data</li>
                                    <li><strong>Portability:</strong> Receive your data in a portable format</li>
                                    <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-8 fade-in">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Data Retention</h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    We retain your personal information for as long as your account is active or as needed to provide you services. We may retain certain information as required by law or for legitimate business purposes, such as fraud prevention and legal compliance.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-8 fade-in">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Changes to This Policy</h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically. Continued use of our services after changes constitutes acceptance of the updated policy.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 fade-in">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    If you have any questions or concerns about our Privacy Policy, please contact us:
                                </p>
                                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                                    <p><strong>Email:</strong> privacy@bookifyx.com</p>
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

export default PrivacyPolicy;
import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const TermsConditions = () => {
    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Header />
            <main className="min-h-[calc(100vh-8rem)] bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center px-6 py-12">
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
                    <p className="mb-4">
                        Welcome to BookifyX! These Terms and Conditions outline the rules and regulations for the use of our website.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
                    <p className="mb-4">
                        By accessing and using BookifyX, you accept and agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, please do not use our website.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4">Use of the Website</h2>
                    <p className="mb-4">
                        You agree to use BookifyX only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment of the website.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
                    <p className="mb-4">
                        All content on BookifyX, including text, graphics, logos, and images, is the property of BookifyX or its content suppliers and is protected by intellectual property laws.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
                    <p className="mb-4">
                        BookifyX shall not be liable for any damages arising out of or in connection with your use of the website.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
                    <p className="mb-4">
                        We reserve the right to modify these Terms and Conditions at any time. Any changes will be posted on this page with an updated revision date.
                    </p>
                    <p className="mb-4">
                        If you have any questions or concerns about our Terms and Conditions, please contact us at support@bookifyx.com.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsConditions;
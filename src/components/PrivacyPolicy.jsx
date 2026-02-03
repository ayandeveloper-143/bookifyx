import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const PrivacyPolicy = () => {
    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Header />
            <main className="min-h-[calc(100vh-8rem)] bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center px-6 py-12">
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
                    <p className="mb-4">
                        At BookifyX, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our website.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                    <p className="mb-4">
                        We may collect personal information such as your name, email address, and browsing behavior on our site to enhance your experience.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                    <p className="mb-4">
                        We use your information to provide and improve our services, communicate with you, and personalize your experience on BookifyX.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                    <p className="mb-4">
                        We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                    <p className="mb-4">
                        You have the right to access, correct, or delete your personal information. Please contact us if you wish to exercise these rights.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
                    <p className="mb-4">
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
                    </p>
                    <p className="mb-4">
                        If you have any questions or concerns about our Privacy Policy, please contact us at privacy@bookifyx.com.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
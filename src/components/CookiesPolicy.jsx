import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const CookiesPolicy = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 bg-gray-50 dark:bg-[#1a1a1a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Cookies Policy
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
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What Are Cookies?</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit our website. They help us provide you with a better experience by remembering your preferences, keeping you logged in, and understanding how you use our platform.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-8 fade-in">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Types of Cookies We Use</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Essential Cookies</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      These cookies are necessary for the website to function properly. They enable core features like user authentication, shopping cart functionality, and secure checkout. You cannot disable these cookies.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Preference Cookies</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      These cookies remember your settings and preferences, such as your preferred language, theme (dark/light mode), and reading preferences. They enhance your experience by personalizing the website.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Analytics Cookies</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We use analytics cookies to understand how visitors interact with our website. This helps us improve our services, identify popular content, and fix any issues. Data collected is aggregated and anonymous.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Marketing Cookies</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      These cookies are used to deliver relevant advertisements and track the effectiveness of our marketing campaigns. They may be set by our advertising partners.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-8 fade-in">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Third-Party Cookies</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Some cookies on our website are set by third-party services. These include:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li><strong>Google Analytics</strong> - For website traffic analysis</li>
                  <li><strong>Payment Providers</strong> - For secure payment processing</li>
                  <li><strong>Social Media Platforms</strong> - For social sharing features</li>
                  <li><strong>Customer Support Tools</strong> - For live chat functionality</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-8 fade-in">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Managing Cookies</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li><strong>Browser Settings</strong> - Most browsers allow you to block or delete cookies through their settings menu</li>
                  <li><strong>Cookie Banner</strong> - Use our cookie consent banner to manage your preferences</li>
                  <li><strong>Opt-Out Links</strong> - Visit third-party opt-out pages for specific services</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-400 mt-4">
                  <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website and your ability to use some features.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-8 fade-in">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Cookie Retention</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Different cookies have different lifespans:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 mt-4">
                  <li><strong>Session Cookies</strong> - Deleted when you close your browser</li>
                  <li><strong>Persistent Cookies</strong> - Remain on your device for a set period (e.g., 30 days to 1 year)</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-8 fade-in">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Updates to This Policy</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  We may update this Cookies Policy from time to time to reflect changes in our practices or for legal reasons. We will notify you of any significant changes by posting a notice on our website.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 fade-in">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                  <p><strong>Email:</strong> privacy@bookifyx.com</p>
                  <p><strong>Address:</strong> 123 Book Street, Kolkata, West Bengal 700001</p>
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

export default CookiesPolicy;

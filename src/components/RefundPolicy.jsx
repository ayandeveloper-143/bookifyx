import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const RefundPolicy = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 bg-gray-50 dark:bg-[#1a1a1a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Refund Policy
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
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Our Refund Commitment</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  At BookifyX, we want you to be completely satisfied with your e-book purchases. We understand that sometimes a book may not meet your expectations, and we're here to help. Please read our refund policy carefully to understand your options.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-8 fade-in">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Eligibility for Refunds</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  You may be eligible for a refund under the following conditions:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Request made within <strong>7 days</strong> of purchase</li>
                  <li>The e-book has not been downloaded more than once</li>
                  <li>Technical issues preventing you from accessing the content</li>
                  <li>Duplicate purchase (accidental double payment)</li>
                  <li>Content significantly different from the description</li>
                  <li>Defective or corrupted file that cannot be fixed</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-8 fade-in">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Non-Refundable Items</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  The following purchases are generally not eligible for refunds:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>E-books purchased more than 7 days ago</li>
                  <li>Books that have been fully downloaded and read</li>
                  <li>Subscription plans after the trial period</li>
                  <li>Gift purchases that have been redeemed</li>
                  <li>Bundle purchases where any item has been accessed</li>
                  <li>Promotional or discounted items (unless defective)</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-8 fade-in">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">How to Request a Refund</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Go to Your Orders</h3>
                      <p className="text-gray-600 dark:text-gray-400">Navigate to your account and find the order you want to refund.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Click "Request Refund"</h3>
                      <p className="text-gray-600 dark:text-gray-400">Select the item and click the refund request button.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Provide Reason</h3>
                      <p className="text-gray-600 dark:text-gray-400">Tell us why you're requesting a refund to help us improve.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Wait for Review</h3>
                      <p className="text-gray-600 dark:text-gray-400">Our team will review your request within 2-3 business days.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-8 fade-in">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Refund Processing</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Once your refund is approved:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li><strong>Credit/Debit Cards:</strong> 5-10 business days to reflect in your account</li>
                  <li><strong>UPI Payments:</strong> 2-3 business days</li>
                  <li><strong>Wallet Balance:</strong> Instant credit to your wallet</li>
                  <li><strong>Net Banking:</strong> 5-7 business days</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-400 mt-4">
                  <strong>Note:</strong> Refunds are processed to the original payment method used for the purchase.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-8 fade-in">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technical Issues</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  If you're experiencing technical issues with your e-book, please contact our support team first. We may be able to resolve the issue without requiring a refund. Our technical team is available 24/7 to help you with:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 mt-4">
                  <li>Download problems</li>
                  <li>File format compatibility</li>
                  <li>Reader app issues</li>
                  <li>Account access problems</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 fade-in">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Have questions about our refund policy? We're here to help:
                </p>
                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                  <p><strong>Email:</strong> refunds@bookifyx.com</p>
                  <p><strong>Phone:</strong> +91 98765 43210 (Mon-Sat, 9 AM - 6 PM)</p>
                  <p><strong>Live Chat:</strong> Available on our website 24/7</p>
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

export default RefundPolicy;

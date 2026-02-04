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
                  At BookifyX, we want you to receive your e-book without any issues. Refunds are only provided if you do <strong>not receive your e-book</strong> in your email or BookifyX account within 7 days of purchase. Please read our refund policy carefully to understand your options.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-8 fade-in">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Eligibility for Refunds</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  You are eligible for a full refund <strong>only if</strong>:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>You did <strong>not receive the e-book</strong> in your email and BookifyX account within <strong>7 days</strong> of purchase</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-400 mt-4">
                  <strong>Note:</strong> Refunds are <span className="text-red-500">not</span> provided for any other reason. If you face any technical issues, please contact our support team for assistance.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-8 fade-in">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Non-Refundable Items</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Refunds are <strong>not</strong> provided in the following cases:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>If the e-book is delivered to your email or BookifyX account</li>
                  <li>Any reason other than non-delivery of the e-book</li>
                  <li>Technical issues (please contact support for help)</li>
                  <li>Change of mind after purchase</li>
                  <li>Duplicate or accidental purchases (if e-book is delivered)</li>
                  <li>Content or format dissatisfaction</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-8 fade-in">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">How to Request a Refund</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Check Your Email and BookifyX Account</h3>
                      <p className="text-gray-600 dark:text-gray-400">Ensure you have not received the e-book in your email or BookifyX account within 7 days of purchase.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Contact Support</h3>
                      <p className="text-gray-600 dark:text-gray-400">If you have not received your e-book, contact our support team with your order details.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Wait for Review</h3>
                      <p className="text-gray-600 dark:text-gray-400">Our team will verify your claim and process your refund within 2-3 business days if eligible.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-8 fade-in">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Refund Processing</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Once your refund is approved (only for non-delivery of e-book):
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
                  If you're experiencing technical issues with your e-book, please contact our support team first. We will help resolve your issue, but refunds are only given if the e-book is not delivered to your email or BookifyX account within 7 days.
                  <br />
                  Our technical team is available 24/7 to help you with:
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
                  <p><strong>Phone:</strong> +91 85095 17215 (Mon-Sat, 9 AM - 6 PM)</p>
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

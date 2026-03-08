import React, { useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const SendFeedback = () => {
    const [formData, setFormData] = useState({
        feedbackType: 'suggestion',
        rating: 0,
        message: '',
        email: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRating = (rating) => {
        setFormData({ ...formData, rating });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Feedback submitted:', formData);
        setSubmitted(true);
    };

    const feedbackTypes = [
        { value: 'suggestion', label: 'Suggestion', icon: 'fas fa-lightbulb' },
        { value: 'bug', label: 'Bug Report', icon: 'fas fa-bug' },
        { value: 'compliment', label: 'Compliment', icon: 'fas fa-heart' },
        { value: 'complaint', label: 'Complaint', icon: 'fas fa-exclamation-circle' },
    ];

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
            <Header />
            <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
                <div className="text-center mb-12 fade-in">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Send Feedback
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Your feedback helps us improve BookifyX. We'd love to hear from you!
                    </p>
                </div>

                {submitted ? (
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center fade-in border border-gray-200 dark:border-gray-700 shadow-sm">
                        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <i className="fas fa-check text-white text-3xl"></i>
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                            Thank You!
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Your feedback has been submitted successfully. We appreciate you taking the time to help us improve.
                        </p>
                        <button
                            onClick={() => {
                                setSubmitted(false);
                                setFormData({ feedbackType: 'suggestion', rating: 0, message: '', email: '' });
                            }}
                            className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
                        >
                            Submit Another Feedback
                        </button>
                    </div>
                ) : (
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 fade-in border border-gray-200 dark:border-gray-700 shadow-sm">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Feedback Type */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                    What type of feedback do you have?
                                </label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {feedbackTypes.map((type) => (
                                        <button
                                            key={type.value}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, feedbackType: type.value })}
                                            className={`p-4 rounded-xl transition-all flex flex-col items-center gap-2 ${formData.feedbackType === type.value
                                                ? 'bg-primary text-white'
                                                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                                }`}
                                        >
                                            <i className={`${type.icon} text-xl`}></i>
                                            <span className="text-sm font-medium">
                                                {type.label}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Rating */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                    How would you rate your experience?
                                </label>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => handleRating(star)}
                                            className="p-2 transition-transform hover:scale-110"
                                        >
                                            <i
                                                className={`fas fa-star text-2xl ${star <= formData.rating ? 'text-amber-400' : 'text-gray-300 dark:text-gray-600'
                                                    }`}
                                            ></i>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Your Feedback
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="search-input w-full px-4 py-3 rounded-lg border border-gray-300 transition-all resize-none"
                                    placeholder="Share your thoughts, suggestions, or concerns..."
                                ></textarea>
                            </div>

                            {/* Email (Optional) */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Email (Optional)
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="search-input w-full px-4 py-3 rounded-lg border border-gray-300 transition-all"
                                    placeholder="your@email.com (if you'd like a response)"
                                />
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    Provide your email if you'd like us to follow up with you.
                                </p>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                            >
                                Submit Feedback
                            </button>
                        </form>
                    </div>
                )}

                <div className="mt-8 text-center fade-in">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Need immediate assistance?{' '}
                        <a href="/contact" className="text-primary hover:underline">
                            Contact our support team
                        </a>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SendFeedback;

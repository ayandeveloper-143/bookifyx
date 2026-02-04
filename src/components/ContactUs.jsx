import React, { useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactInfo = [
        {
            icon: 'fas fa-envelope',
            title: 'Email',
            value: 'support@bookifyx.com',
            link: 'mailto:support@bookifyx.com',
        },
        {
            icon: 'fas fa-phone',
            title: 'Phone',
            value: '+91 85095 17215',
            link: 'tel:+918509517215',
        },
        {
            icon: 'fas fa-map-marker-alt',
            title: 'Address',
            value: 'Kolkata, West Bengal, India',
            link: null,
        },
    ];

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
            <Header />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
                <div className="text-center mb-12 fade-in">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Contact Us
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Have a question or need assistance? We're here to help. Reach out to us anytime.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="fade-in">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                                Send us a message
                            </h2>

                            {submitted ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                        <i className="fas fa-check text-white text-2xl"></i>
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                                        Message Sent!
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        We'll get back to you as soon as possible.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-4 text-primary hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="search-input w-full px-4 py-3 rounded-lg border border-gray-300 transition-all"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="search-input w-full px-4 py-3 rounded-lg border border-gray-300 transition-all"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="search-input w-full px-4 py-3 rounded-lg border border-gray-300 transition-all"
                                            placeholder="How can we help?"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="5"
                                            className="search-input w-full px-4 py-3 rounded-lg border border-gray-300 transition-all resize-none"
                                            placeholder="Tell us more..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="fade-in delay-100">
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm flex items-start gap-4"
                                >
                                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                        <i className={`${info.icon} text-white text-lg`}></i>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                                            {info.title}
                                        </h3>
                                        {info.link ? (
                                            <a
                                                href={info.link}
                                                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 bg-gray-50 dark:bg-[#1a1a1a] rounded-2xl p-6">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                Business Hours
                            </h3>
                            <div className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                                <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                                Follow Us
                            </h3>
                            <div className="flex gap-3">
                                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                                    <a
                                        key={social}
                                        href={`https://${social}.com/bookifyx`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all border border-gray-200 dark:border-gray-700"
                                    >
                                        <i className={`fab fa-${social}`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ContactUs;

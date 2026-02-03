import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Careers = () => {
    const openPositions = [
        {
            title: 'Senior Frontend Developer',
            department: 'Engineering',
            location: 'Remote / Kolkata',
            type: 'Full-time',
            description: 'Build and optimize our React-based e-book platform with focus on performance and user experience.',
        },
        {
            title: 'Backend Developer',
            department: 'Engineering',
            location: 'Remote / Kolkata',
            type: 'Full-time',
            description: 'Design and implement scalable APIs and services to power our growing e-book marketplace.',
        },
        {
            title: 'UI/UX Designer',
            department: 'Design',
            location: 'Remote',
            type: 'Full-time',
            description: 'Create beautiful, intuitive interfaces that make reading and discovering e-books a joy.',
        },
        {
            title: 'Content Manager',
            department: 'Content',
            location: 'Kolkata',
            type: 'Full-time',
            description: 'Curate and manage our growing library of programming and tech e-books.',
        },
        {
            title: 'Marketing Specialist',
            department: 'Marketing',
            location: 'Remote / Kolkata',
            type: 'Full-time',
            description: 'Drive growth through creative campaigns and community building initiatives.',
        },
        {
            title: 'Customer Support Executive',
            department: 'Support',
            location: 'Kolkata',
            type: 'Full-time',
            description: 'Help our readers with their queries and ensure a smooth experience on BookifyX.',
        },
    ];

    const benefits = [
        {
            icon: 'fas fa-home',
            title: 'Remote Friendly',
            description: 'Work from anywhere. We believe in flexibility and trust.',
        },
        {
            icon: 'fas fa-heartbeat',
            title: 'Health Insurance',
            description: 'Comprehensive health coverage for you and your family.',
        },
        {
            icon: 'fas fa-book',
            title: 'Learning Budget',
            description: '₹50,000 annual budget for courses, books, and conferences.',
        },
        {
            icon: 'fas fa-plane',
            title: 'Paid Time Off',
            description: '24 days PTO + public holidays. Recharge when you need to.',
        },
        {
            icon: 'fas fa-laptop',
            title: 'Equipment',
            description: 'Latest MacBook/laptop and home office setup allowance.',
        },
        {
            icon: 'fas fa-users',
            title: 'Great Team',
            description: 'Work with passionate people who love what they do.',
        },
    ];

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Join the <span className="text-primary">BookifyX</span> Team
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            Help us build the future of digital reading. We're looking for passionate
                            people who want to make quality tech education accessible to everyone.
                        </p>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-12 md:py-16 bg-gray-50 dark:bg-[#1a1a1a]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12 fade-in">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                Why Work With Us?
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                We offer more than just a job. Here's what makes BookifyX a great place to work.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 hover:shadow-sm transition-all duration-300 fade-in border border-gray-200 dark:border-gray-700"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                                        <i className={`${benefit.icon} text-white text-xl`}></i>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        {benefit.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Open Positions */}
                <section className="py-12 md:py-16 bg-white dark:bg-gray-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12 fade-in">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                Open Positions
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Find your perfect role and start your journey with us.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {openPositions.map((job, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 fade-in"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                                {job.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                                                {job.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                                                    {job.department}
                                                </span>
                                                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                                                    {job.location}
                                                </span>
                                                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                                                    {job.type}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <a
                                                href={`mailto:careers@bookifyx.com?subject=Application for ${job.title}`}
                                                className="inline-block bg-primary text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity text-sm"
                                            >
                                                Apply Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-12 md:py-16 bg-gray-50 dark:bg-[#1a1a1a]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center fade-in">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Don't See a Perfect Fit?
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                            We're always looking for talented people. Send us your resume and we'll
                            reach out when there's a role that matches your skills.
                        </p>
                        <a
                            href="mailto:careers@bookifyx.com?subject=General Application"
                            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
                        >
                            Send Your Resume
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Careers;

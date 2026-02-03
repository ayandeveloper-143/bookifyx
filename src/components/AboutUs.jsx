import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const AboutUs = () => {
    const stats = [
        { value: '50K+', label: 'E-Books' },
        { value: '100K+', label: 'Happy Readers' },
        { value: '500+', label: 'Authors' },
        { value: '50+', label: 'Categories' },
    ];

    const team = [
        {
            name: 'Anshuman Mondal',
            role: 'Founder & CEO',
            image: 'https://ui-avatars.com/api/?name=Anshuman+Mondal&background=fb8226&color=fff&size=200',
        },
        {
            name: 'Ayan Khan',
            role: 'Head of Content',
            image: 'https://ui-avatars.com/api/?name=Ayan+Khan&background=fb8226&color=fff&size=200',
        },
        {
            name: 'Raj Khan',
            role: 'Tech Lead',
            image: 'https://ui-avatars.com/api/?name=Rahul+Kumar&background=fb8226&color=fff&size=200',
        },
        {
            name: 'Rony Mondal',
            role: 'Marketing Head',
            image: 'https://ui-avatars.com/api/?name=Rony+Mondal&background=fb8226&color=fff&size=200',
        },
    ];

    const values = [
        {
            icon: 'fas fa-book-reader',
            title: 'Passion for Reading',
            description: 'We believe in the transformative power of books and strive to make reading accessible to everyone.',
        },
        {
            icon: 'fas fa-users',
            title: 'Community First',
            description: 'Building a community of learners and readers who inspire each other to grow.',
        },
        {
            icon: 'fas fa-lightbulb',
            title: 'Innovation',
            description: 'Constantly improving our platform to provide the best reading experience.',
        },
        {
            icon: 'fas fa-hand-holding-heart',
            title: 'Trust & Quality',
            description: 'Curating only the best content from verified authors and publishers.',
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
                            About <span className="text-primary">BookifyX</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            Empowering developers and learners with the best programming e-books.
                            Your one-stop destination for coding knowledge and skill development.
                        </p>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-12 md:py-16 bg-gray-50 dark:bg-[#1a1a1a]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl fade-in border border-gray-200 dark:border-gray-700 shadow-sm"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Story */}
                <section className="py-12 md:py-16 bg-white dark:bg-gray-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="fade-in">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                    Our Story
                                </h2>
                                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                                    <p>
                                        BookifyX was born out of a simple observation: finding quality programming
                                        e-books shouldn't be hard. As developers ourselves, we understood the
                                        struggle of searching through countless resources to find the right material.
                                    </p>
                                    <p>
                                        Founded in 2026, we started with a mission to create a curated platform
                                        that brings together the best programming and tech e-books in one place.
                                        From JavaScript to Python, from web development to machine learning,
                                        we've got you covered.
                                    </p>
                                    <p>
                                        Today, BookifyX serves thousands of developers, students, and tech
                                        enthusiasts who trust us for their learning journey. We're proud to be
                                        part of your growth story.
                                    </p>
                                </div>
                            </div>
                            <div className="fade-in delay-200">
                                <div className="relative">
                                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
                                        <i className="fas fa-quote-left text-4xl text-primary opacity-50 mb-4"></i>
                                        <p className="text-lg md:text-xl italic text-gray-700 dark:text-gray-300 mb-6">
                                            "Our goal is to make quality tech education accessible to everyone,
                                            anywhere in the world."
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                                                <i className="fas fa-user"></i>
                                            </div>
                                            <div>
                                                <div className="font-semibold text-gray-900 dark:text-white">Anshuman Mondal</div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400">Founder, BookifyX</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Values */}
                <section className="py-12 md:py-16 bg-gray-50 dark:bg-[#1a1a1a]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12 fade-in">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                Our Values
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                The principles that guide everything we do at BookifyX.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-sm transition-all duration-300 fade-in border border-gray-200 dark:border-gray-700"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                        <i className={`${value.icon} text-white text-2xl`}></i>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-12 md:py-16 bg-white dark:bg-gray-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12 fade-in">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                Meet Our Team
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                The passionate people behind BookifyX working to make your reading experience amazing.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {team.map((member, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-sm transition-all duration-300 fade-in border border-gray-200 dark:border-gray-700"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto mb-4 object-cover"
                                    />
                                    <h3 className="font-semibold text-gray-900 dark:text-white">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {member.role}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-12 md:py-16 bg-gray-50 dark:bg-[#1a1a1a]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center fade-in">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Ready to Start Your Learning Journey?
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                            Join thousands of developers who trust BookifyX for their programming education.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/"
                                className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
                            >
                                Explore E-Books
                            </a>
                            <a
                                href="/contact"
                                className="border border-gray-300 dark:border-gray-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AboutUs;

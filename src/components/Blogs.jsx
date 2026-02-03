import React, { useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Blogs = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'JavaScript', 'Python', 'React', 'DSA', 'Career', 'Tips'];

    const generateSlug = (text) => {
        return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    };

    const blogs = [
        {
            id: 1,
            title: '10 JavaScript Concepts Every Developer Must Know in 2026',
            excerpt: 'Master these essential JavaScript concepts to level up your coding skills and ace your next interview.',
            category: 'JavaScript',
            author: 'Rahul Sharma',
            date: 'Feb 2, 2026',
            readTime: '8 min read',
            image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80',
        },
        {
            id: 2,
            title: 'Python for Data Science: A Complete Roadmap',
            excerpt: 'Your step-by-step guide to becoming a data scientist using Python libraries and frameworks.',
            category: 'Python',
            author: 'Priya Patel',
            date: 'Jan 28, 2026',
            readTime: '12 min read',
            image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80',
        },
        {
            id: 3,
            title: 'React 19: What\'s New and How to Migrate',
            excerpt: 'Explore the latest features in React 19 and learn how to upgrade your existing projects smoothly.',
            category: 'React',
            author: 'Amit Kumar',
            date: 'Jan 25, 2026',
            readTime: '10 min read',
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
        },
        {
            id: 4,
            title: 'Cracking DSA: Top 50 Patterns You Need to Know',
            excerpt: 'Master the most common data structure and algorithm patterns asked in FAANG interviews.',
            category: 'DSA',
            author: 'Sneha Gupta',
            date: 'Jan 20, 2026',
            readTime: '15 min read',
            image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80',
        },
        {
            id: 5,
            title: 'From Zero to Full-Stack: A 6-Month Learning Plan',
            excerpt: 'A realistic roadmap to become a full-stack developer, even if you\'re starting from scratch.',
            category: 'Career',
            author: 'Vikram Singh',
            date: 'Jan 15, 2026',
            readTime: '10 min read',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
        },
        {
            id: 6,
            title: '5 VS Code Extensions That Will Boost Your Productivity',
            excerpt: 'Supercharge your development workflow with these must-have VS Code extensions.',
            category: 'Tips',
            author: 'Neha Reddy',
            date: 'Jan 10, 2026',
            readTime: '5 min read',
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
        },
        {
            id: 7,
            title: 'Understanding Async/Await in JavaScript',
            excerpt: 'Deep dive into asynchronous JavaScript and learn how to write cleaner async code.',
            category: 'JavaScript',
            author: 'Arjun Mehta',
            date: 'Jan 5, 2026',
            readTime: '7 min read',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
        },
        {
            id: 8,
            title: 'Building REST APIs with Python Flask',
            excerpt: 'Learn how to create robust and scalable REST APIs using Python Flask framework.',
            category: 'Python',
            author: 'Kavya Nair',
            date: 'Jan 1, 2026',
            readTime: '9 min read',
            image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80',
        },
    ];

    const filteredBlogs = selectedCategory === 'All'
        ? blogs
        : blogs.filter(blog => blog.category === selectedCategory);

    const featuredBlog = blogs[0];

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative py-16 md:py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            BookifyX <span className="text-primary">Blog</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            Insights, tutorials, and tips to help you become a better developer.
                            Stay updated with the latest in tech.
                        </p>
                    </div>
                </section>

                {/* Featured Blog */}
                <section className="py-8 bg-gray-50 dark:bg-[#1a1a1a]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="fade-in">
                            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Featured Post</span>
                            <a href={`/blogs/${generateSlug(featuredBlog.author)}/${generateSlug(featuredBlog.title)}`} className="block mt-4 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                                <div className="flex flex-col lg:flex-row">
                                    <div className="lg:w-1/2">
                                        <img
                                            src={featuredBlog.image}
                                            alt={featuredBlog.title}
                                            className="w-full h-64 lg:h-full object-cover"
                                        />
                                    </div>
                                    <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
                                        <span className="text-primary text-sm font-medium">{featuredBlog.category}</span>
                                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                                            {featuredBlog.title}
                                        </h2>
                                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                                            {featuredBlog.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                                                    {featuredBlog.author.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900 dark:text-white">{featuredBlog.author}</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-500">{featuredBlog.date} · {featuredBlog.readTime}</p>
                                                </div>
                                            </div>
                                            <span className="text-primary font-medium hover:underline">
                                                Read More →
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Category Filter */}
                <section className="py-8 bg-white dark:bg-gray-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="flex flex-wrap gap-2 justify-center fade-in">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === category
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Blog Grid */}
                <section className="py-12 bg-white dark:bg-gray-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredBlogs.map((blog) => (
                                <a
                                    key={blog.id}
                                    href={`/blogs/${generateSlug(blog.author)}/${generateSlug(blog.title)}`}
                                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 group"
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <span className="absolute top-3 left-3 px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                                            {blog.category}
                                        </span>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                            {blog.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                            {blog.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 text-sm font-medium">
                                                    {blog.author.charAt(0)}
                                                </div>
                                                <span className="text-xs text-gray-500 dark:text-gray-500">{blog.author}</span>
                                            </div>
                                            <span className="text-xs text-gray-500 dark:text-gray-500">{blog.readTime}</span>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Newsletter CTA */}
                <section className="py-12 md:py-16 bg-gray-50 dark:bg-[#1a1a1a]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center fade-in">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Never Miss a Post
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                            Subscribe to our newsletter and get the latest articles, tutorials,
                            and resources delivered straight to your inbox.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-full search-input text-gray-900 dark:text-white"
                            />
                            <button
                                type="submit"
                                className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Blogs;

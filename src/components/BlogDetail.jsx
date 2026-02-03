import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const BlogDetail = () => {
    const { author, slug } = useParams();

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
            content: `
        <p>JavaScript continues to evolve, and staying updated with the latest concepts is crucial for any developer. In this comprehensive guide, we'll explore 10 essential JavaScript concepts that every developer must master in 2026.</p>
        
        <h2>1. Closures</h2>
        <p>Closures are fundamental to understanding JavaScript. A closure is created when a function is defined inside another function, allowing the inner function to access the outer function's variables even after the outer function has returned.</p>
        
        <h2>2. Promises and Async/Await</h2>
        <p>Asynchronous programming is at the heart of JavaScript. Understanding Promises and the async/await syntax is essential for handling API calls, file operations, and other asynchronous tasks.</p>
        
        <h2>3. Event Loop</h2>
        <p>The event loop is what makes JavaScript's non-blocking I/O possible. Understanding how it works will help you write more efficient code and debug tricky timing issues.</p>
        
        <h2>4. Prototypes and Inheritance</h2>
        <p>JavaScript uses prototypal inheritance, which is different from classical inheritance in languages like Java. Mastering prototypes will help you understand how objects work in JavaScript.</p>
        
        <h2>5. ES6+ Features</h2>
        <p>Modern JavaScript includes many powerful features like destructuring, spread operators, template literals, and more. These features make your code cleaner and more readable.</p>
        
        <h2>6. Modules</h2>
        <p>Understanding ES modules and how to organize your code into reusable modules is crucial for building maintainable applications.</p>
        
        <h2>7. Error Handling</h2>
        <p>Proper error handling with try/catch and error boundaries ensures your applications are robust and user-friendly.</p>
        
        <h2>8. TypeScript Basics</h2>
        <p>While not strictly JavaScript, TypeScript has become essential for modern development. Understanding type annotations and interfaces will make you a better JavaScript developer.</p>
        
        <h2>9. Testing</h2>
        <p>Writing tests with frameworks like Jest ensures your code works as expected and makes refactoring safer.</p>
        
        <h2>10. Performance Optimization</h2>
        <p>Understanding concepts like debouncing, throttling, and lazy loading will help you build faster applications.</p>
        
        <h2>Conclusion</h2>
        <p>Mastering these concepts will set you apart as a JavaScript developer. Keep practicing and building projects to solidify your understanding!</p>
      `,
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
            content: `
        <p>Python has become the go-to language for data science. In this roadmap, we'll cover everything you need to know to start your journey as a data scientist.</p>
        
        <h2>Getting Started with Python</h2>
        <p>Before diving into data science, you need a solid foundation in Python basics including variables, data types, loops, functions, and object-oriented programming.</p>
        
        <h2>Essential Libraries</h2>
        <p>NumPy, Pandas, and Matplotlib form the core of data science in Python. These libraries help you manipulate data, perform calculations, and create visualizations.</p>
        
        <h2>Machine Learning with Scikit-learn</h2>
        <p>Scikit-learn provides simple and efficient tools for data mining and data analysis. Learn to build classification, regression, and clustering models.</p>
        
        <h2>Deep Learning with TensorFlow/PyTorch</h2>
        <p>Take your skills to the next level with deep learning frameworks. Build neural networks for complex tasks like image recognition and natural language processing.</p>
        
        <h2>Conclusion</h2>
        <p>The journey to becoming a data scientist takes time and practice. Follow this roadmap and build projects to solidify your skills!</p>
      `,
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
            content: `
        <p>React 19 brings exciting new features and improvements. Let's explore what's new and how to migrate your existing projects.</p>
        
        <h2>New Features</h2>
        <p>React 19 introduces improved server components, better concurrent rendering, and enhanced developer tools.</p>
        
        <h2>Migration Guide</h2>
        <p>Follow our step-by-step guide to upgrade your React 18 projects to React 19 without breaking changes.</p>
        
        <h2>Best Practices</h2>
        <p>Learn the best practices for using React 19's new features effectively in your applications.</p>
      `,
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
            content: `
        <p>Cracking DSA interviews requires understanding patterns, not just memorizing solutions. Here are the top 50 patterns you need to master.</p>
        
        <h2>Array Patterns</h2>
        <p>Two pointers, sliding window, and prefix sums are essential patterns for array problems.</p>
        
        <h2>Tree Patterns</h2>
        <p>DFS, BFS, and recursive traversals are must-know patterns for tree problems.</p>
        
        <h2>Graph Patterns</h2>
        <p>Learn Dijkstra's, topological sort, and union-find for graph problems.</p>
      `,
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
            content: `
        <p>Becoming a full-stack developer is achievable with the right plan. Here's a realistic 6-month roadmap.</p>
        
        <h2>Month 1-2: Frontend Basics</h2>
        <p>Master HTML, CSS, and JavaScript. Build responsive websites and understand DOM manipulation.</p>
        
        <h2>Month 3-4: React and Backend</h2>
        <p>Learn React for frontend and Node.js/Express for backend development.</p>
        
        <h2>Month 5-6: Databases and Deployment</h2>
        <p>Work with MongoDB/PostgreSQL and learn to deploy applications on cloud platforms.</p>
      `,
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
            content: `
        <p>VS Code extensions can significantly boost your productivity. Here are the top 5 you should install today.</p>
        
        <h2>1. GitHub Copilot</h2>
        <p>AI-powered code completion that understands your code context.</p>
        
        <h2>2. Prettier</h2>
        <p>Automatic code formatting to keep your code consistent.</p>
        
        <h2>3. ESLint</h2>
        <p>Catch errors and enforce coding standards in real-time.</p>
        
        <h2>4. GitLens</h2>
        <p>Supercharge your Git workflow with inline blame and history.</p>
        
        <h2>5. Thunder Client</h2>
        <p>Lightweight REST API client built into VS Code.</p>
      `,
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
            content: `
        <p>Async/await makes asynchronous JavaScript code look synchronous. Let's understand how it works.</p>
        
        <h2>The Problem with Callbacks</h2>
        <p>Callback hell made code hard to read and maintain. Promises improved this, but async/await made it even better.</p>
        
        <h2>How Async/Await Works</h2>
        <p>The async keyword makes a function return a Promise. The await keyword waits for a Promise to resolve.</p>
        
        <h2>Error Handling</h2>
        <p>Use try/catch blocks to handle errors in async/await code.</p>
      `,
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
            content: `
        <p>Flask is a lightweight Python framework perfect for building REST APIs. Let's learn how to create one from scratch.</p>
        
        <h2>Setting Up Flask</h2>
        <p>Install Flask and create your first API endpoint in minutes.</p>
        
        <h2>CRUD Operations</h2>
        <p>Implement Create, Read, Update, and Delete operations for your API.</p>
        
        <h2>Authentication</h2>
        <p>Secure your API with JWT authentication.</p>
      `,
        },
    ];

    const generateSlug = (text) => {
        return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    };

    const blog = blogs.find(b => {
        const authorSlug = generateSlug(b.author);
        const titleSlug = generateSlug(b.title);
        return authorSlug === author && titleSlug === slug;
    });

    if (!blog) {
        return (
            <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
                <Header />
                <main className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog Not Found</h1>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
                        <a href="/blogs" className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
                            Back to Blogs
                        </a>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    const relatedBlogs = blogs.filter(b => b.category === blog.category && b.id !== blog.id).slice(0, 3);

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
            <Header />
            <main>
                {/* Blog Header */}
                <section className="relative pt-8 pb-6 bg-gray-50 dark:bg-[#1a1a1a]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 fade-in">
                        <a href="/blogs" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary transition-colors mb-8">
                            <i className="fas fa-arrow-left mr-2"></i>
                            Back to Blogs
                        </a>
                        <div className="mb-4">
                            <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                                {blog.category}
                            </span>
                        </div>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            {blog.title}
                        </h1>
                        <div className="flex items-center gap-4 pb-6 border-b border-gray-200 dark:border-gray-700">
                            <div className="w-11 h-11 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                                {blog.author.charAt(0)}
                            </div>
                            <div>
                                <p className="font-medium text-gray-900 dark:text-white text-sm">{blog.author}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-500">{blog.date} · {blog.readTime}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Image */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-56 md:h-80 object-cover rounded-xl fade-in"
                    />
                </section>

                {/* Blog Content */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
                    <article
                        className="prose prose-lg dark:prose-invert max-w-none fade-in
              prose-headings:text-gray-900 dark:prose-headings:text-white
              prose-p:text-gray-600 dark:prose-p:text-gray-400
              prose-a:text-primary
              prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                </section>

                {/* Share Section */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between fade-in">
                        <span className="text-gray-600 dark:text-gray-400 font-medium">Share this article</span>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-all">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-all">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-all">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <button className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-all">
                                <i className="fas fa-link"></i>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Related Posts */}
                {relatedBlogs.length > 0 && (
                    <section className="py-12 bg-gray-50 dark:bg-[#1a1a1a]">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 fade-in">Related Articles</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {relatedBlogs.map((relatedBlog, index) => (
                                    <a
                                        key={relatedBlog.id}
                                        href={`/blogs/${generateSlug(relatedBlog.author)}/${generateSlug(relatedBlog.title)}`}
                                        className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-sm transition-all duration-300 fade-in group"
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={relatedBlog.image}
                                                alt={relatedBlog.title}
                                                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-base font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-primary transition-colors">
                                                {relatedBlog.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">{relatedBlog.readTime}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default BlogDetail;

import React, { useRef, useEffect } from "react";
import GoogleLogin from './GoogleLogin.jsx';
import EyeWithAnimatedSlash from './EyeWithAnimatedSlash.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ThemeImage from './ThemeImage.jsx';

const Signup = () => {
    const [form, setForm] = React.useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);
    const [error, setError] = React.useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        setError("");
        setSubmitted(true);
    };

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Header />
            <main className="min-h-[calc(100vh-14rem)] flex items-center justify-center px-2 sm:px-4 md:px-6 mt-4 mb-4">
                <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 animate-fadein">
                    {/* LEFT SIDE */}
                    <div className="p-5 sm:p-8 md:p-10 flex flex-col justify-center">
                        <div className="mb-6">
                            <a href="/" className="flex items-left justify-left -mt-1 flex-shrink-0">
                                <ThemeImage
                                    lightSrc="/src/assets/2.png"
                                    darkSrc="/src/assets/2_dark.png"
                                    className="h-8 w-auto rounded-md"
                                    alt="Logo"
                                />
                            </a>
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-bold mb-1">Create your BookifyX account</h1>
                        <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">
                            Sign up to start reading e-books.
                        </p>
                        {submitted ? (
                            <div className="text-center text-green-600 font-medium py-8">Account created! You can now <a href="/auth/login" className="text-primary underline">login</a>.</div>
                        ) : (
                            <>
                                <form onSubmit={handleSubmit} className="space-y-0">
                                    <div>
                                        <label className="text-xs sm:text-sm font-medium">Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                            className="w-full mt-1 mb-3 px-3 py-3 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all duration-200 text-sm sm:text-base"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs sm:text-sm font-medium">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="Enter your mail address"
                                            className="w-full mt-1 mb-3 px-3 py-3 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all duration-200 text-sm sm:text-base"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs sm:text-sm font-medium">Password *</label>
                                        <div className="relative">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                required
                                                value={form.password}
                                                onChange={handleChange}
                                                placeholder="Create a password"
                                                className="w-full mt-1 mb-3 px-3 py-3 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all duration-200 text-sm sm:text-base pr-10"
                                            />
                                            <button
                                                type="button"
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 focus:outline-none"
                                                tabIndex={-1}
                                                aria-label={showPassword ? "Hide password" : "Show password"}
                                                onClick={() => setShowPassword((v) => !v)}
                                            >
                                                <span className="inline-block w-6 h-6">
                                                    <EyeWithAnimatedSlash showSlash={!showPassword} />
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-xs sm:text-sm font-medium">Confirm Password *</label>
                                        <div className="relative">
                                            <input
                                                type={showConfirmPassword ? "text" : "password"}
                                                name="confirmPassword"
                                                required
                                                value={form.confirmPassword}
                                                onChange={handleChange}
                                                placeholder="Confirm your password"
                                                className="w-full mt-1 mb-3 px-3 py-3 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all duration-200 text-sm sm:text-base pr-10"
                                            />
                                            <button
                                                type="button"
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 focus:outline-none"
                                                tabIndex={-1}
                                                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                                                onClick={() => setShowConfirmPassword((v) => !v)}
                                            >
                                                <span className="inline-block w-6 h-6">
                                                    <EyeWithAnimatedSlash showSlash={!showConfirmPassword} />
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 mb-5 mt-2">
                                        <input
                                            type="checkbox"
                                            id="terms"
                                            required
                                            className="w-4 h-4 mb-4"
                                        />
                                        <label htmlFor="terms" className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 select-none mb-4">
                                            I agree to the <a href="/terms-conditions" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a>
                                        </label>
                                    </div>
                                    {error && <div className="text-red-500 text-xs text-center">{error}</div>}
                                    <button type="submit" className="w-full bg-primary hover:opacity-90 text-white py-2.5 sm:py-3 rounded-lg text-base sm:text-lg transition-opacity">Sign Up</button>
                                </form>
                                <div className="flex items-center gap-2 sm:gap-3 my-5 sm:my-6">
                                    <div className="flex-1 h-px bg-gray-300"></div>
                                    <span className="text-sm text-gray-500">Or, Sign up with</span>
                                    <div className="flex-1 h-px bg-gray-300"></div>
                                </div>
                                <button className="w-full border py-2.5 sm:py-3 rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base">
                                    <img
                                        src="https://www.svgrepo.com/show/355037/google.svg"
                                        className="w-5"
                                    />
                                    Sign up with Google
                                </button>
                            </>
                        )}
                        <p className="text-xs sm:text-sm text-center mt-5 sm:mt-6">
                            Already have an account?{' '}
                            <a href="/auth/login" className="text-primary hover:underline">Login</a>
                        </p>
                    </div>
                    {/* RIGHT SIDE IMAGE (PLACEHOLDER) */}
                    <div className="hidden md:block bg-primary">
                        <img
                            src="https://placehold.co/700x900.png?text=Your+Artwork+Here"
                            alt="design placeholder"
                            className="w-full h-full object-cover object-center"
                            style={{ minHeight: 320 }}
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Signup;

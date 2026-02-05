import React, { useRef, useEffect } from "react";
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ThemeImage from './ThemeImage.jsx';
import GoogleLogin from './GoogleLogin.jsx';
import EyeWithAnimatedSlash from './EyeWithAnimatedSlash.jsx';


const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Header />
            <main className="min-h-[calc(100vh-14rem)] bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center px-2 sm:px-4 md:px-6 mt-4 mb-4">
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

                        <h1 className="text-2xl sm:text-3xl font-bold mb-1">Welcome to BookifyX</h1>
                        <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">
                            Sign in to read your e-books.
                        </p>

                        {/* Email */}
                        <label className="text-xs sm:text-sm font-medium">Email *</label>
                        <input
                            type="email"
                            placeholder="Enter your mail address"
                            className="w-full mt-1 mb-3 px-3 py-3 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all duration-200 text-sm sm:text-base"
                        />

                        {/* Password */}
                        <label className="text-xs sm:text-sm font-medium">Password *</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter password"
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

                        <div className="flex flex-row sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
                            <label className="flex items-center gap-2 text-sm">
                                <input type="checkbox" className="w-4 h-4" />
                                Remember me
                            </label>

                            <a href="/auth/forgot-password" className="text-sm text-primary hover:underline ml-auto">
                                Forgot your password?
                            </a>
                        </div>

                        <button className="w-full bg-primary hover:opacity-90 text-white py-2.5 sm:py-3 rounded-lg text-base sm:text-lg transition-opacity">
                            Log In
                        </button>

                        <div className="flex items-center gap-2 sm:gap-3 my-5 sm:my-6">
                            <div className="flex-1 h-px bg-gray-300"></div>
                            <span className="text-sm text-gray-500">Or, Login with</span>
                            <div className="flex-1 h-px bg-gray-300"></div>
                        </div>

                        <GoogleLogin onSuccess={(data) => {
                            console.log("Google login successful:", data);
                            // Handle successful login here
                        }} />


                        <p className="text-xs sm:text-sm text-center mt-5 sm:mt-6">
                            Don’t have an account?{" "}
                            <a href="/auth/signup" className="text-primary hover:underline">
                                Register here
                            </a>
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

export default Login;

import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogin from './GoogleLogin.jsx';
import EyeWithAnimatedSlash from './EyeWithAnimatedSlash.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ThemeImage from './ThemeImage.jsx';
import Api from "../lib/api";


async function signup(data) {
    // Always fetch a fresh CSRF token before POST
    return Api.post("/auth/register", data);
}

const Signup = () => {
    const navigate = useNavigate();
    const [form, setForm] = React.useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);
    const [error, setError] = React.useState({});
    const [generalError, setGeneralError] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    // toast state removed

    // Simple custom toast
    // CustomToast removed

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        // Clear error for this field on change
        setError((prev) => {
            if (!prev[name]) return prev;
            const newErr = { ...prev };
            delete newErr[name];
            return newErr;
        });
        // If generalError is showing and user types in email, clear generalError
        if (name === "email" && generalError) setGeneralError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            setError({ confirmPassword: "Passwords do not match" });
            return;
        }
        setLoading(true);
        try {
            const res = await signup({
                name: form.name,
                email: form.email,
                password: form.password,
                confirmPassword: form.confirmPassword
            });
            if (res.data && (res.data.success || res.data.status)) {
                // Redirect to email verification notice page
                navigate("/verify-email");
            } else {
                if (res.data && res.data.field) {
                    setError({ [res.data.field]: res.data.message });
                } else if (res.data && res.data.errors) {
                    setError(res.data.errors);
                } else if (res.data && res.data.message) {
                    setGeneralError(res.data.message);
                } else {
                    setGeneralError("Registration failed. Please try again.");
                }
            }
        } catch (err) {
            if (err.response && err.response.data) {
                if (err.response.data.field) {
                    setError({ [err.response.data.field]: err.response.data.message });
                } else if (err.response.data.errors) {
                    setError(err.response.data.errors);
                } else if (err.response.data.message) {
                    setGeneralError(err.response.data.message);
                } else {
                    setGeneralError("Registration failed. Please try again.");
                }
            } else {
                setGeneralError("Network error. Please try again.");
            }
        } finally {
            setLoading(false);
        }
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

                        <form onSubmit={handleSubmit} className="space-y-0">
                            {/* ...existing code... */}
                            <div>
                                <label className="text-xs sm:text-sm font-medium">Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className="w-full mt-1 mb-2 px-3 py-3 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all duration-200 text-sm sm:text-base"
                                />
                                {error.name && <label className="text-red-600 text-xs block">{error.name}</label>}
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
                                    className="w-full mt-1 mb-2 px-3 py-3 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all duration-200 text-sm sm:text-base"
                                />
                                {error.email && <label className="text-red-600 text-xs  block">{error.email}</label>}
                                {!error.email && generalError && <label className="text-red-600 text-xs  block">{generalError}</label>}
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
                                        className="w-full mt-1 mb-2 px-3 py-3 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all duration-200 text-sm sm:text-base pr-10"
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
                                {error.password && <label className="text-red-600 text-xs block">{error.password}</label>}
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
                                        className="w-full mt-1 mb-2 px-3 py-3 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all duration-200 text-sm sm:text-base pr-10"
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
                                {error.confirmPassword && <label className="text-red-600 text-xs mb-2 block">{error.confirmPassword}</label>}
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
                            {/* No general error below submit button, only toast */}
                            <button type="submit" className="w-full bg-primary hover:opacity-90 text-white py-2.5 sm:py-3 rounded-lg text-base sm:text-lg transition-opacity flex items-center justify-center" disabled={loading}>
                                {loading ? (
                                    <span className="flex items-center gap-2 justify-center">
                                        <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                                        </svg>

                                    </span>
                                ) : (
                                    'Sign Up'
                                )}
                            </button>
                        </form>
                        <div className="flex items-center gap-2 sm:gap-3 my-5 sm:my-6">
                            <div className="flex-1 h-px bg-gray-300"></div>
                            <span className="text-sm text-gray-500">Or, Sign up with</span>
                            <div className="flex-1 h-px bg-gray-300"></div>
                        </div>
                        <GoogleLogin onSuccess={(data) => {
                            console.log("Google login successful:", data);
                            // Handle successful login here
                            setLoading(true);

                        }} />

                        <p className="text-xs sm:text-sm text-center mt-5 sm:mt-6">
                            Already have an account?{' '}
                            <a href="/auth/login" className="text-primary hover:underline">Login</a>
                        </p>
                    </div>
                    {/* RIGHT SIDE IMAGE (PLACEHOLDER) */}
                    <div className="hidden md:block bg-primary">
                        <img
                            src="/src/assets/ChatGPT Image Feb 9, 2026, 03_50_42 PM.png"
                            alt="design placeholder"
                            className="w-full h-full object-cover object-center opacity-90"
                            style={{ minHeight: 300 }}
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Signup;

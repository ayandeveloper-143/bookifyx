import React from "react";
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ThemeImage from './ThemeImage.jsx';

const ForgotPassword = () => {
    const [email, setEmail] = React.useState("");
    const [submitted, setSubmitted] = React.useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };
    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Header />
            <main className="min-h-[calc(100vh-14rem)] flex items-center justify-center px-2 sm:px-4 md:px-6 mt-4 mb-4">
                <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl overflow-hidden grid grid-cols-1 animate-fadein">
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
                        <h1 className="text-2xl sm:text-3xl font-bold mb-1">Forgot Password?</h1>
                        <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">
                            Enter your email to receive a password reset link.
                        </p>
                        {submitted ? (
                            <div className="text-center text-green-600 font-medium py-8">If your email is registered, a reset link has been sent.</div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-0">
                                <div>
                                    <label className="text-xs sm:text-sm font-medium">Email *</label>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="Enter your mail address"
                                        className="w-full mt-1 mb-3 px-3 py-3 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all duration-200 text-sm sm:text-base"
                                    />
                                </div>
                                <button type="submit" className="w-full bg-primary hover:opacity-90 text-white py-2.5 sm:py-3 rounded-lg text-base sm:text-lg transition-opacity mt-2">Send Reset Link</button>
                            </form>
                        )}
                        <p className="text-xs sm:text-sm text-center mt-5 sm:mt-6">
                            <a href="/login" className="text-primary hover:underline">Back to Login</a>
                        </p>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ForgotPassword;

import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import ThemeImage from "./ThemeImage.jsx";
import Api from "../lib/api";

async function checkEmailVerification() {
    try {
        const response = await Api.get("/auth/check-email-verification");
        return response.data;
    } catch (error) {
        console.error("Error checking email verification:", error);
        return { status: false, verified: false, redirectUrl: "/auth/" };
    }
}


const EmailVerificationNotice = () => {

    checkEmailVerification().then(result => {
        window.location.href = result.redirectUrl || "/auth/";
    });

    return (

        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen flex flex-col">
            <Header />
            <main className="min-h-[calc(100vh-18rem)] flex-1 flex items-center justify-center px-2 sm:px-4 md:px-6">
                <div className="w-full max-w-md bg-white rounded-xl overflow-hidden p-5 flex flex-col items-center animate-fadein">
                    <ThemeImage
                        lightSrc="/src/assets/2.png"
                        darkSrc="/src/assets/2_dark.png"
                        className="h-10 w-auto rounded-md mb-6"
                        alt="Logo"
                    />

                    <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-center">Verify your email address</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-center max-w-xs mb-4">A verification link has been sent to your email address. Please check your inbox and click the link to activate your account.</p>
                    <a href="/auth/login" className="text-primary hover:underline text-sm">Go to Login</a>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default EmailVerificationNotice;

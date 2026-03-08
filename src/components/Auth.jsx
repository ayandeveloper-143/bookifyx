import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Riple } from "react-loading-indicators";

const Auth = () => {
    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen flex flex-col">
            <Header />
            <main className="min-h-[calc(100vh-18rem)] flex-1 flex items-center justify-center px-2 sm:px-4 md:px-6">
                <div className="w-full max-w-md bg-white rounded-xl overflow-hidden p-5 flex flex-col items-center animate-fadein">
                    <Riple color="#fb8226" size="medium" text="" textColor="" />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Auth;

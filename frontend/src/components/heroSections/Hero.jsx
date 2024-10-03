import React from 'react';

const Hero = () => {
    return (
        <section className="bg-gray-900 text-white py-20">
            <div className="container mx-auto flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Welcome to My Awesome Website
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl">
                    Discover amazing content, learn new things, and stay updated with the latest trends.
                    Join us to explore more and be a part of our growing community.
                </p>
                <a
                    href="/signup"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
                >
                    Get Started
                </a>
            </div>
        </section>
    );
};

export default Hero;

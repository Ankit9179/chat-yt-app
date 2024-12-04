import React from 'react';
import smock from './smock 2.jpg'

const Hero = () => {
    return (
        <div className='flex flex-col gap-12'>

            <section className="bg-gray-900 text-white py-20">
                <div className="container mx-auto flex flex-col items-center text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Welcome to My Awesome Website
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl text">
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
            {/* about */}
            <section className=" py-20">
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
                    {/* Image Section */}
                    <div className="md:w-1/2">
                        <img
                            src={smock}
                            alt="About Us"
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            About Us
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 mb-6">
                            We are committed to delivering high-quality content and fostering a vibrant
                            community for learners and professionals. Our platform is designed to empower you
                            with knowledge and build meaningful connections.
                        </p>
                        <a
                            href="/about"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-md"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </section>
            {/** features */}
            <section className=" text-gray-800 py-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Our Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white shadow rounded">
                            <h3 className="text-2xl font-bold mb-2">Feature 1</h3>
                            <p>Explore a wide range of topics and discover new insights every day.</p>
                        </div>
                        <div className="p-6 bg-white shadow rounded">
                            <h3 className="text-2xl font-bold mb-2">Feature 2</h3>
                            <p>Engage with an active community of learners and experts.</p>
                        </div>
                        <div className="p-6 bg-white shadow rounded">
                            <h3 className="text-2xl font-bold mb-2">Feature 3</h3>
                            <p>Access exclusive resources and stay ahead with the latest updates.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/** more */}
            <section className=" text-white py-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">What Our Users Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-blue-400 rounded">
                            <p className="italic">"This website changed the way I learn and grow. Highly recommended!"</p>
                            <h3 className="mt-4 font-bold">- Adarsh Gupta</h3>
                        </div>
                        <div className="p-6 bg-blue-400 rounded">
                            <p className="italic">"The community here is amazing. I always find great discussions and resources."</p>
                            <h3 className="mt-4 font-bold">- Shruti Kumari</h3>
                        </div>
                        <div className="p-6 bg-blue-400 rounded">
                            <p className="italic">"Wowooo this is great platform and chat feature is so awwsome"</p>
                            <h3 className="mt-4 font-bold">- Sakshi Sharma</h3>
                        </div>
                    </div>
                </div>
            </section>
            {/** more 2 */}
            <section className="bg-gray-900 text-white py-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Contact Us</h2>
                    <p className="text-lg md:text-xl mb-8">
                        Have questions or need help? Feel free to reach out to us.
                    </p>
                    <a
                        href="whatsapp:contact=7828092738@s.whatsapp.com&message="
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
                    >
                        Get in Touch
                    </a>
                </div>
            </section>

        </div>
    );
};

export default Hero;

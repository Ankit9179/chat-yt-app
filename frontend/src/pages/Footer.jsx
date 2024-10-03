import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-400">Terms of Service</a>
                    <a href="#" className="hover:text-gray-400">Contact Us</a>
                </div>
                <p className="text-sm">&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;

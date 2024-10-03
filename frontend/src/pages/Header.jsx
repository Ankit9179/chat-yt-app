import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="bg-[#1f2937] text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <a href='/' className="text-2xl font-bold" onClick={() => navigate('/')}>LogoLga</a>
                <nav>
                    <ul className="flex space-x-1">
                        <li><a href="#" className="hover:text-gray-300 hover:bg-slate-600 rounded-md p-2" onClick={() => navigate('/jokes')}>Jokes</a></li>
                        <li><a href="#" className="hover:text-gray-300 hover:bg-slate-600 rounded-md p-2">Meems</a></li>
                        <li><a href="#" className="hover:text-gray-300 hover:bg-slate-600 rounded-md p-2">News</a></li>
                        <li><a href="#" className="hover:text-gray-300 hover:bg-slate-600 rounded-md p-2" onClick={() => navigate('/chats-with-friends')}>Chats</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;

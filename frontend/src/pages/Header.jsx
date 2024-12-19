import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import myImage from '../../public/vlogify.png'; // Import the image file


const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="bg-[#1f2937] text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <a href='/' className="text-2xl font-bold" onClick={() => navigate('/')}><img className='w-20 rounded-lg' src={myImage} /></a>
                <nav>
                    <ul className="flex space-x-1">
                        <li><Link to="/vlogs" className="hover:text-gray-300 hover:bg-slate-600 rounded-md p-2" >Vlogs</Link></li>
                        <li><Link to="/chats-with-friends" className="hover:text-gray-300 hover:bg-slate-600 rounded-md p-2">Chats</Link></li>
                        <li><Link to="/jokes" className="hover:text-gray-300 hover:bg-slate-600 rounded-md p-2">Jokes</Link></li>
                        <li><Link to="/news" className="hover:text-gray-300 hover:bg-slate-600 rounded-md p-2">News</Link></li>
                        {/* <li><a href="#" className="hover:text-gray-300 hover:bg-slate-600 rounded-md p-2">News</a></li> */}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;

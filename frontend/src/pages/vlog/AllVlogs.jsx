import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AllVlogs = () => {
    const [vlogs, setVlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/api/vlog/get-all-Vlogs') // Replace with your API endpoint
            .then(response => response.json())
            .then(data => {
                setVlogs(data);
                console.log(data)
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching vlogs:', err);
                setError('Failed to load vlogs');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center mt-10 text-lg">Loading...</div>;
    }

    if (error) {
        return <div className="text-center mt-10 text-red-500 bg-black p-4 rounded-sm font-bold">{error}</div>;
    }
    return (
        <div className="p-6 w-[100%]">
            <h1 className="text-3xl font-bold text-center  mb-8 text-white">Vlogs</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {vlogs.map((vlog, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 hover:shadow-lg"
                    >
                        <img
                            src={vlog.imageUrl}
                            alt={vlog.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-800">{vlog.title}</h2>
                            <p className="mt-2 text-gray-600 text-sm">{vlog.body}</p>
                        </div>
                        <div className='flex justify-around'>
                            <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">view</button>
                            <button type="button" onClick={() => navigate('/vlog/create')} class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">create</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllVlogs
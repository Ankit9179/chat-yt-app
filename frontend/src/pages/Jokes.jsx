import React, { useEffect, useState } from 'react';

const Jokes = () => {
    const [joke, setJoke] = useState({});

    const getJokesFunctions = async () => {
        try {
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
            const data = await response.json();
            setJoke(data); // Set the joke data into the state
        } catch (error) {
            console.error('Error fetching the joke:', error);
        }
    };

    useEffect(() => {
        getJokesFunctions(); // Fetch the first joke on component mount
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-scree">
            {joke && joke.setup ? (
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center m-2">
                    <h1 className="text-2xl font-bold mb-4">{joke.type}</h1>
                    <p className="text-lg mb-4"><strong>Golu 🙄: </strong> {joke.setup}</p>
                    <p className="text-xl font-semibold"><strong>Gappu 🤣: </strong>{joke.punchline}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <button className='bg-red-600 p-3 rounded-md mt-4 text-white font-bold ' onClick={getJokesFunctions}>
                Next
            </button>
        </div>
    );
};

export default Jokes;

import React, { useState } from 'react';
import newsdata from './newsdata';
const NewsPage = () => {
    const data = newsdata
    const [visibleCount, setVisibleCount] = useState(5);

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 5);
    };

    return (
        <div className='text-white'>
            <h1>News</h1>
            <div>
                {data.slice(0, visibleCount).map((item, index) => (
                    <div key={index} style={{ marginBottom: '20px' }}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <img src={item.urlToImage} alt={item.title} style={{ width: '100%', height: 'auto' }} />
                        <p>{item.publishedAt}</p>
                    </div>
                ))}
            </div>
            {visibleCount < data.length && (
                <div className='flex items-center justify-center'>
                    <button onClick={handleShowMore} className='m-5 p-3 rounded-md hover:bg-black text-white bg-blue-600'>
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
};

export default NewsPage;


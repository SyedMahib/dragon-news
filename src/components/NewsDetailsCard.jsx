import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    // console.log(news);
    return (
        <div className='space-y-5'>
            <img className='w-full object-cover' src={news.image_url} alt=""/>
            <h2 className='text-2xl'>{news.title}</h2>
            <p>{news.details}</p>
            <Link to={`/category/${news.category_id}`} className='btn btn-secondary group'><FaArrowLeft className="transform transition duration-200 ease-in-out group-hover:-translate-x-1"/>Return to Home</Link>
        </div>
    );
};

export default NewsDetailsCard;
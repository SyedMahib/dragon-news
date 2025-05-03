import React from 'react';
import { FaEye, FaShare, FaStar } from 'react-icons/fa';
import { FaBookBookmark } from 'react-icons/fa6';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    author,
    thumbnail_url,
    details,
    total_view,
    rating,
  } = news;

  const formattedDate = new Date(news.author.published_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="card bg-base-100 shadow-md mb-6">
      <div className="card-header flex items-center justify-between bg-base-200 p-4 rounded-t-md">
        <div className="flex items-center space-x-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{author?.name}</p>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="text-gray-500">
          <button className="btn btn-ghost btn-sm">
            <FaBookBookmark size={20}/>
          </button>
          <button className="btn btn-ghost btn-sm">
            <FaShare size={20}/>
          </button>
        </div>
      </div>

      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{title}</h2>
        <img
          src={thumbnail_url}
          alt="news"
          className="rounded-lg my-4 object-cover w-full max-h-[350px]"
        />
        <p className="text-gray-700 text-sm">
          {details.slice(0, 200)}...
          <Link to={`/news-details/${id}`} className="text-primary font-semibold cursor-pointer hover:text-secondary"> Read More</Link>
        </p>
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            {
                Array.from({ length: rating.number }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                ))
            }
            <span>{rating?.number}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

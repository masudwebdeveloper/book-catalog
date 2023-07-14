import React from 'react';

interface BookCardProps {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  thumbnailUrl: string;
}

const BookCard: React.FC<BookCardProps> = ({
  title,
  author,
  genre,
  publicationDate,
  thumbnailUrl,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={thumbnailUrl} alt={title} className="w-40 h-40 object-cover rounded-md mx-auto" />
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{author}</p>
        <p className="text-gray-600">{genre}</p>
        <p className="text-gray-600">{publicationDate}</p>
      </div>
    </div>
  );
};

export default BookCard;

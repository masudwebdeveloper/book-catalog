import React from 'react';

const CardPreloader: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md h-96">
      <div className="flex space-x-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="flex-1">
          <div className="h-4 bg-gray-200 rounded-sm w-1/4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded-sm w-2/4 mt-1 animate-pulse"></div>
        </div>
      </div>
      <div className="h-2 bg-gray-200 rounded-sm w-3/4 mt-4 animate-pulse"></div>
      <div className="h-2 bg-gray-200 rounded-sm w-2/4 mt-1 animate-pulse"></div>
      <div className="h-2 bg-gray-200 rounded-sm w-1/4 mt-1 animate-pulse"></div>
    </div>
  );
};

export default CardPreloader;

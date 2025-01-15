import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Spinner Container */}
      <div className="relative">
        {/* Spinner */}
        <div className="rounded-full border-t-4 border-b-4 border-blue-500 h-16 w-16 animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;

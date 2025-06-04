import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-purple-200 rounded-full"></div>
        <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full absolute top-0 left-0 animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
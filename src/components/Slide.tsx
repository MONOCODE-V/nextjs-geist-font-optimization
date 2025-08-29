"use client";

import React from 'react';

interface SlideProps {
  title: string;
  content: React.ReactNode;
  type?: 'title' | 'content' | 'summary';
}

const Slide: React.FC<SlideProps> = ({ title, content, type = 'content' }) => {
  const getSlideStyles = () => {
    switch (type) {
      case 'title':
        return 'bg-gradient-to-br from-blue-600 to-purple-700 text-white';
      case 'summary':
        return 'bg-gradient-to-br from-green-50 to-blue-50';
      default:
        return 'bg-white';
    }
  };

  const getTitleStyles = () => {
    switch (type) {
      case 'title':
        return 'text-4xl md:text-5xl font-bold text-center mb-8 text-white';
      case 'summary':
        return 'text-3xl font-bold text-center mb-6 text-gray-800';
      default:
        return 'text-3xl font-bold mb-6 text-gray-800 border-b-4 border-blue-500 pb-4';
    }
  };

  return (
    <div className={`
      min-h-[600px] w-full rounded-lg shadow-lg p-8 md:p-12 
      ${getSlideStyles()}
      transition-all duration-300 ease-in-out
      flex flex-col justify-center
    `}>
      <h1 className={getTitleStyles()}>
        {title}
      </h1>
      
      <div className={`
        flex-1 flex flex-col justify-center
        ${type === 'title' ? 'text-white' : 'text-gray-700'}
      `}>
        {content}
      </div>
      
      {/* PowerPoint-style slide number */}
      <div className="absolute bottom-4 right-4 opacity-50">
        <div className={`
          text-xs px-2 py-1 rounded
          ${type === 'title' ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'}
        `}>
          ISTQB v4.0
        </div>
      </div>
    </div>
  );
};

export default Slide;

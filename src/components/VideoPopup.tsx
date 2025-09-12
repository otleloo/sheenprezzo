"use client";

import React from 'react';

interface VideoPopupProps {
  videoId: string;
  onClose: () => void;
}

const VideoPopup: React.FC<VideoPopupProps> = ({ videoId, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="relative w-full h-3/4 max-w-screen-lg rounded-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute -top-8 right-0 text-white text-2xl z-10"
        >
          &times;
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPopup;

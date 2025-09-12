"use client";

import React from "react";

interface VideoPopupProps {
  videoId: string;
  onClose: () => void;
}

const VideoPopup: React.FC<VideoPopupProps> = ({ videoId, onClose }) => {
  return (
    <div className="bg-opacity-75 fixed inset-0 z-50 flex items-center justify-center bg-black p-4">
      <div className="relative h-3/4 w-full max-w-screen-lg overflow-hidden rounded-lg">
        <button
          onClick={onClose}
          className="absolute -top-8 right-0 z-10 text-2xl text-white"
        >
          &times;
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPopup;

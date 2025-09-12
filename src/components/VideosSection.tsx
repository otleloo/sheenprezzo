"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import VideoPopup from './VideoPopup';

const videoData = [
  { id: 'knAM-5SUszw', title: 'Video 1' },
  { id: 'gnQitZzauGs', title: 'Video 2' },
  { id: '8ogm2afRM9M', title: 'Video 3' },
  { id: 'vzO4MdCXyRA', title: 'Video 4' },
  { id: 'fiU56A5CL00', title: 'Video 5' },
  { id: 'oXhX_MW0eqw', title: 'Video 6' },
  { id: 'F6AbTbuFH8Y', title: 'Video 7' },
  { id: '_unPe-S854k', title: 'Video 8' },
];

const VideoCard = ({ videoId, title, onClick }: { videoId: string; title: string; onClick: () => void; }) => {
  const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="overflow-hidden rounded-lg mb-2">
        <Image
          src={thumbnail}
          alt={title}
          width={320}
          height={180}
          className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-sm font-medium line-clamp-2 text-white group-hover:text-gray-300">
        {title}
      </h3>
    </div>
  );
};

const VideosSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openVideoPopup = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeVideoPopup = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="videos" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          CHECKOUT MY LATEST VIDEOS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoData.map(video => (
            <VideoCard
              key={video.id}
              videoId={video.id}
              title={video.title}
              onClick={() => openVideoPopup(video.id)}
            />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-2 rounded-md transition-colors">
            Load More
          </button>
        </div>
      </div>
      {selectedVideo && (
        <VideoPopup videoId={selectedVideo} onClose={closeVideoPopup} />
      )}
    </section>
  );
};

export default VideosSection;
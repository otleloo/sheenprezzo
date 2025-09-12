"use client";

import React, { useState } from "react";
import Image from "next/image";
import VideoPopup from "./VideoPopup";
import SupportMeSection from "./SupportMeSection";
import SupportMeContinuationSection from "./SupportMeContinuationSection";

const videoData = [
  { id: "knAM-5SUszw", title: "Murder office video by sheen prezoo" },
  { id: "gnQitZzauGs", title: "LOLIPOP - SHEEN PREZZO (MUSIC VIDEO)" },
  {
    id: "8ogm2afRM9M",
    title:
      "Spendi: by Sheen prezoo ft moto flame ft Dj.Qver ; Official audio 💥",
  },
  { id: "vzO4MdCXyRA", title: "Tafuta pesa by sheen prezoo 💥💲💸" },
  { id: "fiU56A5CL00", title: "BLESSINGS_SHEEN PREZO0_OFFICIAL AUDIO" },
  {
    id: "oXhX_MW0eqw",
    title: "Sheen Prezoo Feat Roady Boy_Anatambua Official Audio mp3",
  },
  { id: "F6AbTbuFH8Y", title: "SHEEN PREZOO I MY STORY I OFFICIAL VIDEO 4K" },
  {
    id: "_unPe-S854k",
    title: " KENYA YETU by Sheen prezoo ft S_kelvoz #kenya siyo ya mamako. ",
  },
];

const VideoCard = ({
  videoId,
  title,
  onClick,
}: {
  videoId: string;
  title: string;
  onClick: () => void;
}) => {
  const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="mb-2 overflow-hidden rounded-lg">
        <Image
          src={thumbnail}
          alt={title}
          width={320}
          height={180}
          className="h-48 w-full transform object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="line-clamp-2 text-sm font-medium text-white group-hover:text-gray-300">
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
    <>
      <section id="videos" className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-3xl font-bold">
            CHECKOUT MY LATEST VIDEOS
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {videoData.map((video) => (
              <VideoCard
                key={video.id}
                videoId={video.id}
                title={video.title}
                onClick={() => openVideoPopup(video.id)}
              />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <button className="rounded-md bg-gray-800 px-8 py-2 text-white transition-colors hover:bg-gray-700">
              Load More
            </button>
          </div>
        </div>
        {selectedVideo && (
          <VideoPopup videoId={selectedVideo} onClose={closeVideoPopup} />
        )}
      </section>
      <SupportMeSection />
      <SupportMeContinuationSection />
    </>
  );
};

export default VideosSection;

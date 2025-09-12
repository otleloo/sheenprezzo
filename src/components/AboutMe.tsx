import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section id="about" className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          {/* Image column */}
          <div className="w-full md:w-1/3">
            <div className="aspect-w-3 aspect-h-4 overflow-hidden">
              <Image
                src="/sheenprezzo.webp"
                alt="SHEEN PREZZO"
                width={600}
                height={800}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          </div>
          {/* Text column */}
          <div className="w-full md:w-2/3">
            <h2 className="mb-6 text-3xl font-bold">ABOUT ME</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Hey wonderful souls! I&apos;m Sheen Prezzo, your go-to musician,
                storyteller, and friend here on YouTube. Born and raised in the
                heart of Kenya, I weave a piece of my vibrant culture into every
                note and lyric I share.
              </p>
              <p>
                My journey is about blending rhythm, feeling, and a touch of the
                unexpected. Beyond the music, you can always find me on
                Facebook, Snapchat, and Instagram, where the sound never stops.
              </p>
              <p>
                I believe in the beauty of a community bound by harmony and joy.
                Your listens, likes, and support fuel this path, and I&apos;m
                endlessly grateful for each of you. Together, let&apos;s keep
                the good vibes alive and make every track a shared heartbeat.
              </p>
              <p>
                Stay tuned for new songs, live sessions, and deeper ways to
                connect across platforms. After all, this journey is just as
                much yours as it is mine. Cheers to a world of music,
                creativity, and friendship!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

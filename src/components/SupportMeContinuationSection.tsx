import React from 'react';
import Image from 'next/image';

const SupportMeContinuationSection = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/models.webp"
              alt="Support Image 1"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>

          {/* Right Side: Text and Two Images Below */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {/* Text */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Join the Sheen Prezzo Community!
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Your support goes a long way in helping me create more music,
                videos, and engaging content for you. By supporting me, you&apos;re
                not just buying merchandise; you&apos;re becoming a vital part of
                this creative journey. Thank you for being awesome!
              </p>
            </div>

            {/* Two Images Below Text */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Image
                src="/tsB.webp"
                alt="Support Image 2"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-auto"
              />
              <Image
                src="/hoodCap.webp"
                alt="Support Image 3"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportMeContinuationSection;

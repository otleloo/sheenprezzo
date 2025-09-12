import React from "react";
import Image from "next/image";

const SupportMeContinuationSection = () => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8 lg:flex-row">
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/models.webp"
              alt="Support Image 1"
              width={600}
              height={400}
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>

          {/* Right Side: Text and Two Images Below */}
          <div className="flex w-full flex-col gap-8 lg:w-1/2">
            {/* Text */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                Join the Sheen Prezzo Community!
              </h3>
              <p className="leading-relaxed text-gray-300">
                Your support goes a long way in helping me create more music,
                videos, and engaging content for you. By supporting me,
                you&apos;re not just buying merchandise; you&apos;re becoming a
                vital part of this creative journey. Thank you for being
                awesome!
              </p>
            </div>

            {/* Two Images Below Text */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Image
                src="/tsB.webp"
                alt="Support Image 2"
                width={300}
                height={200}
                className="h-auto w-full rounded-lg object-cover"
              />
              <Image
                src="/hoodCap.webp"
                alt="Support Image 3"
                width={300}
                height={200}
                className="h-auto w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportMeContinuationSection;

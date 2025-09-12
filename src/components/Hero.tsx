import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-16">
      <div className="relative container mx-auto flex min-h-[90vh] flex-col justify-center px-4">
        <div className="flex flex-col items-center justify-center md:flex-row">
          {/* Image for mobile, order-first on mobile, order-last on md */}
          <div className="relative z-10 flex w-full items-center justify-center md:order-last md:w-1/2">
            <Image
              src="/sheenprezzo2.webp"
              alt="SHEEN PREZZO"
              width={500}
              height={500}
              className="float-animation max-h-[90%] max-w-full object-contain"
              style={{
                filter: "drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.5))",
              }}
            />
          </div>

          {/* Combined Text Container */}
          <div className="relative w-full text-center md:order-first md:w-1/2">
            {/* Normal Text */}
            <h1 className="text-[5rem] leading-[0.8] font-extrabold tracking-tighter text-white md:text-[16rem]">
              <div className="opacity-80">SHEEN</div>
              <div className="opacity-80">PREZZO</div>
            </h1>
            {/* Stroke Text - Absolutely positioned over normal text */}
            <div className="absolute z-20 inset-0 flex flex-col justify-center z-20"> 
              <h1 className="text-[5rem] leading-[0.8] font-extrabold tracking-tighter text-center md:text-[16rem]">
                <div className="text-stroke">SHEEN</div>
                <div className="text-stroke">PREZZO</div>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
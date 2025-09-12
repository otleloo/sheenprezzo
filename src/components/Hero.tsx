import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative min-h-[90vh] flex flex-col justify-center">
        {/* Large background text - bottom layer */}
        <div className="relative z-0 max-w-full text-center mx-auto">
          <h1 className="text-white text-[10rem] md:text-[16rem] font-extrabold leading-[0.8] tracking-tighter">
            <div className="opacity-80">SHEEN</div>
            <div className="opacity-80">PREZZO</div>
          </h1>
        </div>
        {/* Hero image - middle layer */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-full md:w-3/5 lg:w-1/2 h-full flex items-center justify-end">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/sheenprezzo2.webp"
              alt="SHEEN PREZZO"
              width={500}
              height={500}
              className="object-contain max-h-[90%] max-w-full float-animation"
              style={{
                filter: 'drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.5))'
              }}
            />
          </div>
        </div>
        {/* Duplicated text with stroke only - top layer */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center">
          <h1 className="text-[10rem] md:text-[16rem] font-extrabold leading-[0.8] tracking-tighter text-center">
            <div className="text-stroke">SHEEN</div>
            <div className="text-stroke">PREZZO</div>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;

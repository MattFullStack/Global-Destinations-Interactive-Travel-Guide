import Image from 'next/image';
import React from 'react';

const Hero = () => {
  // Define the size of the overlay image
  const overlaySize = 350; // This will be used for both width and height for a circle

  return (
    <section className="flex items-center justify-center px-20 py-10 w-full pb-34">
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Container for the main image */}
        <div className="relative w-full h-80 lg:h-[720px] overflow-hidden rounded-3xl">
          <Image
            src="/picture7.png"
            alt="Nature"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
          {/* Overlay Image */}
          <div className="absolute top-1/2 left-20 transform -translate-y-1/2" style={{ width: `${overlaySize}px`, height: `${overlaySize}px` }}>
            <Image
              src="/map1.png"
              alt="Overlay"
              width={overlaySize}
              height={overlaySize}
              objectFit="cover"
              className="rounded-xl"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-start justify-center top-20 pr-20">
              <div className="max-w-max bg-white bg-opacity-60 rounded-full px-6 py-2 backdrop-filter backdrop-blur-lg">
                <h4 className="text-1xl font-regular text-gray-800">Moher Cliffs, Ireland</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

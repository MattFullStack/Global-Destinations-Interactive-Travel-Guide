import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    // Padding uniforme de px-10 et py-8 sur tous les appareils
    <section className="flex items-center justify-center px-20 py-20 w-full">
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Container pour l'image */}
      <div className="relative w-full h-80 lg:h-[720px] overflow-hidden rounded-3xl">
        {/* Image en plein écran */}
        <Image
          src="/banner1.png" // Assurez-vous que le chemin de l'image est correct
          alt="Nature"
          layout="fill"
          objectFit="cover"
          className="rounded-3xl"
        />
          {/* Titre avec une taille de police personnalisée */}
          <h1 className="absolute top-24 left-14 font-bold"
              style={{ color: '#3A3A3A', fontSize: '2.80rem', lineHeight: '1.2' }}>
            Embrace Nature <br /> Responsibly with <br /> <span className='text-green-700'>EcoPath</span>
          </h1>
          {/* Paragraphe avec une taille de police personnalisée */}
          <p className="absolute bottom-24 left-14 text-md lg:text-lg text-gray-200"
             style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
            Join us in exploring the world's most stunning <br />eco-friendly destinations without leaving a footprint.<br />
            Discover sustainable travel like never before.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;






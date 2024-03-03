import React from 'react';
import Image from 'next/image';

interface CampProps {
  backgroundImage: string; // This should be a CSS class
  title: string;
}

const CampSite = ({ backgroundImage, title }: CampProps) => {
  return (
    <div className={`min-w-[1100px] h-[500px] rounded-3xl overflow-hidden shadow-lg bg-cover bg-center bg-no-repeat ${backgroundImage}`}>
      <div className="flex h-full flex-col justify-between p-10">
        <div className="mt-4 ml-4 max-w-max bg-white bg-opacity-60 rounded-full px-8 py-4 backdrop-filter backdrop-blur-lg">
          <h4 className="text-3xl font-regular text-gray-800">{title}</h4>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="max-container relative flex flex-col px-20 py-2 lg:mb-10 lg:py-28 xl:mb-10 ">
    <div className="hide-scrollbar flex w-full items-start justify-start gap-8 overflow-x-auto ">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Yorke Peninsula, Australia"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Bavaria, Germany"
        />
        <CampSite
          backgroundImage="bg-bg-img-3"
          title="Kombo South, Gambia"
        />
      </div>
    </section>
  );
};

export default Camp;

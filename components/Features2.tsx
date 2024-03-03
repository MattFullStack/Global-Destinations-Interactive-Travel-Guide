import React from 'react';
import Image from 'next/image';

// Define the types for the props of FeatureItem
interface FeatureItemProps {
  title: React.ReactNode; // Since you are passing JSX elements
  description: string;
}

// Component for a single feature
const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => (
  <div className="bg-white rounded-3xl border-1 border-gray-300 shadow-md hover:shadow-lg my-8 md:my-4 min-h-[200px] flex flex-col justify-center items-start p-6 transition duration-300 ease-in-out">
    <h3 className="text-lg font-semibold pb-6">{title}</h3>
    <p className="text-sm font-semibold">{description}</p>
  </div>
);

const Features2 = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center px-4 md:py-20">
      {/* Image of the phone on the left */}
      <div className="w-full md:w-1/2 pb-8">
        <Image
          src="/iphone2.png"
          alt="Phone"
          width={600}
          height={1100}
          className="rounded-xl"
        />
      </div>
      
      {/* Features list on the right */}
      <div className="w-full md:w-1/2 md:mt-0 md:pl-6 pr-20">
        <h2 className="text-2xl font-semibold"
          style={{ color: '#3A3A3A', fontSize: '2.80rem', lineHeight: '1.4' }}>Our ECO Features</h2>
        <FeatureItem
          title={<><span className="text-green-700">Carbon-Neutral</span> Travel Options</>}
          description="From treehouses to eco-lodges, find accommodations blending comfort and conservation."
        />
        <FeatureItem
          title={<><span className="text-green-700">Sustainable</span> Accommodations</>}
          description="Offset your travel footprint with our carbon-neutral transport options for a guilt-free journey."
        />
        <FeatureItem
          title={<><span className="text-green-700">Eco</span> Experiences</>}
          description="Engage in local cultures and participate in conservation efforts for an enriching travel experience."
        />
      </div>
    </div>
  );
};

export default Features2;

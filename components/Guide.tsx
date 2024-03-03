import React from 'react';

interface GuideStepProps {
  icon: string;
  title: string;
  description: string;
  iconWidth?: number; // Optional width for icon
  iconHeight?: number; // Optional height for icon
}

const GuideStep: React.FC<GuideStepProps> = ({
  icon,
  title,
  description,
  iconWidth = 50, 
  iconHeight = 50, 
}) => {
  return (
    // Increase the height and add more vertical padding
    <div className="flex flex-col items-center p-6 border rounded-lg shadow-md  justify-center h-80 transition duration-300 ease-in-out hover:shadow-xl hover:scale-105">
      <img
        src={icon}
        alt={title}
        className="mb-4"
        style={{ width: `${iconWidth}px`, height: `${iconHeight}px` }} // Inline styles to control icon size
      />
      <div className="px-4">
        <h3 className="text-lg font-semibold mb-4 text-center">{title}</h3>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};

const Guide: React.FC = () => {
  return (
    <section className="py-14 px-6 lg:px-12">
      <div className="text-center mb-8 pb-4">
        <h2 className="text-2xl font-semibold"
        style={{ color: '#3A3A3A', fontSize: '2.80rem', lineHeight: '1.4' }}>How It Works:</h2>
        <h2 className="text-2xl font-semibold"
        style={{ color: '#3A3A3A', fontSize: '2.80rem', lineHeight: '1.2' }}>Your Green Journey in Three Steps</h2>
      </div>
      <div className="flex justify-around gap-4 md:gap-8 items-stretch">
        <GuideStep
          icon="/icon1.png"
          title="Choose Your Destination"
          description="Select from an array of vetted eco-friendly locations"
          iconWidth={45}
          iconHeight={45}
        />
        <GuideStep
          icon="/icon3.png"
          title="Plan Your Adventure"
          description="Customize your trip with sustainable activities and experiences"
          iconWidth={46}
          iconHeight={46}
        />
        <GuideStep
          icon="/icon2.png"
          title="Travel with Purpose"
          description="Embark on your journey knowing every step preserves the environment"
          iconWidth={45}
          iconHeight={45}
        />
      </div>
    </section>
  );
};

export default Guide;

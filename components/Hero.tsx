import React from 'react';
import Button from './Button';

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.717-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
  </svg>
);

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.852l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
  </svg>
);

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        poster="https://picsum.photos/seed/heritage-poster/1920/1080"
      >
        {/* A silent, short, looping video of Indonesian culture would be ideal here */}
         <source src="https://assets.mixkit.co/videos/preview/mixkit-flying-over-a-beautiful-river-and-jungle-2221-large.mp4" type="video/mp4" />
      </video>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent z-10"></div>

      <div className="relative z-20 flex flex-col justify-end h-full pb-24 md:pb-32 lg:pb-40 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Menonton Warisan,
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#D4AF37] leading-tight mb-4">
            Menyelami Nusantara.
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-lg">
            Jelajahi kekayaan budaya Indonesia melalui film dokumenter, seni tradisi, dan arsip bersejarah. Sebuah perjalanan sinematik ke jantung peradaban Nusantara.
          </p>
          <div className="flex items-center space-x-4">
            <Button onClick={() => {}} variant="primary" icon={<PlayIcon />}>
              Mulai Nonton
            </Button>
            <Button onClick={() => {}} variant="secondary" icon={<InfoIcon />}>
              Info Lebih
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

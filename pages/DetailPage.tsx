import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import MovieRow from '../components/MovieRow';
import TrailerModal from '../components/TrailerModal';
import type { Page, Movie } from '../types';
import { categories } from '../constants';

interface DetailPageProps {
  movie: Movie;
  navigateTo: (page: Page) => void;
  viewMovieDetails: (movie: Movie) => void;
}

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.717-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
  </svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);


const DetailPage: React.FC<DetailPageProps> = ({ movie, navigateTo, viewMovieDetails }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const relatedContent = categories.find(c => c.title === "Program Unggulan") || categories[0];

  return (
    <>
      <div className="bg-black">
        <Header navigateTo={navigateTo} />
        <main>
          {/* Banner Section */}
          <div className="relative h-[60vh] md:h-[80vh] w-full">
            <img src={movie.bannerUrl} alt={movie.title} className="absolute top-0 left-0 w-full h-full object-cover z-0"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10"></div>
            
            <div className="relative z-20 flex flex-col justify-end h-full pb-16 md:pb-24 container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-3">{movie.title}</h1>
                <div className="flex items-center space-x-4 text-gray-300 mb-4">
                  <span>{movie.year}</span>
                  <span className="border border-gray-500 px-2 text-sm">HD</span>
                  <span>{movie.duration}</span>
                </div>
                <p className="text-md text-gray-200 mb-8 max-w-xl">{movie.synopsis}</p>
                <div className="flex items-center space-x-4">
                  <Button onClick={() => setIsModalOpen(true)} variant="primary" icon={<PlayIcon />}>
                    Tonton Sekarang
                  </Button>
                  <Button onClick={() => {}} variant="secondary" icon={<PlusIcon />}>
                    Tambahkan ke Koleksi
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Related Content Section */}
          <div className="pb-16">
            <MovieRow category={{...relatedContent, title:"Konten Terkait"}} viewMovieDetails={viewMovieDetails} />
          </div>
        </main>
        <Footer />
      </div>

      {isModalOpen && movie.videoUrl && (
        <TrailerModal videoUrl={movie.videoUrl} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default DetailPage;
import React from 'react';
import type { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  viewMovieDetails: (movie: Movie) => void;
}

const PlayCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.235A1.125 1.125 0 019 15.235V8.765c0-.857.96-1.402 1.673-.983l5.603 3.235z" clipRule="evenodd" />
  </svg>
);

const PlusCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const MovieCard: React.FC<MovieCardProps> = ({ movie, viewMovieDetails }) => {
  return (
    <div 
      onClick={() => viewMovieDetails(movie)}
      className="group relative flex-shrink-0 w-40 md:w-56 lg:w-64 aspect-[2/3] rounded-md overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 ease-in-out md:hover:scale-110 md:hover:z-20"
    >
      <img src={movie.imageUrl} alt={movie.title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white font-bold text-lg">{movie.title}</h3>
        <p className="text-gray-300 text-sm">{movie.year}</p>
        <div className="flex items-center space-x-2 mt-2">
          <button className="text-white hover:text-[#D4AF37] transition-colors"><PlayCircleIcon /></button>
          <button className="text-white hover:text-[#D4AF37] transition-colors"><PlusCircleIcon /></button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

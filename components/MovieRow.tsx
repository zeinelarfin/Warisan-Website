import React, { useRef } from 'react';
import type { Movie, Category } from '../types';
import MovieCard from './MovieCard';

interface MovieRowProps {
  category: Category;
  viewMovieDetails: (movie: Movie) => void;
}

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);


const MovieRow: React.FC<MovieRowProps> = ({ category, viewMovieDetails }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.8
        : scrollLeft + clientWidth * 0.8;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-4 md:py-6 group relative">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-3 ml-4 sm:ml-6 lg:ml-8">{category.title}</h2>
      <div className="relative">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-0 bottom-0 z-30 bg-black/50 w-12 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeftIcon />
        </button>
        <div ref={scrollRef} className="flex items-center space-x-3 md:space-x-4 overflow-x-scroll overflow-y-hidden px-4 sm:px-6 lg:px-8 scrollbar-hide">
          {category.movies.map((movie) => (
            <MovieCard key={`${category.title}-${movie.id}`} movie={movie} viewMovieDetails={viewMovieDetails} />
          ))}
        </div>
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-0 bottom-0 z-30 bg-black/50 w-12 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
};

export default MovieRow;

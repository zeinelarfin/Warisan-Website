import React from 'react';
import Header from '../components/Header';
import MovieRow from '../components/MovieRow';
import Footer from '../components/Footer';
import type { Page, Movie, Category } from '../types';
import { categories } from '../constants';

interface SeriesPageProps {
  navigateTo: (page: Page) => void;
  viewMovieDetails: (movie: Movie) => void;
}

const SeriesPage: React.FC<SeriesPageProps> = ({ navigateTo, viewMovieDetails }) => {
  // Filter out "Program Unggulan" as it's for the homepage
  const seriesCategories = categories.filter(
    (category) =>
      [
        'Kerajaan Nusantara',
        'Kuliner Tradisi',
        'Film Klasik & Sejarah',
        'Cerita Rakyat & Seni',
      ].includes(category.title)
  );

  return (
    <div className="bg-black min-h-screen">
      <Header navigateTo={navigateTo} />
      <main className="pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Series</h1>
            <div className="flex flex-col space-y-8">
                {seriesCategories.map((category) => (
                    <MovieRow key={category.title} category={category} viewMovieDetails={viewMovieDetails} />
                ))}
            </div>
        </div>
      </main>
      <div className="pt-20">
        <Footer />
      </div>
    </div>
  );
};

export default SeriesPage;
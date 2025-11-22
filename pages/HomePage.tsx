import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';
import Footer from '../components/Footer';
import type { Page, Movie } from '../types';
import { categories } from '../constants';

interface HomePageProps {
  navigateTo: (page: Page) => void;
  viewMovieDetails: (movie: Movie) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo, viewMovieDetails }) => {
  return (
    <div className="bg-black">
      <Header navigateTo={navigateTo} />
      <main>
        <Hero navigateTo={navigateTo} />
        <div className="transform -translate-y-24">
          {categories.map((category) => (
            <MovieRow key={category.title} category={category} viewMovieDetails={viewMovieDetails} />
          ))}
        </div>
        
        {/* Embedded Video Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
           <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Cuplikan Eksklusif</h2>
           <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl shadow-red-900/20">
            <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/EjtIcn61LaQ" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
            </iframe>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
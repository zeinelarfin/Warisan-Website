import React, { useState, useCallback } from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DetailPage from './pages/DetailPage';
import TentangPage from './pages/TentangPage';
import SeriesPage from './pages/SeriesPage';
import BerlanggananPage from './pages/BerlanggananPage';
import type { Movie, Page } from './types';
import { sampleMovie } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const navigateTo = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const viewMovieDetails = useCallback((movie: Movie) => {
    setSelectedMovie(movie);
    setCurrentPage('detail');
    window.scrollTo(0, 0);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage navigateTo={navigateTo} />;
      case 'detail':
        return <DetailPage movie={selectedMovie || sampleMovie} navigateTo={navigateTo} viewMovieDetails={viewMovieDetails} />;
      case 'tentang':
        return <TentangPage navigateTo={navigateTo} />;
      case 'series':
        return <SeriesPage navigateTo={navigateTo} viewMovieDetails={viewMovieDetails} />;
      case 'berlangganan':
        return <BerlanggananPage navigateTo={navigateTo} />;
      case 'home':
      default:
        return <HomePage navigateTo={navigateTo} viewMovieDetails={viewMovieDetails} />;
    }
  };

  return (
     <div className="bg-black min-h-screen">
      {/* Subtle background pattern inspired by Indonesian Batik */}
      <div 
        className="fixed inset-0 z-0 opacity-[0.03] bg-repeat" 
        style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}>
      </div>
      <div className="relative z-10">
        {renderPage()}
      </div>
    </div>
  );
};

export default App;
import React, { useState, useEffect } from 'react';
import type { Page } from '../types';
import Logo from './Logo';

interface HeaderProps {
  navigateTo: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ navigateTo }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = ["Home", "Series", "Tentang", "Berlangganan"];
  
  const handleNavClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    const pageMap: { [key: string]: Page } = {
      'Home': 'home',
      'Series': 'series',
      'Tentang': 'tentang',
      'Berlangganan': 'berlangganan'
    };
    const page = pageMap[link];
    if (page) {
      navigateTo(page);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            <Logo onClick={() => navigateTo('home')} />
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map(link => (
                <a 
                  key={link} 
                  href="#" 
                  onClick={(e) => handleNavClick(e, link)} 
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => navigateTo('login')}
              className="bg-[#D4AF37] text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#b89a31] transition-colors"
            >
              Masuk
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
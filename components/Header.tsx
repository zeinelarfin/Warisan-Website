import React, { useState, useEffect } from 'react';
import type { Page } from '../types';
import Logo from './Logo';

interface HeaderProps {
  navigateTo: (page: Page) => void;
}

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const Header: React.FC<HeaderProps> = ({ navigateTo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
        document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const navLinks = ["Home", "Series", "Blog", "Tentang", "Berlangganan"];
  
  const handleNavClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    const pageMap: { [key: string]: Page } = {
      'Home': 'home',
      'Series': 'series',
      'Blog': 'blog',
      'Tentang': 'tentang',
      'Berlangganan': 'berlangganan'
    };
    const page = pageMap[link];
    if (page) {
      navigateTo(page);
    }
    setIsMenuOpen(false);
  };

  const handleLoginClick = () => {
    navigateTo('login');
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled || isMenuOpen ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'}`}>
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
                className="hidden md:block bg-[#D4AF37] text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#b89a31] transition-colors"
              >
                Masuk
              </button>
              <button
                onClick={() => setIsMenuOpen(true)}
                className="md:hidden text-white p-2"
                aria-label="Buka menu"
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-center animate-fade-in">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-gray-400 hover:text-white"
            aria-label="Tutup menu"
          >
            <CloseIcon />
          </button>
          <nav className="flex flex-col items-center space-y-8 text-center">
            {navLinks.map(link => (
              <a 
                key={link} 
                href="#" 
                onClick={(e) => handleNavClick(e, link)} 
                className="text-3xl font-medium text-gray-300 hover:text-[#D4AF37] transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
           <button
            onClick={handleLoginClick}
            className="mt-12 bg-[#D4AF37] text-black px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#b89a31] transition-colors"
          >
            Masuk
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
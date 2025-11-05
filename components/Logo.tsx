import React from 'react';

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ className = '', onClick }) => {
  return (
    <div 
      onClick={onClick} 
      className={`flex items-center space-x-3 cursor-pointer ${className}`}
    >
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 14L12 22L24 10L36 22L44 14" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 34L12 26L24 38L36 26L44 34" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-2xl md:text-3xl font-bold tracking-widest text-[#D4AF37]">
        WARISAN
      </span>
    </div>
  );
};

export default Logo;

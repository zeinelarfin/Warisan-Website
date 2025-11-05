import React from 'react';

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>
);

const TikTokIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.86-.95-6.69-2.81-1.77-1.77-2.69-4.16-2.63-6.71.05-2.54 1.01-4.96 2.66-6.71 1.64-1.74 3.9-2.73 6.31-2.75.02 1.44-.01 2.88.01 4.32.01 1.45-.53 2.85-1.48 3.86-1.18 1.24-2.93 1.87-4.71 1.82-1.39-.03-2.73-.56-3.66-1.52-.8-.82-1.2-1.88-1.18-2.99.02-1.12.51-2.23 1.34-3.07.95-.94 2.22-1.48 3.54-1.48.04 1.41.02 2.82.03 4.23z"/></svg>
);

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800 mt-20 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-gray-400">
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 md:gap-x-8 mb-6 text-sm">
            <a href="mailto:zeinelarfin@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <EmailIcon />
                <span>zeinelarfin@gmail.com</span>
            </a>
            <a href="https://www.instagram.com/zeinalvin/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <InstagramIcon />
                <span>@zeinalvin</span>
            </a>
            <a href="https://www.tiktok.com/@zeinalvin_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <TikTokIcon />
                <span>@zeinalvin_</span>
            </a>
        </div>
        <div className="text-center text-xs">
           © {new Date().getFullYear()} Zeinel Arfin Sadiq. Mid-term project for Universitas Dr. Soetomo.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
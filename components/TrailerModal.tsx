import React, { useEffect } from 'react';

interface TrailerModalProps {
  videoUrl: string;
  onClose: () => void;
}

const TrailerModal: React.FC<TrailerModalProps> = ({ videoUrl, onClose }) => {
  // Handle Escape key press to close modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto'; // Restore scrolling
    };
  }, [onClose]);
  
  // To make sure youtube embed URL has the right parameters for autoplay
  const getAutoplayUrl = (url: string) => {
    try {
        const urlObj = new URL(url);
        urlObj.searchParams.set('autoplay', '1');
        urlObj.searchParams.set('rel', '0'); // Hide related videos
        return urlObj.toString();
    } catch(e) {
        return url; // return original url if it's not valid
    }
  };

  const autoplayVideoUrl = getAutoplayUrl(videoUrl);

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-4xl aspect-video bg-black rounded-lg shadow-2xl shadow-yellow-500/20 overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the video player
      >
        <div className="absolute top-2 right-3 z-10">
            <button 
              onClick={onClose} 
              className="text-white bg-black/50 rounded-full p-1 hover:bg-white hover:text-black transition-colors"
              aria-label="Close trailer"
            >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
        </div>
        <iframe
          className="w-full h-full"
          src={autoplayVideoUrl}
          title="Movie Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default TrailerModal;

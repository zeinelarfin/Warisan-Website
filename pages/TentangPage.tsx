import React, { useEffect } from 'react';
import type { Page } from '../types';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

// A component to safely render the TikTok embed code
const TikTokEmbed: React.FC<{ embedHtml: string }> = ({ embedHtml }) => {
  return <div className="flex justify-center [&>blockquote]:mx-auto" dangerouslySetInnerHTML={{ __html: embedHtml }} />;
};


interface TentangPageProps {
  navigateTo: (page: Page) => void;
}

const TentangPage: React.FC<TentangPageProps> = ({ navigateTo }) => {
  const tiktokEmbedHtml = `
    <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@zeinalvin_/video/7565455981778357512" data-video-id="7565455981778357512" style="max-width: 400px;min-width: 325px;" > <section> <a target="_blank" title="@zeinalvin_" href="https://www.tiktok.com/@zeinalvin_?refer=embed">@zeinalvin_</a> Setiap langkah kecil tetap berarti. Karena setiap jarak jauh, dimulai dari satu langkah pertama. <a title="daily" target="_blank" href="https://www.tiktok.com/tag/daily?refer=embed">#daily</a> <a title="unmuhjember" target="_blank" href="https://www.tiktok.com/tag/unmuhjember?refer=embed">#unmuhjember</a> <a title="running" target="_blank" href="https://www.tiktok.com/tag/running?refer=embed">#running</a> <a title="jember" target="_blank" href="https://www.tiktok.com/tag/jember?refer=embed">#jember</a> <a title="coffee" target="_blank" href="https://www.tiktok.com/tag/coffee?refer=embed">#coffee</a> <a target="_blank" title="♬ original sound  - zeinalvin_" href="https://www.tiktok.com/music/original-sound-zeinalvin-7565456047314635537?refer=embed">♬ original sound  - zeinalvin_</a> </section> </blockquote>
  `;

  useEffect(() => {
    // Dynamically load the TikTok embed script when the component mounts
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      const scriptElement = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <header className="sticky top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Logo onClick={() => navigateTo('home')} />
            <button onClick={() => navigateTo('home')} className="text-gray-300 hover:text-white transition-colors">&larr; Kembali ke Home</button>
          </div>
        </div>
      </header>
      
      <main className="flex-grow flex items-center justify-center py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 md:p-12 shadow-2xl shadow-yellow-500/5 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-4">Tentang WARISAN</h1>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    Platform mockup ini dibangun sebagai bagian dari proyek Ujian Tengah Semester untuk mata kuliah <span className="font-semibold text-white">Marketing Media</span>.
                </p>
                 <p className="text-md text-gray-400 mb-2">
                    Dosen Pengampu:
                </p>
                 <h3 className="text-xl font-semibold text-white mb-6">Dr. Daniel Susilo</h3>
                <div className="border-t border-gray-700 my-6"></div>
                <p className="text-md text-gray-400 mb-2">
                    Dibuat oleh:
                </p>
                <h2 className="text-2xl font-semibold text-white mb-1">Zeinel Arfin Sadiq</h2>
                <p className="text-md text-gray-400 mb-8">
                    Mahasiswa Magister Ilmu Komunikasi, Universitas Dr. Soetomo
                </p>
                 <div className="border-t border-gray-700 my-6"></div>
                <p className="text-md text-gray-400 mb-4">
                    Proyek ini merupakan sebuah eksplorasi kolaboratif dalam pengembangan antarmuka pengguna (UI/UX) yang modern, memanfaatkan kekuatan dari:
                </p>
                <p className="text-lg font-medium text-white">
                    ChatGPT & Google Gemini AI Studio Web Builder
                </p>
            </div>

            {/* Profile Section */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 md:p-12 shadow-2xl shadow-yellow-500/5">
                <h2 className="text-3xl font-bold text-center text-[#D4AF37] mb-8">Profil Kreator</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="text-center md:text-left">
                         <p className="text-gray-300 leading-relaxed mb-6">
                            Zeinel Arfin Sadiq adalah seorang praktisi dan akademisi komunikasi yang berfokus pada <span className="font-semibold text-white">Media Space, Virtual Reality, Cyber Media,</span> dan <span className="font-semibold text-white">Communication Technology</span>. Ia mendalami bagaimana teknologi digital membentuk interaksi manusia dan lanskap media modern.
                         </p>
                         <div className="flex justify-center md:justify-start">
                             <a href="https://scholar.google.com/citations?user=3x0RNVcAAAAJ&hl=id" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold transition-transform duration-200 transform hover:scale-105 bg-gray-700/70 text-white hover:bg-gray-600/70 backdrop-blur-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24c-2.45 0-4.63-.83-6.38-2.24l.95-1.64c1.45.99 3.2 1.55 5.43 1.55 4.3 0 7.23-2.2 7.23-5.33 0-2.4-1.7-4.22-4.2-4.22-1.48 0-2.73.7-3.62 1.82h3.32v2.5H6.87V7.1h2.5v2.88c.93-1.45 2.6-2.45 4.63-2.45 3.33 0 6.2 2.3 6.2 5.95 0 3.93-3.12 7.52-9.2 7.52z"></path></svg>
                                Profil Google Scholar
                            </a>
                         </div>
                    </div>
                    <div className="w-full">
                        <TikTokEmbed embedHtml={tiktokEmbedHtml} />
                    </div>
                </div>
            </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TentangPage;
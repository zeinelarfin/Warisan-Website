import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { Page } from '../types';

interface BlogPageProps {
  navigateTo: (page: Page) => void;
}

// Helper component for intersection animation
const FadeInSection: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    if (domRef.current) observer.observe(domRef.current);
    return () => {
      if (domRef.current) observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const ShareIcons = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = "Menonton Warisan, Menyelami Nusantara. Cek artikel baru ini!";
    
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return;
    }
    
    if (shareUrl) window.open(shareUrl, '_blank');
  };

  return (
    <div className="flex items-center justify-center gap-4 mt-8">
       {/* Twitter / X */}
      <button onClick={() => handleShare('twitter')} className="p-3 rounded-full bg-gray-800 hover:bg-[#D4AF37] hover:text-black text-white transition-all duration-300 transform hover:scale-110" aria-label="Share on Twitter">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      </button>

      {/* Facebook */}
      <button onClick={() => handleShare('facebook')} className="p-3 rounded-full bg-gray-800 hover:bg-[#D4AF37] hover:text-black text-white transition-all duration-300 transform hover:scale-110" aria-label="Share on Facebook">
         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
      </button>

      {/* LinkedIn */}
      <button onClick={() => handleShare('linkedin')} className="p-3 rounded-full bg-gray-800 hover:bg-[#D4AF37] hover:text-black text-white transition-all duration-300 transform hover:scale-110" aria-label="Share on LinkedIn">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      </button>
      
      {/* Copy Link (Generic / Instagram Story Intent) */}
      <button onClick={() => handleShare('copy')} className="p-3 rounded-full bg-gray-800 hover:bg-[#D4AF37] hover:text-black text-white transition-all duration-300 transform hover:scale-110 relative" aria-label="Copy Link">
         {copied ? (
             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
         ) : (
             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
         )}
         {copied && <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs bg-[#D4AF37] text-black px-2 py-1 rounded shadow-lg font-bold">Tersalin!</span>}
      </button>
    </div>
  );
};


const BlogPage: React.FC<BlogPageProps> = ({ navigateTo }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black min-h-screen font-sans text-gray-300 selection:bg-[#D4AF37] selection:text-black">
      <Header navigateTo={navigateTo} />
      
      {/* Parallax Header Section */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
            style={{ 
                backgroundImage: 'url("https://picsum.photos/seed/borobudur/1920/1080")',
                transform: `translateY(${scrollY * 0.5}px)`, // Parallax effect
            }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black z-10"></div>
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center pt-20">
            <FadeInSection>
                <span className="inline-block py-1 px-3 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm border border-[#D4AF37]/30">
                    EDITORIAL WARISAN
                </span>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
                    OTT Warisan Hadir: Cara Baru Menikmati Budaya Nusantara di Era Digital
                </h1>
                <p className="text-xl text-gray-200 italic max-w-2xl mx-auto drop-shadow-md">
                    "Sebuah revolusi digital untuk mendekatkan kita kembali ke akar."
                </p>
            </FadeInSection>
        </div>
      </div>
      
      <main className="pb-16 -mt-10 relative z-30">
        {/* Article Content */}
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            
            {/* Intro Blockquote */}
            <FadeInSection delay={200}>
                <div className="mb-12 p-8 border-l-4 border-[#D4AF37] bg-gray-900/80 backdrop-blur-md rounded-r-lg shadow-2xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Menonton Warisan,
                    </h2>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#D4AF37]">
                        Menyelami Nusantara.
                    </h2>
                </div>
            </FadeInSection>

            <div className="space-y-6 text-lg leading-relaxed">
                <FadeInSection>
                    <p>
                        Kalau dulu kita harus datang ke museum atau berburu buku sejarah hanya untuk mengenal budaya Indonesia, sekarang caranya sudah berubah. <span className="text-white font-semibold">OTT Warisan</span> hadir sebagai platform streaming yang mengajak kita mengenal tanah kelahiran sendiri lewat cara yang lebih dekat, modern, dan relevan dengan generasi digital.
                    </p>
                </FadeInSection>
                
                {/* Illustration: Modern Digital Consumption */}
                <FadeInSection delay={100}>
                    <div className="my-8 relative group rounded-xl overflow-hidden shadow-lg shadow-yellow-900/10">
                        <img 
                            src="https://picsum.photos/seed/digital-watching/800/400" 
                            alt="Menonton di gadget" 
                            className="w-full object-cover h-64 md:h-80 transition-transform duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-100"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                            Akses budaya di mana saja, kapan saja.
                        </div>
                    </div>
                </FadeInSection>
                
                <FadeInSection delay={100}>
                    <p>
                        Di Warisan, kamu bisa menikmati kisah-kisah budaya Nusantara lewat film dokumenter, foto cerita, arsip sejarah, seni tradisi, hingga profil tokoh daerah—semua dikemas visual menarik seperti yang ditampilkan pada mockup resminya.
                    </p>
                </FadeInSection>
                
                <FadeInSection delay={200}>
                    <div className="bg-gray-900/50 rounded-xl p-6 my-8 shadow-lg shadow-yellow-900/5 border border-gray-800 hover:border-[#D4AF37]/30 transition-colors duration-300">
                        <h3 className="text-white font-bold mb-4 text-xl">Cocok untuk kamu yang:</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-[#D4AF37] mr-3 mt-1 text-xl">➤</span>
                                <span>Ingin belajar budaya tanpa terasa “belajar”</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#D4AF37] mr-3 mt-1 text-xl">➤</span>
                                <span>Pengen nonton tontonan lokal yang punya nilai</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#D4AF37] mr-3 mt-1 text-xl">➤</span>
                                <span>Atau sekadar butuh hiburan yang bikin semakin cinta Indonesia</span>
                            </li>
                        </ul>
                    </div>
                </FadeInSection>

                <div className="py-6"><hr className="border-gray-800" /></div>

                <FadeInSection>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                        <span className="bg-[#D4AF37] w-1 h-8 mr-4 rounded-sm"></span>
                        Apa sih OTT Warisan itu?
                    </h2>
                    <p className="mb-6">
                        Bayangkan <span className="italic text-white font-semibold">Netflix</span>, tapi isinya bukan drama Korea atau film Hollywood—melainkan:
                    </p>
                </FadeInSection>

                {/* Illustration: Traditional Culture */}
                <FadeInSection delay={100}>
                    <div className="my-6 relative group rounded-xl overflow-hidden shadow-lg shadow-yellow-900/10">
                        <img 
                            src="https://picsum.photos/seed/traditional-dance/800/400" 
                            alt="Kekayaan Budaya" 
                            className="w-full object-cover h-64 md:h-80 transition-transform duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-100"
                        />
                         <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                            Seni tradisi yang memukau mata dunia.
                        </div>
                    </div>
                </FadeInSection>

                <div className="grid gap-4 md:grid-cols-2 my-6">
                    {[
                        "Dokumenter budaya Indonesia",
                        "Perjalanan tradisi dari Sabang sampai Merauke",
                        "Cerita orang-orang yang menjaga warisan bangsa",
                        "Arsip visual dan foto sejarah yang jarang kita lihat",
                        "Konten modern yang merayakan Indonesia dengan cara baru"
                    ].map((item, i) => (
                        <FadeInSection key={i} delay={i * 100}>
                            <div className="h-full bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-900/10 hover:-translate-y-1">
                                {item}
                            </div>
                        </FadeInSection>
                    ))}
                </div>
                
                <FadeInSection>
                    <p>
                        Semua bisa kamu tonton dari rumah, sekolah, kantor, atau bahkan warung kopi. Tinggal buka web atau aplikasi, dan kamu sudah masuk ke dunia baru bernama Nusantara versi digital.
                    </p>
                </FadeInSection>

                <div className="py-6"><hr className="border-gray-800" /></div>

                <FadeInSection>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center">
                        <span className="bg-[#D4AF37] w-1 h-8 mr-4 rounded-sm"></span>
                        Kenapa OTT Warisan Berbeda?
                    </h2>
                </FadeInSection>

                <div className="space-y-8">
                    <FadeInSection delay={100}>
                        <div className="flex flex-col md:flex-row gap-6 group">
                            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#D4AF37] text-black flex items-center justify-center text-2xl font-bold shadow-lg shadow-[#D4AF37]/20 group-hover:scale-110 transition-transform duration-300">1</div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">Dekat dengan budaya, tapi tetap relevan</h3>
                                <p className="text-gray-400">Konten Warisan tidak “menggurui”. Ia bercerita—seperti teman yang mengajak ngobrol santai soal kampung halaman.</p>
                            </div>
                        </div>
                    </FadeInSection>

                    <FadeInSection delay={200}>
                        <div className="flex flex-col md:flex-row gap-6 group">
                            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#D4AF37] text-black flex items-center justify-center text-2xl font-bold shadow-lg shadow-[#D4AF37]/20 group-hover:scale-110 transition-transform duration-300">2</div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">Visualnya modern dan estetik</h3>
                                <p className="text-gray-400">Kalau kamu lihat tampilannya, kamu akan sadar: Budaya Indonesia bisa tampil selera tinggi, sinematik, dan Instagrammable.</p>
                            </div>
                        </div>
                    </FadeInSection>

                    <FadeInSection delay={300}>
                        <div className="flex flex-col md:flex-row gap-6 group">
                            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#D4AF37] text-black flex items-center justify-center text-2xl font-bold shadow-lg shadow-[#D4AF37]/20 group-hover:scale-110 transition-transform duration-300">3</div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">Bukan sekadar hiburan</h3>
                                <p className="text-gray-400">Menonton Warisan itu seperti liburan singkat: kamu belajar, kamu jalan-jalan, kamu mengenal negaramu sendiri—tanpa terasa berat.</p>
                            </div>
                        </div>
                    </FadeInSection>
                </div>

                <div className="py-6"><hr className="border-gray-800" /></div>

                <FadeInSection>
                    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8 md:p-10 rounded-2xl border border-gray-800 relative overflow-hidden shadow-2xl hover:shadow-[#D4AF37]/10 transition-all duration-500 group">
                        
                        {/* Background Image for this card */}
                        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700 z-0">
                             <img 
                                src="https://picsum.photos/seed/youth-genz/800/600" 
                                alt="Generasi Muda" 
                                className="w-full h-full object-cover grayscale" 
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-0"></div>

                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">
                                Dibangun untuk Semua Generasi
                            </h2>
                            <p className="mb-8 text-lg text-white">
                                Warisan cocok untuk penonton usia 13 sampai 40 tahun, mulai dari pelajar, mahasiswa, pekerja hingga orang-orang yang ingin terus terhubung dengan identitasnya.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-center">
                                <div className="bg-black/60 backdrop-blur-md p-4 rounded-lg border border-gray-700 text-sm font-medium text-white group-hover:border-[#D4AF37]/50 transition-colors">Kontennya tidak berjarak</div>
                                <div className="bg-black/60 backdrop-blur-md p-4 rounded-lg border border-gray-700 text-sm font-medium text-white group-hover:border-[#D4AF37]/50 transition-colors">Bahasanya ringan</div>
                                <div className="bg-black/60 backdrop-blur-md p-4 rounded-lg border border-gray-700 text-sm font-medium text-white group-hover:border-[#D4AF37]/50 transition-colors">Cerita dekat realita</div>
                            </div>
                            <p className="mb-10 italic text-gray-300 border-l-2 border-gray-500 pl-4">
                                Bahkan untuk yang tadinya tidak terlalu “ke museum banget”, Warisan bisa jadi pintu awal yang bikin kamu mulai peduli dan bangga sama Indonesia.
                            </p>
                            
                            <div className="text-center pt-8 border-t border-gray-700/50">
                                <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-tight">Menonton Warisan,</h3>
                                <h3 className="text-2xl md:text-4xl font-bold text-[#D4AF37] tracking-wide">Menyelami Nusantara.</h3>
                            </div>
                        </div>
                        
                        {/* Decorative pattern background for the card */}
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#D4AF37] opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-700"></div>
                        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#D4AF37] opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-700"></div>
                    </div>
                </FadeInSection>

                {/* Social Share Section */}
                <FadeInSection delay={200}>
                    <div className="mt-12 pt-8 border-t border-gray-800 text-center">
                         <h3 className="text-white font-medium text-lg mb-4">Bagikan Artikel Ini</h3>
                         <ShareIcons />
                    </div>
                </FadeInSection>

            </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
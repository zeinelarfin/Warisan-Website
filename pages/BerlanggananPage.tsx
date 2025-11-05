import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { Page } from '../types';

interface BerlanggananPageProps {
  navigateTo: (page: Page) => void;
}

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const PricingCard: React.FC<{ plan: string; price: string; features: string[]; recommended?: boolean }> = ({ plan, price, features, recommended = false }) => (
    <div className={`flex flex-col bg-gray-900/50 border ${recommended ? 'border-[#D4AF37]' : 'border-gray-800'} rounded-lg p-8 shadow-2xl transition-transform transform hover:scale-105 hover:border-[#D4AF37] relative`}>
        {recommended && <span className="absolute top-0 right-8 -mt-3 bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 rounded-full">PALING POPULER</span>}
        <h3 className="text-2xl font-bold text-white mb-2">{plan}</h3>
        <p className="text-4xl font-extrabold text-[#D4AF37] mb-6">{price}<span className="text-lg font-medium text-gray-400">/bulan</span></p>
        <ul className="space-y-4 text-gray-300 mb-8 flex-grow">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                    <CheckIcon />
                    <span className="ml-3">{feature}</span>
                </li>
            ))}
        </ul>
        <button className={`w-full py-3 rounded-md text-lg font-semibold transition-colors ${recommended ? 'bg-[#D4AF37] text-black hover:bg-[#b89a31]' : 'bg-gray-700 hover:bg-gray-600 text-white'}`}>
            Pilih Paket
        </button>
    </div>
);


const BerlanggananPage: React.FC<BerlanggananPageProps> = ({ navigateTo }) => {
    const plans = [
        {
            plan: 'Dasar',
            price: 'Rp 54.000',
            features: [
                'Kualitas video baik (480p)',
                'Tonton di 1 perangkat sekaligus',
                'Akses tak terbatas film dan acara TV',
                'Tonton di ponsel, tablet, komputer, atau TV'
            ]
        },
        {
            plan: 'Standar',
            price: 'Rp 89.000',
            features: [
                'Kualitas video luar biasa (1080p)',
                'Tonton di 2 perangkat sekaligus',
                'Akses tak terbatas film dan acara TV',
                'Download konten di 2 perangkat'
            ],
            recommended: true
        },
        {
            plan: 'Premium',
            price: 'Rp 125.000',
            features: [
                'Kualitas video terbaik (4K+HDR)',
                'Tonton di 4 perangkat sekaligus',
                'Akses tak terbatas film dan acara TV',
                'Download konten di 6 perangkat'
            ]
        }
    ];

  return (
    <div className="bg-black min-h-screen">
      <Header navigateTo={navigateTo} />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Pilih Paket Terbaik Anda</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
                Bergabunglah dengan WARISAN dan nikmati akses tanpa batas ke ribuan jam konten budaya Nusantara. Batalkan kapan saja.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map(p => <PricingCard key={p.plan} {...p} />)}
            </div>
        </div>
      </main>
      <div className="pt-12">
        <Footer />
      </div>
    </div>
  );
};

export default BerlanggananPage;
import React from 'react';
import type { Page } from '../types';
import Logo from '../components/Logo';

interface LoginPageProps {
  navigateTo: (page: Page) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ navigateTo }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-4">
       <div className="absolute top-8 left-8">
         <button onClick={() => navigateTo('home')} className="text-gray-300 hover:text-white transition-colors">&larr; Kembali</button>
       </div>
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Logo onClick={() => navigateTo('home')} className="justify-center" />
        </div>
        <div className="bg-black/50 border border-gray-800 rounded-lg shadow-2xl shadow-yellow-500/5 p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Masuk</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-400 text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                id="email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                placeholder="email@anda.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password"  className="block text-gray-400 text-sm font-medium mb-2">Password</label>
              <input 
                type="password"
                id="password"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                placeholder="••••••••"
              />
            </div>
            <button 
              type="submit"
              onClick={(e) => {e.preventDefault(); navigateTo('home')}}
              className="w-full bg-[#D4AF37] text-black py-3 rounded-md text-lg font-semibold hover:bg-[#b89a31] transition-colors"
            >
              Masuk
            </button>
          </form>
          <p className="text-center text-gray-400 text-sm mt-6">
            Belum punya akun? <a href="#" className="text-[#D4AF37] hover:underline font-semibold">Daftar sekarang.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
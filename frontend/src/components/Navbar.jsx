import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/90 border-b border-slate-800/80 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img 
            src="/OneLogoWhite.png" 
            alt="ONE Innovation Hub Logo" 
            className="h-10 w-auto object-contain"
          />
        </div>
        
        {/* Navigation Links */}
        <div className="flex items-center space-x-6 font-medium text-sm text-slate-300">
          <a href="#about" className="hover:text-amber-400 transition-colors">Benefits</a>
          <a href="#courses" className="hover:text-amber-400 transition-colors">Programs</a>
          <a href="#news" className="hover:text-amber-400 transition-colors">Newsfeed</a>
          <a href="https://bit.ly/3vjTN6v" target="_blank" rel="noreferrer" className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-xl transition-all shadow-md shadow-amber-500/10 hover:scale-[1.02]">
            Register Now
          </a>
        </div>
      </div>
    </nav>
  );
}
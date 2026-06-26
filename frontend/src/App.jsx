import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import NewsFeed from './components/NewsFeed';

export default function App() {
  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen font-sans antialiased selection:bg-amber-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Courses />
        <NewsFeed />
      </main>
      
      <footer className="bg-slate-900 text-slate-400 py-8 px-6 text-center border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <p className="font-medium text-white mb-2">Behind Police Mobile Force Barrack, Along Ojoku Road, Offa, Kwara State</p>
          <p className="text-sm">www.oneinnovationhub.com | 08138322071 | 08106528876</p>
          <p className="text-xs mt-4 text-slate-600">© 2026 ONE Innovation Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
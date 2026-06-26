import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 px-6 bg-gradient-to-b from-amber-50/50 to-white">
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-12 lg:gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            ✨ Conducive Co-working Space in Offa
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-none">
            Work & Learn <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
              Just For You.
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
            Work from our space to be more productive at a very low price. Access elite professional training programs tailored for global impact.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <span className="text-2xl font-black text-slate-900 bg-slate-100 border border-slate-200 px-4 py-2 rounded-2xl">
              ₦25,000 <span className="text-xs text-slate-500 font-normal">/ program</span>
            </span>
            <a href="https://bit.ly/3vjTN6v" target="_blank" rel="noreferrer" className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-2xl transition-all shadow-xl shadow-slate-900/10 flex items-center justify-center">
              Secure Your Seat
            </a>
          </div>
        </div>
        
        {/* Image Showcase Box */}
        <div className="mt-12 lg:mt-0 lg:col-span-5 relative">
          <div className="aspect-video lg:aspect-square bg-slate-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="/One-Hand-1536x1396.jpg" 
              alt="ONE Innovation Hub Showcase" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
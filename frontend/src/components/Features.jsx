import React from 'react';

const benefits = [
  { title: "Fast Internet Connection", desc: "High-speed fiber connectivity for flawless remote workflows." },
  { title: "Conducive Environment", desc: "Fully air-conditioned, structured setup optimized for absolute focus." },
  { title: "Job Opportunities", desc: "Direct pipelines and pathways to placement and active tech networks." },
  { title: "Access To Professional Network", desc: "Collaborate and connect with industry veterans and expert mentors." },
  { title: "Uninterrupted Power Supply", desc: "Steady backup electrical generation systems ensuring zero downtime." }
];

export default function Features() {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">What You Stand To Gain</h2>
        <p className="mt-4 text-slate-600">Premium workspace infrastructure built to scale up your professional workflow and learning capabilities.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {benefits.map((b, i) => (
          <div key={i} className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-amber-500/30 transition-all group">
            <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 font-bold text-sm mb-4 group-hover:bg-amber-500 group-hover:text-white transition-all">
              ✓
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">{b.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
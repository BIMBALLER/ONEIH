import React, { useState, useEffect } from 'react';

export default function Courses() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/courses')
      .then(res => res.json())
      .then(data => setTracks(data))
      .catch(err => console.error("Error fetching courses:", err));
  }, []);

  return (
    <section id="courses" className="py-20 px-6 bg-slate-900 text-white rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Learn @ ONE Innovation Hub</h2>
          <p className="text-slate-400 mt-4">Industry-validated vocational courses engineered to scale skills from beginner blocks to enterprise levels.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track) => (
            <div key={track.id} className="bg-slate-800/50 border border-slate-800 p-8 rounded-3xl hover:border-amber-500/40 transition-colors">
              <h3 className="text-xl font-bold text-amber-400 mb-4">{track.title}</h3>
              <ul className="space-y-2.5">
                {track.courses.map((item, idx) => (
                  <li key={idx} className="text-slate-300 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
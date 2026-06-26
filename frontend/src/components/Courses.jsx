import React, { useState, useEffect } from 'react';

export default function Courses() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Force the production URL as first option, fallback to local if completely empty
    const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    console.log("Courses component is fetching data from:", apiBase);
    
    fetch(`${apiBase}/api/courses`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to load courses from API');
        return res.json();
      })
      .then(data => {
        setTracks(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching courses:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section id="courses" className="py-20 px-6 bg-slate-900 text-white rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Learn @ ONE Innovation Hub</h2>
          <p className="text-slate-400 mt-4">Industry-validated vocational courses engineered to scale skills from beginner blocks to enterprise levels.</p>
        </div>
        
        {loading && (
          <div className="grid md:grid-cols-3 gap-8 animate-pulse">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-60 bg-slate-800 rounded-3xl"></div>
            ))}
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-sm">
            Backend data connection resting. Verify your api server is awake. (URL: {import.meta.env.VITE_API_URL || 'http://localhost:5000'})
          </div>
        )}
        
        {!loading && !error && tracks && tracks.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((track) => (
              <div key={track.id} className="bg-slate-800/50 border border-slate-800 p-8 rounded-3xl hover:border-amber-500/40 transition-colors">
                <h3 className="text-xl font-bold text-amber-400 mb-4">{track.title}</h3>
                <ul className="space-y-2.5">
                  {track.courses && track.courses.map((item, idx) => (
                    <li key={idx} className="text-slate-300 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
import React, { useState, useEffect } from 'react';

export default function Newsfeed() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    console.log("Newsfeed component is fetching data from:", apiBase);

    fetch(`${apiBase}/api/news`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch news data');
        return res.json();
      })
      .then(data => {
        setNews(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("News fetch error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section id="news" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Latest from ONE Hub</h2>
          <p className="text-slate-500 mt-2">Stay updated with our latest announcements, hub events, and ecosystem stories.</p>
        </div>

        {loading && (
          <div className="grid md:grid-cols-3 gap-8 animate-pulse">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-80 bg-slate-100 rounded-3xl"></div>
            ))}
          </div>
        )}

        {error && (
          <div className="bg-amber-500/5 border border-amber-500/20 text-amber-800 p-4 rounded-xl text-sm">
            Backend data connection resting. Verify your api server is awake. (URL: {import.meta.env.VITE_API_URL || 'http://localhost:5000'})
          </div>
        )}

        {!loading && !error && news && news.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <div key={item.id} className="group border border-slate-100 rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-slate-100 transition-all duration-300">
                <div className="aspect-video bg-slate-100 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item.date}
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 line-clamp-2 group-hover:text-amber-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
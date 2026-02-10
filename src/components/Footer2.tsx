'use client';
import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZoneName: 'short'
      };
      setCurrentTime(now.toLocaleString('en-US', options).replace('at', ''));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const footerLinks = [
    {
      title: "sitemap",
      items: ["#proyectos", "#stack", "#contacto"]
    },
    {
      title: "Mapa del site",
      items: ["#inicio", "#stack", "Términos del Servicio"]
    },
    {
      title: "Conecta",
      items: ["LinkedIn", "Twitter", "/Email"]
    },
    {
      title: "Legal",
      items: ["LinkedIn", "Nam nec", "/terms"]
    }
  ];

  return (
    <footer className="relative w-full bg-[#1a1a1a] text-white pt-20 overflow-hidden font-sans">
      
      {/* City Skyline Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <img 
          src="/ciudadblack.png" // Asegúrate de tener una imagen de silueta aquí
          alt="Skyline" 
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-4">
            <h2 className="text-4xl font-bold tracking-tighter mb-1">33</h2>
            <h1 className="text-3xl font-bold tracking-tight mb-1">@mikmawi</h1>
            <p className="text-gray-400 text-sm font-medium mb-8">Arquitecto Digital</p>
            
            <div className="mt-10">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-none">Current time:</p>
              <p className="text-[11px] text-gray-400 font-mono mt-1">
                {currentTime}
              </p>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerLinks.map((column, idx) => (
              <div key={idx}>
                <h3 className="text-sm font-bold mb-6 tracking-tight">{column.title}</h3>
                <ul className="space-y-3">
                  {column.items.map((item, i) => (
                    <li key={i} className="flex items-center group">
                      {item.startsWith('#') || item.includes('/') ? (
                        <span className="text-yellow-500 text-[10px] mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      ) : null}
                      <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 tracking-wider">
          <div className="flex items-center gap-2">
            <span>© Jorge Rivas. /2022 Todos los derechos reservados.</span>
          </div>
          
          <div className="mt-4 md:mt-0 italic font-black text-2xl text-gray-700 opacity-50 tracking-tighter">
            JR.ARCH
          </div>
        </div>
      </div>
    </footer>
  );
}
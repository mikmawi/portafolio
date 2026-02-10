'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative bg-[#0a0a0a] pt-24 pb-12 overflow-hidden border-t border-white/5">
      
      {/* TEXTURA DE FONDO: Cuadrícula técnica para que no se vea "vacío" */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      {/* SILUETA DE CIUDAD: Integrada como un degradado sutil al fondo */}
      <div className="absolute bottom-0 left-0 w-full h-64 opacity-20 pointer-events-none">
        <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full h-auto">
          <path d="M0 320V280H40V300H80V250H120V280H160V180H200V280H240V220H280V280H320V100H360V280H400V240H440V280H480V150H520V280H560V200H600V280H640V50H680V280H720V230H760V280H800V120H840V280H880V210H920V280H960V170H1000V280H1040V240H1080V280H1120V80H1160V280H1200V210H1240V280H1280V140H1320V280H1360V260H1400V280H1440V320H0Z" fill="url(#cityGradient)"/>
          <defs>
            <linearGradient id="cityGradient" x1="720" y1="50" x2="720" y2="320" gradientUnits="userSpaceOnUse">
              <stop stopColor="#333333" />
              <stop offset="1" stopColor="black" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          
          {/* Bloque Identidad */}
          <div className="space-y-6">
            <div>
              <h2 className="text-white text-3xl font-black tracking-tighter">JORGE RIVAS</h2>
              <p className="text-purple-500 font-mono text-[10px] uppercase tracking-[0.3em] mt-2">Digital Architect</p>
            </div>
            
            <div className="pt-4">
              <p className="text-gray-600 font-mono text-[9px] uppercase tracking-widest">Time / Ecuador</p>
              <p className="text-white font-mono text-xl tabular-nums tracking-tighter">
                {time} <span className="text-[10px] text-gray-500">EST</span>
              </p>
            </div>
          </div>

          {/* Columnas de Navegación */}
          {[
            { t: "Sitemap", l: ["Inicio", "Proyectos", "Stack", "Contacto"] },
            { t: "Social", l: ["LinkedIn", "GitHub", "Twitter", "Behance"] },
            { t: "Legal", l: ["Privacidad", "Términos"] }
          ].map((col) => (
            <div key={col.t}>
              <h4 className="text-white font-bold text-sm mb-8 tracking-tight">{col.t}</h4>
              <ul className="space-y-4">
                {col.l.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-medium flex items-center group">
                      <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 text-purple-500">→</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Barra Inferior */}
        <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/5 pt-8 gap-6">
          <div className="space-y-2">
            <p className="text-gray-600 font-mono text-[9px] uppercase tracking-[0.2em]">
              © 2026 JR.ARCH — Todos los derechos reservados
            </p>
          </div>
          
          {/* El detalle de JR.ARCH que viste en la imagen */}
          <div className="text-right">
            <span className="text-5xl md:text-7xl font-black italic text-white/5 tracking-tighter hover:text-white/10 transition-colors cursor-default">
              mikmawi
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
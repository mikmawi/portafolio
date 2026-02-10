'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-32 pb-10 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Columna Marca */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-black tracking-tighter mb-2">MAURICIO RIVAS</h2>
            <p className="text-purple-500 font-mono text-[10px] uppercase tracking-[0.3em]">Digital Architect & AI Specialist</p>
            
            <div className="mt-12 space-y-1">
              <p className="text-gray-600 font-mono text-[9px] uppercase tracking-widest">Disponibilidad:</p>
              <p className="text-green-400 font-mono text-xs italic">● Disponible para nuevos proyectos</p>
            </div>
          </div>

          {/* Enlaces con Hover Pro */}
          {[
            { title: "Explorar", links: ["Proyectos", "Stack", "Sobre mí", "Contacto"] },
            { title: "Social", links: ["LinkedIn", "GitHub", "Twitter", "Instagram"] },
            { title: "Legal", links: ["Privacy Policy", "Terms of Service"] }
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-8">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <motion.a 
                      href="#" 
                      whileHover={{ x: 10, color: "#a855f7" }}
                      className="text-lg font-medium text-gray-300 transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* El "Gran Final": Tipografía Gigante en lugar de Ciudad */}
        <div className="relative mt-20 overflow-hidden select-none pointer-events-none">
          <h2 className="text-[5vw] font-black leading-none text-transparent stroke-text opacity-10 uppercase tracking-tighter">
            mikmawi
          </h2>
          <style jsx>{`
            .stroke-text {
              -webkit-text-stroke: 1px white;
            }
          `}</style>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 font-mono text-[10px] uppercase tracking-widest">
          <p>© 2026 mikmawi — Creado solo con código</p>
          <p>Quito Ecuador — Global Service</p>
        </div>
      </div>
    </footer>
  );
}
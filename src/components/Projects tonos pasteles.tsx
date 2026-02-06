'use client';
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: "EcoBin AI", type: "Computer Vision", period: "2024", color: "bg-[#4ade80]", text: "text-black", desc: "Clasificación automática de residuos sólidos." },
  { title: "SoluvIA", type: "AgroTech / AI", period: "2023", color: "bg-[#00d4ff]", text: "text-black", desc: "Control de biomasa en acuicultura." },
  { title: "OncoVision", type: "HealthTech", period: "2024", color: "bg-[#f87171]", text: "text-white", desc: "Detección de anomalías en imágenes médicas." },
  { title: "Chesco App", type: "Mobile Dev", period: "2023", color: "bg-[#fbbf24]", text: "text-black", desc: "Gestión integral de pedidos y delivery." },
  { title: "Mobility", type: "Uber Clone", period: "2022", color: "bg-[#8b5cf6]", text: "text-white", desc: "Plataforma de transporte en tiempo real." },
  { title: "BusPass", type: "Ticket System", period: "2023", color: "bg-[#ec4899]", text: "text-white", desc: "Sistema de reserva de transporte público." },
  { title: "NeuroStock", type: "Fintech AI", period: "2024", color: "bg-[#2dd4bf]", text: "text-black", desc: "Predicción de mercados con redes neuronales." },
  { title: "Sentinel IoT", type: "Smart City", period: "2024", color: "bg-[#ffffff]", text: "text-black", desc: "Vigilancia autónoma perimetral." }
];

export default function Projects() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section className="bg-black py-25 px-4 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-white text-6xl md:text-8xl font-black tracking-tighter uppercase">
          Del boceto <br />
          <span className="text-gray-500 font-light">al código</span>
        </h2>
      </div>

      <motion.div ref={carousel} className="cursor-grab active:cursor-grabbing">
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-6"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className={`min-w-[350px] md:min-w-[450px] h-[550px] ${project.color} rounded-[40px] p-10 flex flex-col justify-between shadow-2xl`}
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <div className="flex justify-between items-start">
                  <span className={`font-mono text-sm font-bold uppercase tracking-widest ${project.text} opacity-60`}>
                    {project.type}
                  </span>
                  <span className={`font-mono text-sm ${project.text} opacity-60`}>
                    {project.period}
                  </span>
                </div>
                <h3 className={`text-4xl md:text-5xl font-black mt-8 leading-none tracking-tighter ${project.text}`}>
                  {project.title}
                </h3>
              </div>

              <div>
                <p className={`text-lg font-medium mb-8 leading-tight max-w-[280px] ${project.text}`}>
                  {project.desc}
                </p>
                <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${project.text === 'text-white' ? 'border-white' : 'border-black'}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
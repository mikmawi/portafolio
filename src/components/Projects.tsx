'use client';
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  { 
    title: "EcoBin AI", 
    type: "Computer Vision", 
    period: "2024", 
    color: "bg-[#4ade80]", 
    text: "text-black", 
    desc: "Clasificación automática de residuos sólidos.",
    image: "/retrato1color.jpeg" // Reemplaza con tu ruta: /projects/ecobin.jpg
  },
  { 
    title: "SoluvIA", 
    type: "AgroTech / AI", 
    period: "2023", 
    color: "bg-[#00d4ff]", 
    text: "text-black", 
    desc: "Control de biomasa en acuicultura.",
    image: "/retrato1color.jpeg"
  },
  { 
    title: "OncoVision", 
    type: "HealthTech", 
    period: "2024", 
    color: "bg-[#f87171]", 
    text: "text-white", 
    desc: "Detección de anomalías en imágenes médicas.",
    image: "/retrato1color.jpeg"
  },
  { 
    title: "Chesco App", 
    type: "Mobile Dev", 
    period: "2023", 
    color: "bg-[#fbbf24]", 
    text: "text-black", 
    desc: "Gestión integral de pedidos y delivery.",
    image: "/retrato1color.jpeg"
  },
    { title: "Mobility", type: "Uber Clone", period: "2022", color: "bg-[#8b5cf6]", text: "text-white", desc: "Plataforma de transporte en tiempo real.",image: "/retrato1color.jpeg" },
  { title: "BusPass", type: "Ticket System", period: "2023", color: "bg-[#ec4899]", text: "text-white", desc: "Sistema de reserva de transporte público.",image: "/retrato1color.jpeg" },
  { title: "NeuroStock", type: "Fintech AI", period: "2024", color: "bg-[#2dd4bf]", text: "text-black", desc: "Predicción de mercados con redes neuronales.",image: "/retrato1color.jpeg" },
  { title: "Sentinel IoT", type: "Smart City", period: "2024", color: "bg-[#ffffff]", text: "text-black", desc: "Vigilancia autónoma perimetral.",image: "/retrato1color.jpeg"}
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
    <section className="bg-black py-25 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16 px-4 md:px-20">
        <h2 className="text-white text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
          Del boceto <br />
          <span className="text-gray-500 font-light">al código</span>
        </h2>
      </div>

      <motion.div ref={carousel} className="cursor-grab active:cursor-grabbing px-10">
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-12 items-center" // items-center para que el escalado no se vea raro
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              // Efecto de escalado al entrar al centro de la pantalla
              initial={{ scale: 0.8, opacity: 0.5 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }} // Se activa cuando el 50% de la tarjeta es visible
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`min-w-[350px] md:min-w-[450px] h-[600px] ${project.color} rounded-[40px] p-8 flex flex-col shadow-2xl relative overflow-hidden`}
            >
              {/* ÁREA DE IMAGEN: Aquí es donde colocas tu imagen */}
              <div className="w-full h-64 bg-black/10 rounded-[30px] overflow-hidden mb-8 border border-black/5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover mix-blend-multiply hover:mix-blend-normal transition-all duration-500"
                />
              </div>

              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className={`font-mono text-[10px] font-bold uppercase tracking-[0.2em] ${project.text} opacity-60`}>
                    {project.type}
                  </span>
                  <span className={`font-mono text-xs ${project.text} opacity-60`}>
                    {project.period}
                  </span>
                </div>
                
                <h3 className={`text-4xl md:text-5xl font-black mb-4 leading-none tracking-tighter ${project.text}`}>
                  {project.title}
                </h3>
                
                <p className={`text-lg font-medium leading-tight mt-2 ${project.text} opacity-90`}>
                  {project.desc}
                </p>

                <div className="mt-auto flex justify-end">
                  <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center ${project.text === 'text-white' ? 'border-white' : 'border-black'}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
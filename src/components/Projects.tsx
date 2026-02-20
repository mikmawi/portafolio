'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCreative } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const projects = [
  // ... (tus proyectos se mantienen igual)
  { 
    title: "EcoBin AI",
    type: "Visión por computadora",
    period: "2024", color: "bg-[#4ade80]",
    text: "text-black",
    desc: "Clasificación de residuos en tiempo real.",
    tech: ["Python", "Ultralytics", "OpenCV", "Flask"],
    demoUrl: "/creaciones/ecobin",
    brochureUrl: "#",
    image: "/retrato1color.jpeg"
  },
  { 
    title: "SoluvIA",
    type: "Acuiculutra 4.0 / IA",
    period: "2023",
    color: "bg-[#00d4ff]",
    text: "text-black",
    desc: "Sensores IoT para monitoreo y predicción.",
    tech: ["ESP32", "MQTT", "NestJS", "Python"],
    demoUrl: "#",
    brochureUrl: "#",
    image: "/retrato1color.jpeg"
  },
  {
    title: "OncoVision",
    type: "Salud / IA",
    period: "2024",
    color: "bg-[#f87171]",
    text: "text-white",
    desc: "Detección médica asistido por IA.",
    tech: ["Python", "TensorFlow", "FastAPI"],
    demoUrl: "#",
    brochureUrl: "#",
    image: "/retrato1color.jpeg"
  },
  {
    title: "Chesco App",
    type: "Desarrollo móvil",
    period: "2023",
    color: "bg-[#fbbf24]",
    text: "text-black",
    desc: "App de delivery con gestión en tiempo real.",
    tech: ["Flutter", "NestJS", "Firebase"],
    demoUrl: "#",
    brochureUrl: "#",
    image: "/retrato1color.jpeg"
  },
  {
    title: "Mobility",
    type: "Desarrollo móvil",
    period: "2022",
    color: "bg-[#8b5cf6]",
    text: "text-white",
    desc: "App de movilidad con geolocalización.",
    tech: ["Flutter", "Node.js", "Socket.io", "PostgreSQL"],
    demoUrl: "#",
    brochureUrl: "#",
    image: "/retrato1color.jpeg"
  },
  {
    title: "BusPass",
    type: "Sistema de tickets",
    period: "2023",
    color: "bg-[#ec4899]",
    text: "text-white",
    desc: "App para compra de boletos de bus.",
    tech: ["Flutter", "NestJS", "PostgreSQL", "Socket.io"],
    demoUrl: "#",
    brochureUrl: "#",
    image: "/retrato1color.jpeg"
  },
  {
    title: "NeuroStock",
    type: "Fintech AI",
    period: "2024",
    color: "bg-[#2dd4bf]",
    text: "text-black",
    desc: "Predicción de mercados financieros.",
    tech: ["Python", "TensorFlow", "Pandas", "FastAPI"],
    demoUrl: "#",
    brochureUrl: "#",
    image: "/retrato1color.jpeg"
  },
  {
    title: "Sentinel IoT",
    type: "Smart City",
    period: "2024",
    color: "bg-[#ffffff]",
    text: "text-black",
    desc: "Sistema autónomo de monitoreo inteligente.",
    tech: ["ESP32", "MQTT", "Node.js", "Redis"],
    demoUrl: "#",
    brochureUrl: "#",
    image: "/retrato1color.jpeg"
  }
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
    <section className="bg-black py-16 md:py-24 overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl w-full mb-12 md:mb-16 px-6 md:px-20">
        <h2 className="text-white text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">
          Del boceto &nbsp;
          <span className="text-gray-500 font-light text-4xl md:text-7xl">al código</span>
        </h2>
      </div>

      <div className="relative w-full flex flex-col items-center">
        <Swiper
          modules={[Autoplay, Pagination, EffectCreative]}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          speed={800}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="w-full !overflow-visible"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="!flex items-center justify-center !w-auto px-4">
              {({ isActive }) => (
                <motion.div
                  initial={false}
                  animate={{
                    scale: isActive ? 1 : 0.85,
                    opacity: isActive ? 1 : 0.4,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  // CAMBIO CLAVE: Quitamos h-[600px] y usamos h-auto para que sea armónico
                  className={`w-[85vw] md:w-[480px] h-auto ${project.color} rounded-[40px] p-7 md:p-9 flex flex-col shadow-2xl relative`}
                >
                  {/* Imagen con altura controlada para evitar que empuje */}
                  <div className="w-full h-48 md:h-64 bg-black/10 rounded-[30px] overflow-hidden mb-6 md:mb-8 border border-black/5 shrink-0">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover mix-blend-multiply hover:mix-blend-normal transition-all duration-500"
                    />
                  </div>

                  <div className="flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <span className={`font-mono text-[10px] font-bold uppercase tracking-[0.2em] ${project.text} opacity-60`}>
                        {project.type}
                      </span>
                      <span className={`font-mono text-xs ${project.text} opacity-60`}>
                        {project.period}
                      </span>
                    </div>

                    <h3 className={`text-4xl md:text-5xl font-black mb-3 leading-none tracking-tighter ${project.text}`}>
                      {project.title}
                    </h3>

                    <p className={`text-sm md:text-base leading-snug ${project.text} opacity-80 mb-6`}>
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech, i) => (
                        <span key={i} className={`text-[10px] md:text-xs px-3 py-1 rounded-full border ${project.text} border-current opacity-70`}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Botones pegados al contenido para mantener la armonía */}
                    <div className={`flex gap-3 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                      <Link
                        href={project.demoUrl}
                        className={`flex-1 md:flex-none text-center px-5 py-3 rounded-xl text-xs md:text-sm font-bold ${project.text} bg-black/10 hover:bg-black/20 transition-all border border-black/5`}
                      >
                        Ver proyecto
                      </Link>
                      <a
                        href={project.brochureUrl}
                        className={`flex-1 md:flex-none text-center px-5 py-3 rounded-xl text-xs md:text-sm font-bold border ${project.text} border-current hover:bg-black/5 transition-all`}
                      >
                        Ficha técnica
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Puntos de paginación */}
        <div className="flex items-center gap-3 mt-10 z-10 relative">
          {projects.map((_, i) => (
            <motion.div
              key={i}
              onClick={() => swiperInstance?.slideToLoop(i)}
              animate={{
                width: i === activeIndex ? 35 : 10,
                backgroundColor: i === activeIndex ? "#8b5cf6" : "#333",
              }}
              className="h-[10px] rounded-full cursor-pointer transition-colors duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
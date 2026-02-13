'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Importar Swiper y sus módulos
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCreative } from 'swiper/modules';

// Estilos de Swiper
import 'swiper/css';
import 'swiper/css/pagination';

const projects = [
  { title: "EcoBin AI",
    type: "Visión por computadora",
    period: "2024", color: "bg-[#4ade80]",
    text: "text-black",
    desc: "Clasificación de residuos en tiempo real.",
    tech: ["Python", "Ultralytics", "OpenCV", "Flask"],
    demoUrl: "/creaciones/ecobin",
    brochureUrl: "#",
    image: "/retrato1color.jpeg"
  },

  { title: "SoluvIA",
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
    tech: ["Flutter", "Node.js", "Socket.io"],
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
    tech: ["Flutter", "NestJS", "PostgreSQL"],
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

  return (
    <section className="bg-black py-20 overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl w-full mb-16 px-4 md:px-20">
        <h2 className="text-white text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
          Del boceto &nbsp;
          <span className="text-gray-500 font-light text-5xl md:text-7xl">al código</span>
        </h2>
      </div>

      <div className="relative w-full flex flex-col items-center">
        {/* Swiper como contenedor principal de gestos */}
        <Swiper
          modules={[Autoplay, Pagination, EffectCreative]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          speed={800}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="w-full h-[650px] !overflow-visible" // !overflow-visible para ver las tarjetas laterales
        >
          {projects.map((project, index) => (
            <SwiperSlide 
              key={index} 
              className="!flex items-center justify-center !w-auto" // Permite que el ancho lo maneje tu div
            >
              {({ isActive }) => {
                // Usamos el estado interno de Swiper para las animaciones
                return (
                  <motion.div
                    initial={false}
                    animate={{
                      scale: isActive ? 1 : 0.8,
                      opacity: isActive ? 1 : 0.4,
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 25 }}
                    className={`min-w-[320px] md:min-w-[450px] h-[600px] ${project.color} rounded-[40px] p-8 flex flex-col shadow-2xl overflow-hidden`}
                  >
                    {/* Contenido de la tarjeta (Tus mismos estilos) */}
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
                      <p className={`text-sm md:text-base leading-relaxed line-clamp-2 ${project.text} opacity-80`}>
                        {project.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-6">
                        {project.tech.map((tech, i) => (
                          <span key={i} className={`text-xs px-3 py-1 rounded-full border ${project.text} border-current opacity-70`}>
                            {tech}
                          </span>
                        ))}
                      </div>

                      {isActive && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex gap-4 mt-8"
                        >
                          <Link
                            href={project.demoUrl}
                            className={`px-4 py-2 rounded-lg text-sm font-semibold ${project.text} bg-black/20 hover:bg-black/40 transition inline-block`}
                          >
                            Ver proyecto
                          </Link>
                          <a
                            href={project.brochureUrl}
                            className={`px-4 py-2 rounded-lg text-sm font-semibold border ${project.text} border-current hover:bg-black/10 transition`}
                          >
                            Brochure técnico
                          </a>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              }}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Paginación Personalizada (Sincronizada con Swiper) */}
        <div className="flex items-center gap-3 mt-12">
          {projects.map((_, i) => (
            <motion.div
              key={i}
              animate={{
                width: i === activeIndex ? 40 : 10,
                backgroundColor: i === activeIndex ? "#8b5cf6" : "#333",
              }}
              className="h-[10px] rounded-full cursor-pointer"
              // Nota: Para que estos puntos también controlen el Swiper, 
              // necesitarías usar el hook useSwiper() en un componente hijo.
            />
          ))}
        </div>
      </div>
    </section>
  );
}
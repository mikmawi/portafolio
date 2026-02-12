'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { motion, } from 'framer-motion';

const projects = [
  {
    title: "EcoBin AI",
    type: "Visión por computadora",
    period: "2024",
    color: "bg-[#4ade80]",
    text: "text-black",
    desc: "Clasificación inteligente de residuos mediante visión artificial en tiempo real.",
    tech: ["Python", "TensorFlow", "OpenCV", "FastAPI", "Docker"],
    demoUrl: "#",
    brochureUrl: "#",
    image: "/retrato1color.jpeg"
  },
  {
    title: "SoluvIA",
    type: "Acuicultura 4.0 / IA",
    period: "2023",
    color: "bg-[#00d4ff]",
    text: "text-black",
    desc: "Plataforma IoT para monitoreo y predicción de biomasa en acuicultura.",
    tech: ["ESP32", "MQTT", "NestJS", "TimescaleDB", "Python"],
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
    desc: "Sistema de detección médica asistido por inteligencia artificial.",
    tech: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Docker"],
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
    desc: "Aplicación de delivery con arquitectura backend escalable y gestión en tiempo real.",
    tech: ["Flutter", "NestJS", "PostgreSQL", "Firebase"],
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
    desc: "Plataforma de movilidad urbana con matching y geolocalización en tiempo real.",
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
    desc: "Plataforma digital para compra y validación de boletos de transporte.",
    tech: ["Flutter", "NestJS", "PostgreSQL", "Stripe API"],
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
    desc: "Motor predictivo para análisis y proyección de mercados financieros.",
    tech: ["Python", "TensorFlow", "Pandas", "FastAPI", "Docker"],
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
    desc: "Sistema autónomo de monitoreo y vigilancia inteligente.",
    tech: ["ESP32", "MQTT", "Node.js", "Redis", "Docker"],
    demoUrl: "#",
    brochureUrl: "#",
    image: "/retrato1color.jpeg"
  }
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="bg-black py-20 overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl w-full mb-16 px-4 md:px-20">
        <h2 className="text-white text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
          Del boceto&nbsp;
          <span className="text-gray-500 font-light text-5xl md:text-7xl">al código</span>
        </h2>
      </div>

      <div className="relative w-full flex flex-col items-center">
        <div className="flex items-center justify-center w-full min-h-[700px]">
          {projects.map((project, index) => {
            const isCenter = index === activeIndex;

            return (
              <motion.div
                key={index}
                animate={{
                  scale: isCenter ? 1 : 0.8,
                  x: (index - activeIndex) * 480,
                  opacity: isCenter ? 1 : 0.4,
                  zIndex: isCenter ? 20 : 10,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
                className={`absolute min-w-[350px] md:min-w-[450px] min-h-[650px] ${project.color} rounded-[40px] p-8 flex flex-col shadow-2xl`}
              >
                <div className="w-full h-64 bg-black/10 rounded-[30px] overflow-hidden mb-8">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
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

                  <h3 className={`text-4xl font-black mb-4 ${project.text}`}>
                    {project.title}
                  </h3>

                  <p className={`text-lg ${project.text} opacity-90`}>
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`text-xs px-3 py-1 rounded-full border ${project.text} border-current opacity-70`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {isCenter && (
                    <div className="flex gap-4 mt-8">
                      <a
                        href={project.demoUrl}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold ${project.text} bg-black/20 hover:bg-black/40 transition`}
                      >
                        Ver proyecto
                      </a>

                      <a
                        href={project.brochureUrl}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold border ${project.text} border-current hover:bg-black/10 transition`}
                      >
                        Brochure técnico
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

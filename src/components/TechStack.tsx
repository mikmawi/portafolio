'use client';
import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
  { name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
  { name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
  { name: "Google Cloud", logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" },
  { name: "NestJS", logo: "https://cdn.worldvectorlogo.com/logos/nestjs.svg" },
  { name: "PostgreSQL", logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
  { name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
  { name: "Flutter", logo: "https://cdn.worldvectorlogo.com/logos/flutter.svg" },
  { name: "TypeScript", logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
  { name: "Docker", logo: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
];

export default function TechStack() {
  return (
    <section className="bg-white py-32 px-4 md:px-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Cabecera al estilo de Proyectos pero en Negro sobre Blanco */}
        <div className="mb-20">
          <h2 className="text-black text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
            Stack 
            <span className="text-gray-300 font-light text-5xl md:text-7xl"> Tecnológico</span>
          </h2>
          <p className="text-gray-500 mt-8 max-w-xl font-medium text-lg leading-tight">
            Trabajo con tecnologías líderes de la industria para construir soluciones escalables, 
            desde visión artificial hasta infraestructuras cloud robustas.
          </p>
        </div>

        {/* Cuadrícula de Logos */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-0.5 bg-gray-100 border border-gray-100">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ backgroundColor: "#f9fafb" }}
              className="bg-white h-40 flex flex-col items-center justify-center p-8 group transition-all duration-300"
            >
              <motion.img
                src={tech.logo}
                alt={tech.name}
                className="h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:scale-110"
              />
              <span className="mt-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Footer de la sección - Opcional */}
        <div className="mt-20 flex flex-wrap gap-4">
          {["Backend", "Frontend", "Cloud", "AI", "Mobile"].map((tag) => (
            <span key={tag} className="px-6 py-2 rounded-full border border-gray-200 text-sm font-mono text-gray-600 hover:bg-black hover:text-white transition-colors cursor-default">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
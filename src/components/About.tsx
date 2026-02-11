'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado

export default function About() {
  return (
    <section className="bg-white py-24 px-6 md:px-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Lado Izquierdo: Imagen con bordes redondeados */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="overflow-hidden rounded-[60px] md:rounded-[80px] aspect-[4/5] lg:aspect-auto lg:h-[700px]">
            <img 
              src="/retrato2bn.jpeg" // Cambia por tu imagen (retrato1color.jpeg)
              alt="Jorge Rivas" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Lado Derecho: Contenido */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          {/* Tag de sección */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-gray-900 font-medium text-sm tracking-tight">About</span>
            <div className="h-[1px] w-12 bg-gray-900"></div>
          </div>

{/* Título Principal */}
<h2 className="text-black text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] mb-12">
  Cambia el código <br />
  <span className="text-gray-400">permanece la esencia</span>
</h2>

{/* Biografía */}
<div className="space-y-6 text-gray-500 max-w-xl">
  <p className="text-[16px] font-light leading-[1.8] tracking-tight text-justify md:text-left">
    Hace poco, mi camino comenzó con una decisión difícil: alejarme de lo que amaba para buscar mi propósito. Mi viaje me llevó desde mi natal <span className="text-black">Machala</span>, pasando por las calles de <span className="text-black">New York</span>, <span className="text-black">Guayaquil </span> 
    y ahora <span className="text-black">Quito</span>, con una meta clara: construir una vida y una marca que me otorguen la independencia necesaria para volver con los míos.
  </p>

  <p className="text-[16px] font-light leading-[1.8] tracking-tight text-justify md:text-left border-l-2 border-black pl-4">
    Antes de este viaje, tenía impulso pero me faltaba dirección. En el desarrollo encontré un lenguaje para entender el mundo.
    En el software, como en la vida, la clave no es evitar el error, sino el arte de <span className="text-black">reconstruirse sobre la falla</span> sin abandonar el propósito original.
  </p>
  
  <p className="text-[16px] font-light leading-[1.8] tracking-tight text-justify md:text-left">
    Hoy mi enfoque como <span className="text-black font-semibold uppercase text-[10px] tracking-widest bg-gray-100 px-2 py-1">developer</span> combina la precisión técnica con una visión humana, creando tecnología que no solo elimine barreras, si no que genere libertad, tanto para quien la usa como para quien la crea.
  </p>

  <p className="font-semibold text-black italic text-[15px] mt-8">
    "En el código y en la vida, el error no es un fracaso, es una fuente de datos."
  </p>
</div>

          {/* Redes Sociales */}
          <div className="flex items-center gap-6 mt-12">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              className="text-2xl text-black hover:text-purple-600 transition-colors"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              className="text-2xl text-black hover:text-blue-600 transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
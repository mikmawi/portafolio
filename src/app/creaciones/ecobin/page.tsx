'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function EcoBinDetail() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array de imágenes del proyecto
  const projectImages = [
    "/ecobin2.png",      // Diagrama técnico
    "/ecobin3.png",   // Dashboard de monitoreo
    "/ecobin2.png", // Foto del prototipo real
  ];

  // Auto-play del carrusel (opcional)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [projectImages.length]);

  const specs = [
    { label: "Motor de IA", value: "YOLOv11 Segmentación" },
    { label: "Inferencia", value: "12ms (Real-time)" },
    { label: "Procesamiento", value: "OpenCV Pipeline" },
    { label: "Backend", value: "Microservicio en Flask" },
  ];

  return (
    <main className="bg-black text-white min-h-screen font-sans selection:bg-green-500 selection:text-black">
      
      {/* Hero Section - Imagen Técnica como Protagonista */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12 overflow-hidden">
        {/* Glow de fondo ambiental */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-green-500/5 blur-[140px] rounded-full" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="z-10 text-center mb-16"
        >
          <span className="text-green-500 font-mono tracking-[0.5em] uppercase text-[10px] mb-4 block">
            Technical Blueprint // 01
          </span>
          <h1 className="text-6xl md:text-[9rem] font-black tracking-tighter leading-none uppercase">
            ECOBIN <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>AI</span>
          </h1>
        </motion.div>

        {/* Carrusel de Imágenes Premium */}
        <div className="relative w-full max-w-6xl aspect-[16/9] group">
          <div className="relative h-full w-full rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1.1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="relative h-full w-full"
              >
                <Image 
                  src={projectImages[currentIndex]} 
                  alt={`EcoBin Gallery ${currentIndex + 1}`}
                  fill
                  className="object-contain p-4 md:p-8"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Indicadores de posición (Dots) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {projectImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1 transition-all duration-500 ${
                    currentIndex === index ? "w-8 bg-green-500" : "w-4 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Navegación lateral sutil (Visible en hover) */}
          <button 
            onClick={() => setCurrentIndex((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border border-white/10 rounded-full bg-black/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
          >
            ←
          </button>
          <button 
            onClick={() => setCurrentIndex((prev) => (prev + 1) % projectImages.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border border-white/10 rounded-full bg-black/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
          >
            →
          </button>
        </div>
      </section>

      {/* Technical Specs Grid */}
      <section className="px-6 md:px-24 py-20 border-y border-white/5 bg-white/[0.01]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {specs.map((spec, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-green-500 mb-2 font-bold italic">{spec.label}</h4>
              <p className="text-xl font-mono text-gray-200 tracking-tighter">{spec.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Engineering Breakdown */}
      <section className="px-6 md:px-24 py-32 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="lg:sticky lg:top-32">
          <h2 className="text-5xl font-black mb-12 tracking-tighter uppercase leading-[0.9]">Arquitectura <br/> de Borde</h2>
          <div className="space-y-12">
            {[
              { title: "Computer Vision Pipeline", text: "Procesamiento de frames de alta velocidad para la identificación precisa de materiales.", accent: "border-green-500" },
              { title: "Inferencia Local (Edge)", text: "Cómputo directo en el dispositivo para garantizar una respuesta en milisegundos sin depender de la nube.", accent: "border-white/10" },
              { title: "Control System API", text: "Integración fluida entre la IA y los componentes mecánicos para la segregación física.", accent: "border-white/10" }
            ].map((item, i) => (
              <div key={i} className={`border-l-2 ${item.accent} pl-8 transition-all hover:border-green-500 group`}>
                <h3 className="text-white font-bold mb-3 text-lg group-hover:text-green-500 transition-colors uppercase tracking-tight">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Code Block - Estilo Minimalista Premium */}
        {/* El bloque de código como terminal de lujo */}
        <div className="relative pt-12">
          <div className="absolute top-0 left-0 text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-4">Core_logic.py</div>
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#050505] rounded-lg p-8 border border-white/10 font-mono text-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] mb-8"
          >
            <div className="flex gap-1.5 mb-8">
              <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
              <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            </div>
            <pre className="leading-relaxed">
              <code className="text-gray-400">
                <span className="text-green-500">import</span> cv2<br/>
                <span className="text-green-500">from</span> ultralytics <span className="text-green-500">import</span> YOLO<br/><br/>
                model = YOLO(<span className="text-yellow-700">'/v11_seg.pt'</span>)<br/><br/>
                <span className="text-green-700"># Core process execution</span><br/>
                <span className="text-green-500">def</span> <span className="text-blue-400">run_seg</span>(stream):<br/>
                &nbsp;&nbsp;res = model.predict(stream, conf=<span className="text-orange-400">0.85</span>)<br/>
                &nbsp;&nbsp;<span className="text-green-500">if</span> res.detected:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;trigger_mechanical_sort(res)
              </code>
            </pre>
          </motion.div>

          {/* Botones de Acción Post-Código */}
          <div className="flex flex-wrap gap-4">
            <Link 
              href="https://github.com/mikmawi/ecobin" 
              target="_blank"
              className="flex-1 flex items-center justify-center gap-3 px-6 py-4 border border-white/10 bg-white/[0.02] hover:bg-white hover:text-black transition-all duration-500 rounded-sm group"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Código fuente</span>
              <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </Link>

            <Link 
              href="/brochure-ecobin.pdf" 
              className="flex-1 flex items-center justify-center gap-3 px-6 py-4 border border-green-500/20 bg-green-500/5 hover:bg-green-500 transition-all duration-500 rounded-sm group"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Brochure</span>
              <svg className="w-4 h-4 text-green-500 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="px-6 md:px-24 py-40 bg-gradient-to-t from-green-500/[0.02] to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-6xl font-black mb-10 tracking-tighter uppercase">¿Siguiente desafío?</h2>
          <Link 
            href="/#contact" 
            className="group relative inline-flex items-center gap-8 px-14 py-7 bg-white text-black font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-green-500 hover:text-white transition-all duration-500 shadow-xl"
          >
            escríbeme
            <span className="text-xl transition-transform group-hover:translate-x-3">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}










'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function EcoBinDetail() {
  const specs = [
    { label: "Motor de IA", value: "YOLOv11 Segmentation" },
    { label: "Inferencia", value: "12ms (Real-time)" },
    { label: "Procesamiento", value: "OpenCV Pipeline" },
    { label: "Backend", value: "Flask Microservice" },
  ];

  return (
    <main className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black">
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex flex-col justify-end px-6 md:px-24 pb-12 overflow-hidden">
        {/* Background Accent - Un sutil resplandor técnico */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <span className="text-blue-500 font-mono tracking-[0.3em] uppercase text-xs mb-4 block">
            Proyecto 01 // Computer Vision
          </span>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none mb-6">
            ECOBIN <span className="text-outline">AI</span>
          </h1>
          <p className="max-w-xl text-gray-400 text-lg md:text-xl leading-relaxed">
            Sistema inteligente de segregación de residuos automatizado. 
            Identificación de polímeros y metales mediante visión computacional 
            de alta frecuencia.
          </p>
        </motion.div>
      </section>

      {/* Technical Specs Grid */}
      <section className="px-6 md:px-24 py-20 border-y border-white/10 bg-white/[0.02]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {specs.map((spec, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2">{spec.label}</h4>
              <p className="text-xl font-mono tracking-tight">{spec.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Architecture & Logic Section */}
      <section className="px-6 md:px-24 py-32 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-8 tracking-tight">Arquitectura del Sistema</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-blue-500 pl-6">
              <h3 className="text-white font-bold mb-2 text-lg">Captura y Pre-procesamiento</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Utilizamos <strong>OpenCV</strong> para la normalización de frames y corrección de color en tiempo real, 
                optimizando el input antes de entrar a la red neuronal.
              </p>
            </div>
            <div className="border-l-2 border-white/20 pl-6">
              <h3 className="text-white font-bold mb-2 text-lg">Inferencia Local</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                El modelo <strong>Ultralytics</strong> procesa la segmentación de instancias directamente en el borde (Edge Computing), 
                reduciendo la dependencia de latencia de red.
              </p>
            </div>
            <div className="border-l-2 border-white/20 pl-6">
              <h3 className="text-white font-bold mb-2 text-lg">API de Control</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Un microservicio en <strong>Flask</strong> actúa como puente, enviando los metadatos de clasificación 
                hacia el actuador físico o dashboard de monitoreo.
              </p>
            </div>
          </div>
        </div>

        {/* Visual de "Código/Diagrama" */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-gray-900/50 rounded-2xl p-8 border border-white/10 font-mono text-sm relative overflow-hidden group"
        >
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <pre className="text-blue-300">
            <code>{`
# EcoBin AI Core Logic
import cv2
from ultralytics import YOLO

model = YOLO('ecobin_v11.pt')
cap = cv2.VideoCapture(0)

while cap.isOpened():
    res = model.predict(frame, conf=0.85)
    # Trigger classification
    if res[0].boxes:
        send_to_flask(res[0].summary())
            `}</code>
          </pre>
          <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      </section>

      {/* Call to Action Final */}
      <section className="px-6 md:px-24 py-40 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-8">¿TIENES UN RETO SIMILAR?</h2>
        <Link 
          href="/#contact" 
          className="inline-block px-12 py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all duration-500"
        >
          Consultar Arquitectura
        </Link>
      </section>
    </main>
  );
}
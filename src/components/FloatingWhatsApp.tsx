'use client'; // Importante para las animaciones
import { motion } from 'framer-motion';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/+593984107589" // Reemplaza con tu número real
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5 }} // Aparece un poco después de la carga inicial
      whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 1)", color: "#000" }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[80] p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white transition-all duration-300 shadow-2xl flex items-center justify-center"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    </motion.a>
  );
}
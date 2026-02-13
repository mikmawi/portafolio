'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Mikmawi', href: '#about' },
    { name: 'Creaciones', href: '#work' },
    { name: 'Los 7 Escritos', href: '#blog' },
    { name: 'Contacto', href: '#footer' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] px-6 md:px-12 py-8 flex justify-between items-center bg-transparent">

      {/* Navbar Superior */}
      <nav className="hidden md:flex space-x-290 text-[10px] lg:text-xs tracking-[0.2em] bg-transparent">
        
        <div className="text-xl font-bold tracking-tighter">Portafolio</div>
        <div className="hidden md:flex space-x-8 text-xs uppercase tracking-widest text-gray-300">
          <a href="#" className="hover:text-white transition">Inicio</a>
          <a href="#about" className="hover:text-white transition">mikmawi</a>
          <a href="#work" className="hover:text-white transition">Creaciones</a>
          <a href="#" className="hover:text-white transition">los 7 escritos</a>
          <a href="#footer" className="hover:text-white transition">Contacto</a>
        </div>
      </nav>

      {/* Botón Hamburguesa (2 líneas) - Derecha */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex md:hidden pointer-events-auto relative z-[10000] flex flex-col gap-2 p-2 group ml-auto"
        aria-label="Abrir menú"
      >
        {/* Línea Superior */}
        <motion.span 
          animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, x: -20 }}
          className="w-8 h-0.5 bg-white block transition-colors group-hover:bg-gray-300" 
        />
        {/* Línea Inferior */}
        <motion.span 
          animate={isOpen ? { rotate: -45, x: -5 } : { rotate: 0, x: -20 }}
          className="w-8 h-0.5 bg-white block transition-colors group-hover:bg-gray-300"
        />
      </button>

      {/* Menú Overlay (Cuando se abre) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 z-[9998]"
          >
            {menuItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="text-white text-4xl font-black tracking-tighter hover:italic hover:text-gray-400 transition-all"
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
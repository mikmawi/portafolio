'use client'; // <--- ESTA LÍNEA ES LA CLAVE
import Work from '@/components/Work';
import About from '@/components/About';
import Projects from '@/components/Projects';
import ProjectsV1 from '@/components/ProjectsV1';
import TechStack from '@/components/TechStack';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

import { Facebook, Github, Instagram, Twitter } from 'lucide-react'; // Necesitarás instalar lucide-react
import {Cpu, Globe, Zap, Code2} from 'lucide-react';

export default function Home() {

// La función para el scroll suave
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      // Calculamos un pequeño offset por si tienes un header fijo
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="min-h-screen bg-[#111111]">

      {/* Hero Section Split Layout */}
      <section className="flex flex-col md:flex-row min-h-screen">
        {/* Lado Izquierdo: Imagen */}
        <div className="w-full md:w-1/2 h-[42vh] md:h-screen relative overflow-hidden">
          <img 
            src="/retrato1color.jpeg"
            /*src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000" // Puedes usar tu propia foto aquí*/
            alt="Profile"
            className="w-full h-full object-cover object-top"
            /*className="w-full h-full object-cover grayscale brightness-75"*/
          />
        </div>

        {/* Lado Derecho: Contenido */}
        <div className="w-full md:w-1/2 bg-black text-white flex items-center">
          {/*<div className="max-w-md">
            {/* Etiqueta superior opcional para más estilo tech *
            <span className="text-[10px] tracking-[0.4em] text-gray-500 uppercase mb-4 block">
                 Especialista IA & Developer
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
              Hola, soy <br />
              <span className="text-white">mikmawi</span>
            </h1>
            <p className="mt-6 text-gray-400 text-sm leading-relaxed max-w-sm">
              Acompaño a empresas y emprendedores en la creación de soluciones tecnológicas enfocadas en eficiencia, crecimiento y resultados reales.
            </p>*/}

          <div className="px-6 py-12 md:px-16 md:py-20 max-w-xl"> {/* pointer-events-none para que el texto no interfiera con el mouse */}
            
            {/* Ceja / Label */}
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] mb-4 block ml-1"
            >
              AI Engineer & System Architect
            </motion.span>

                      {/* Título Principal */}
                      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        Hola, soy <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 ">
                          mikmawi
                        </span>
                      </h1>

                      {/* Descripción Refinada */}
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-8">
                        Construyo sistemas de<span className="text-white font-medium"> inteligencia artificial</span> y <span className="text-white font-medium"> arquitecturas backend de alto rendimiento</span>, con enfoque en Machine Learning, Big Data, Data Engineering y automatización inteligente.
                        <span className="block mt-8 text-white font-semibold tracking-tight">
  La innovación real no es el código. Es lo que resuelves con él.
</span>
                      </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-white text-black px-6 py-3 text-sm tracking-wide font-medium">
                        Empezar proyecto
                      </button>
                      <motion.button
                        onClick={scrollToWork}
                        // Animación: Wit & Style
                        whileHover={{ 
                          scale: 1.05, 
                          boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.2)" 
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        className="whitespace-nowrap px-6 md:px-8 py-3 border border-white/30 text-white font-semibold text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] hover:border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3 group"
                        >
                        Explorar más 
                        <motion.span 
                          animate={{ x: [0, 5, 0] }} 
                          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                          className="text-[10px]"
                        >
                          ▶
                        </motion.span>
                      </motion.button>
                    
                </div>

            {/* Redes Sociales */}
            <div className="mt-12 flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition"><Facebook size={18} /></a>
              <a href="#" className="hover:text-white transition"><Instagram size={18} /></a>
              <a href="#" className="hover:text-white transition"><Github size={18} /></a>
            </div>
          </div>
        </div>
      </section>

{/* Sección About*/}
      <div id= "about">
      <About />
      </div>

{/* Sección de Trabajos (el componente que ya teníamos) */}
      <div id= "work">
      <Projects />
      </div>



{/* NUEVA SECCIÓN: El bloque blanco de "¡Hola!" */}
      <TechStack />

    
{/* NUEVA SECCIÓN: EXPERTISE (Basada en tus imágenes) 
      <section id="expertise" className="py-32 px-8 md:px-24 bg-[#0a0a0a] border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Encabezado con la fuerza del "¡Hola!" de tu imagen 
          <div className="mb-20">
            <h2 className="text-[12vw] md:text-[8vw] font-black leading-none uppercase tracking-tighter opacity-10 absolute -mt-10 md:-mt-20">
              Expertise
            </h2>
            <h3 className="relative text-3xl md:text-5xl font-bold uppercase tracking-tighter pt-10">
              Soluciones <span className="text-gray-500">Escalables</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Bloque de Texto Principal (Copiado de tu imagen 2) 
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                Desarrollo <span className="text-white font-bold">productos digitales escalables y confiables</span> utilizando Cloud Computing, Python, Nest.js, Next.js, Flutter e Inteligencia Artificial.
              </p>
              <div className="h-[1px] w-20 bg-white/20"></div>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md uppercase tracking-wider">
                Acompaño a empresas y emprendedores en la creación de soluciones tecnológicas enfocadas en eficiencia, crecimiento y resultados reales.
              </p>
            </div>

            {/* Grid de Tecnologías/Servicios 
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className="p-8 border border-gray-800 hover:border-white transition-colors duration-500 group">
                <Code2 className="mb-4 text-gray-500 group-hover:text-white" size={32} />
                <h4 className="text-xs font-bold uppercase tracking-widest">Fullstack</h4>
              </div>
              <div className="p-8 border border-gray-800 hover:border-white transition-colors duration-500 group">
                <Cpu className="mb-4 text-gray-500 group-hover:text-white" size={32} />
                <h4 className="text-xs font-bold uppercase tracking-widest">AI & Vision</h4>
              </div>
              <div className="p-8 border border-gray-800 hover:border-white transition-colors duration-500 group">
                <Globe className="mb-4 text-gray-500 group-hover:text-white" size={32} />
                <h4 className="text-xs font-bold uppercase tracking-widest">Cloud</h4>
              </div>
              <div className="p-8 border border-gray-800 hover:border-white transition-colors duration-500 group">
                <Zap className="mb-4 text-gray-500 group-hover:text-white" size={32} />
                <h4 className="text-xs font-bold uppercase tracking-widest">Growth</h4>
              </div>
            </div>
          </div>
        </div>
      </section>*/}


      {/* Sección de Trabajos (el componente que ya teníamos) 
      <div id="work" className="bg-black">
        <Work />
      </div>*/}


      {/* NUEVA SECCIÓN: El bloque blanco de "¡Hola!" */}
      <div id="footer">
      <Footer />
      </div>
      
    </main>
  );
}
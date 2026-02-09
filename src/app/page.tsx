import Work from '@/components/Work';
import About from '@/components/About';
import Projects from '@/components/Projects';
import ProjectsV1 from '@/components/ProjectsV1';
import TechStack from '@/components/TechStack';

import { Facebook, Instagram, Twitter } from 'lucide-react'; // Necesitarás instalar lucide-react
import {Cpu, Globe, Zap, Code2} from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111]">
      {/* Navbar Superior */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 bg-transparent">
        <div className="text-xl font-bold tracking-tighter">Portafolio</div>
        <div className="hidden md:flex space-x-8 text-xs uppercase tracking-widest text-gray-300">
          <a href="#" className="hover:text-white transition">Inicio</a>
          <a href="#" className="hover:text-white transition">mikmawi</a>
          <a href="#work" className="hover:text-white transition">Creaciones</a>
          <a href="#" className="hover:text-white transition">los 7 escritos</a>
          <a href="#" className="hover:text-white transition">Contacto</a>
        </div>
      </nav>

      {/* Hero Section Split Layout */}
      <section className="relative flex flex-col md:flex-row h-screen">
        {/* Lado Izquierdo: Imagen */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
          <img 
            src="/retrato1color.jpeg"
            /*src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000" // Puedes usar tu propia foto aquí*/
            alt="Profile"
            className="w-full h-full object-cover"
            /*className="w-full h-full object-cover grayscale brightness-75"*/
          />
        </div>

        {/* Lado Derecho: Contenido */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-12 md:px-24 bg-[#111111] py-12">
          <div className="max-w-md">
            {/* Etiqueta superior opcional para más estilo tech */}
            <span className="text-[10px] tracking-[0.4em] text-gray-500 uppercase mb-4 block">
                 Especialista IA & Developer
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
              Hola, soy <br />
              <span className="text-white">mikmawi</span>
            </h1>
            <p className="mt-6 text-gray-400 text-sm leading-relaxed max-w-sm">
              Acompaño a empresas y emprendedores en la creación de soluciones tecnológicas enfocadas en eficiencia, crecimiento y resultados reales.
            </p>

            {/* Botones */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-gray-200 transition">
                Empezar proyecto
              </button>
              <button className="px-8 py-3 border border-white text-white font-semibold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition flex items-center gap-2">
                Explorar más <span>▶</span>
              </button>
            </div>

            {/* Redes Sociales */}
            <div className="mt-12 flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition"><Facebook size={18} /></a>
              <a href="#" className="hover:text-white transition"><Instagram size={18} /></a>
              <a href="#" className="hover:text-white transition"><Twitter size={18} /></a>
            </div>
          </div>
        </div>
      </section>

{/* NUEVA SECCIÓN: El bloque blanco de "¡Hola!" */}
      <About />

{/* NUEVA SECCIÓN: El bloque blanco de "¡Hola!" */}
      <Projects />


{/* NUEVA SECCIÓN: El bloque blanco de "¡Hola!" */}
      <TechStack />

{/* NUEVA SECCIÓN: El bloque blanco de "¡Hola!" */}
      <ProjectsV1 />
    
{/* NUEVA SECCIÓN: EXPERTISE (Basada en tus imágenes) */}
      <section id="expertise" className="py-32 px-8 md:px-24 bg-[#0a0a0a] border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Encabezado con la fuerza del "¡Hola!" de tu imagen */}
          <div className="mb-20">
            <h2 className="text-[12vw] md:text-[8vw] font-black leading-none uppercase tracking-tighter opacity-10 absolute -mt-10 md:-mt-20">
              Expertise
            </h2>
            <h3 className="relative text-3xl md:text-5xl font-bold uppercase tracking-tighter pt-10">
              Soluciones <span className="text-gray-500">Escalables</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Bloque de Texto Principal (Copiado de tu imagen 2) */}
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                Desarrollo <span className="text-white font-bold">productos digitales escalables y confiables</span> utilizando Cloud Computing, Python, Nest.js, Next.js, Flutter e Inteligencia Artificial.
              </p>
              <div className="h-[1px] w-20 bg-white/20"></div>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md uppercase tracking-wider">
                Acompaño a empresas y emprendedores en la creación de soluciones tecnológicas enfocadas en eficiencia, crecimiento y resultados reales.
              </p>
            </div>

            {/* Grid de Tecnologías/Servicios */}
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
      </section>


      {/* Sección de Trabajos (el componente que ya teníamos) */}
      <div id="work" className="bg-black">
        <Work />
      </div>
    </main>
  );
}
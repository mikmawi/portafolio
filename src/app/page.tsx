import Work from '@/components/Work';
import { Facebook, Instagram, Twitter } from 'lucide-react'; // Necesitarás instalar lucide-react

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
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000" // Puedes usar tu propia foto aquí
            alt="Profile"
            className="w-full h-full object-cover grayscale brightness-75"
          />
        </div>

        {/* Lado Derecho: Contenido */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-12 md:px-24 bg-[#111111] py-12">
          <div className="max-w-md">
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
                Diseñemos juntos
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

      {/* Sección de Trabajos (el componente que ya teníamos) */}
      <div id="work" className="bg-black">
        <Work />
      </div>
    </main>
  );
}
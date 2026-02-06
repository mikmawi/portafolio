import React from 'react';

const projects = [
  {
    title: "Cryptologist",
    type: "Full-time",
    period: "Jul 2022 - Present • 8 mos",
    location: "Turkey",
    color: "bg-[#0052FF]", // Azul vibrante
    glow: "shadow-[0_0_30px_-5px_rgba(0,82,255,0.4)]",
    image: "/project1.png"
  },
  {
    title: "ZenCats",
    type: "Full-time",
    period: "Dec 2020 - Mar 2022",
    location: "1 yr 4 mos",
    color: "bg-[#FFD600]", // Amarillo tech
    glow: "shadow-[0_0_30px_-5px_rgba(255,214,0,0.4)]",
    image: "/project2.png"
  },
  {
    title: "Lawmingo",
    type: "Full-time",
    period: "Aug 2018 - Aug 2020",
    location: "2 yrs 1 mo",
    color: "bg-[#FF3366]", // Rosa/Rojo
    glow: "shadow-[0_0_30px_-5px_rgba(255,51,102,0.4)]",
    image: "/project3.png"
  },
  {
    title: "Peeyade",
    type: "Full-time",
    period: "Jan 2016 - May 2018",
    location: "2 yrs 5 mos",
    color: "bg-[#E60000]", // Rojo intenso
    glow: "shadow-[0_0_30px_-5px_rgba(230,0,0,0.4)]",
    image: "/project4.png"
  }
];

export default function Projects() {
  return (
    <section className="bg-[#000000] py-32 px-8 relative overflow-hidden">
      {/* Opcional: Un gradiente muy sutil en el fondo para dar profundidad */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#111111_0%,#000000_100%)] opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase mb-2 block">
            Portfolio
          </span>
          <h2 className="text-white text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
            Proyectos <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
              Seleccionados
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group relative ${project.color} rounded-[40px] p-1 flex flex-col h-[500px] transition-all duration-500 hover:-translate-y-4 cursor-pointer`}
            >
              {/* El resplandor (Glow) que solo se activa con fuerza en hover */}
              <div className={`absolute inset-0 rounded-[40px] ${project.glow} opacity-40 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative bg-[#0a0a0a] rounded-[38px] w-full h-full p-6 flex flex-col overflow-hidden">
                {/* Contenedor de Imagen con zoom */}
                <div className="bg-[#151515] rounded-[28px] h-1/2 w-full mb-8 overflow-hidden relative">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
                  {/* Overlay sutil para la imagen */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>

                {/* Textos */}
                <div className="mt-auto">
                  <h3 className="text-white text-3xl font-bold tracking-tight mb-2 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-6">
                    <span className={`w-2 h-2 rounded-full ${project.color.replace('bg-', 'bg-')}`}></span>
                    <p className="text-gray-400 text-sm font-medium">{project.type}</p>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-800 text-[10px] uppercase tracking-[0.2em] text-gray-500 flex justify-between">
                    <span>{project.period}</span>
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">Ver más →</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
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
    <section className="bg-black py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Título siguiendo la estética de tu imagen anterior */}
        <h2 className="text-white text-5xl font-black mb-16 tracking-tighter uppercase">
          Del boceto <span className="text-gray-500">al código</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`relative ${project.color} ${project.glow} rounded-[32px] p-5 flex flex-col h-[450px] transition-all duration-500 hover:-translate-y-2 hover:brightness-110 cursor-pointer group`}
            >
              {/* Contenedor de Imagen (como en tu referencia) */}
              <div className="bg-[#111111] rounded-[24px] h-3/5 w-full mb-6 overflow-hidden flex items-center justify-center">
                <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700" 
                     style={{ backgroundImage: `url(${project.image})` }}>
                </div>
              </div>

              {/* Información del Proyecto */}
              <div className="text-white">
                <h3 className="text-2xl font-bold tracking-tight mb-1">{project.title}</h3>
                <p className="text-sm opacity-90 font-medium mb-4 flex items-center">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                  {project.type}
                </p>
                <div className="text-[11px] uppercase tracking-widest opacity-80 leading-relaxed">
                  <p>{project.period}</p>
                  <p>{project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
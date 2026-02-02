import { Project } from '@/types';

const projects: Project[] = [
  { 
    id: 1, 
    title: "Brand Identity 2024", 
    category: "Graphic Design", 
    imageUrl: "https://images.unsplash.com/photo-1635405074683-96d6921a2a2c?q=80&w=1000", 
    link: "#" 
  },
  { 
    id: 2, 
    title: "Editorial Concept", 
    category: "Print", 
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000", 
    link: "#" 
  },
  { 
    id: 3, 
    title: "Digital Experience", 
    category: "Web Design", 
    imageUrl: "https://images.unsplash.com/photo-1522542550221-31fd19255a7a?q=80&w=1000", 
    link: "#" 
  },
  { 
    id: 4, 
    title: "Visual Arts", 
    category: "Art Direction", 
    imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000", 
    link: "#" 
  },
];

export default function Work() {
  return (
    <section id="work" className="py-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-6xl font-bold tracking-tighter uppercase">Del boceto<br/>al código</h2>
          <p className="text-sm text-gray-400 hidden md:block italic">01 — 04</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="img-container overflow-hidden bg-[#f0f0f0] aspect-[16/10] mb-6">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-medium tracking-tight uppercase">{project.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{project.category}</p>
                </div>
                <span className="text-xl">↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
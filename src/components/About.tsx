export default function About() {
  return (
    <section className="bg-white text-black py-32 px-8 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Lado Izquierdo: El saludo gigante */}
        <div className="flex items-center h-full">
          <h2 className="text-[120px] md:text-[200px] font-black tracking-tighter leading-none">
            ¡Hola!
          </h2>
        </div>

        {/* Lado Derecho: Los párrafos informativos */}
        <div className="space-y-12 max-w-xl text-sm md:text-base leading-relaxed">
          {/* Versión en Español */}
          <div className="space-y-4">
            <p>
              Desarrollo <span className="font-bold">productos digitales escalables y confiables</span> utilizando Cloud Computing, Python, Nest.js, NextJS, Flutter e Inteligencia Artificial y Visión por Computadora.
            </p>
            <p>
              Acompaño a empresas y emprendedores en la creación de soluciones tecnológicas bien diseñadas, enfocadas en eficiencia, crecimiento y resultados reales.
            </p>
          </div>

          {/* Separador sutil (opcional, imitando el de la imagen) */}
          <div className="w-12 h-[1px] bg-gray-300 mx-auto md:mx-0"></div>

          {/* Versión en Inglés */}
          <div className="space-y-4 text-gray-600">
            <p>
              I develop <span className="font-bold">scalable and reliable digital products</span> using Cloud Computing, Python, Nest.js, NextJS, Flutter and Artificial Intelligence and Computer Vision.
            </p>
            <p>
              I accompany companies and entrepreneurs in the creation of well-designed technological solutions, focused on efficiency, growth and real results.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
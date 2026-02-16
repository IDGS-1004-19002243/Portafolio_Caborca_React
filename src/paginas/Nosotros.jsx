import Encabezado from '../componentes/Encabezado';
import PieDePagina from '../componentes/PieDePagina';

const Nosotros = () => {
  return (
    <div className="bg-white text-caborca-cafe font-sans">
      <Encabezado />

      <main>
        {/* HERO SECTION */}
        <section className="relative pt-[95px] bg-gray-50">
          {/* Espacio para imagen principal */}
          <div className="relative w-full overflow-hidden shadow-2xl">
            <img src="https://blocks.astratic.com/img/general-img-landscape.png" alt="Nosotros Caborca Boots" className="w-full h-[600px] object-cover" />
            {/* Overlay con texto centrado */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <div className="inline-block bg-caborca-beige-fuerte px-6 py-2 rounded-lg mb-6">
                  <p className="text-sm md:text-base font-medium tracking-widest uppercase text-white">NUESTRA HISTORIA</p>
                </div>
                <h1 className="text-5xl md:text-7xl font-serif mb-6">Quiénes Somos</h1>
                <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">45 años de tradición, pasión y maestría artesanal</p>
              </div>
            </div>
          </div>
        </section>

        {/* ORIGEN - Inicio de la historia */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-block bg-caborca-beige-suave px-6 py-2 rounded-full mb-6">
                    <span className="text-caborca-cafe text-sm font-semibold tracking-wider">NUESTRO ORIGEN</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif mb-6 text-caborca-cafe">El inicio de una aventura</h2>
                  <div className="space-y-4 text-caborca-negro/80 leading-relaxed">
                    <p>
                      Nuestra aventura inicia más o menos hace 45 años en el ocaso de una de las décadas más emocionantes del siglo pasado. Al igual que algunos de los movimientos culturales más importantes de la historia, <strong>Botas Caborca</strong>, también nació en los 70's.
                    </p>
                    <p>
                      Para probar suerte dentro del mundo zapatero, Luis Torres Muñoz y sus dos hijos Luis y José Manuel montaron un pequeño taller de bota en León, Guanajuato, una de las ciudades con mayor tradición zapatera en México y el mundo.
                    </p>
                    <p>
                      Iniciaron pequeños, sólo eran 6 trabajadores y fabricaban 12 pares al día. A la empresa le pusieron Botas Caborca en honor a un pequeño pueblo del norte de México, iniciando operaciones en <strong>Abril de 1978</strong>.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -top-8 -right-8 w-64 h-64 bg-caborca-beige-suave rounded-full blur-3xl opacity-50"></div>
                  <img src="https://blocks.astratic.com/img/general-img-landscape.png" alt="Inicio Caborca" className="relative rounded-2xl shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section >

        {/* CRECIMIENTO */}
        < section className="py-20 bg-caborca-beige-suave" >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <img src="https://blocks.astratic.com/img/general-img-landscape.png" alt="Crecimiento" className="rounded-2xl shadow-2xl" />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-block bg-white px-4 py-2 rounded-full mb-6">
                    <span className="text-caborca-cafe text-sm font-semibold tracking-wider">CRECIMIENTO</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif mb-6 text-caborca-cafe">De lo local a lo global</h2>
                  <div className="space-y-4 text-caborca-negro/80 leading-relaxed">
                    <p>
                      Durante algunos años se dedicaron a fabricar la tradicional bota vaquera hecha a mano y se concentraron en vender solamente dentro del territorio mexicano. Poco a poco el antiguo oficio de hacer bota a mano se fue profesionalizando y el sueño comenzaba a tomar forma.
                    </p>
                    <p>
                      <strong>El año de 1986 fue histórico</strong> porque fue el año en que se empezaron a exportar los primeros pares a Estados Unidos. A partir de ahí, esta empresa ha pasado a tener un nombre reconocido dentro del mundo del calzado a nivel mundial.
                    </p>
                    <p>
                      Año con año la empresa se fue haciendo más fuerte y comenzó a exportar a otras partes del mundo como Canadá, Japón e Italia. La compañía "Botas Caborca" se transformó en <strong>"Caborca Group"</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >

        {/* ESTADÍSTICAS */}
        < section className="py-20 bg-caborca-cafe text-white" >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-serif mb-4">Caborca Group Hoy</h2>
                <p className="text-white/80 text-lg">Números que reflejan nuestro compromiso y crecimiento</p>
              </div>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">45</div>
                  <div className="text-white/80 text-sm uppercase tracking-wider">Años de historia</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">5</div>
                  <div className="text-white/80 text-sm uppercase tracking-wider">Marcas propias</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">800+</div>
                  <div className="text-white/80 text-sm uppercase tracking-wider">Colaboradores</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">8,000</div>
                  <div className="text-white/80 text-sm uppercase tracking-wider">Pares semanales</div>
                </div>
              </div>
              <div className="mt-12 text-center">
                <p className="text-white/90 max-w-3xl mx-auto leading-relaxed">
                  En la actualidad Caborca Group cuenta con <strong>4 plantas manufactureras</strong> cubriendo un área total de <strong>30,000 metros cuadrados</strong> donde fabricamos alrededor de 8,000 pares semanales con la ayuda de más de 800 colaboradores.
                </p>
              </div>
            </div>
          </div>
        </section >

        {/* ARTESANÍA CON LEGADO */}
        < section className="py-20 bg-white" >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-block bg-caborca-beige-suave px-6 py-2 rounded-full mb-6">
                    <span className="text-caborca-cafe text-sm font-semibold tracking-wider">NUESTRO ARTE</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif mb-4 text-caborca-cafe">Artesanía con legado</h2>
                  <h3 className="text-2xl font-serif mb-6 text-caborca-cafe/70">Es un arte que requiere maestría y experiencia</h3>
                  <div className="space-y-4 text-caborca-negro/80 leading-relaxed">
                    <p>
                      Estamos orgullosos y realmente privilegiados de ser maestros en la artesanía de las botas vaqueras y de contar con tantos colaboradores talentosos y comprometidos que logran crear verdaderas y únicas obras de arte en cada par que fabricamos.
                    </p>
                    <p>
                      En Grupo Caborca, hemos logrado unir dos mundos: el mundo tradicional de las botas vaqueras hechas a mano y el mundo de los procesos modernos de fabricación de calzado, lo que nos ha permitido alcanzar una calidad impecable y una alta productividad.
                    </p>
                  </div>
                </div>
                <div>
                  <img src="https://blocks.astratic.com/img/general-img-landscape.png" alt="Artesanía" className="rounded-2xl shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section >

        {/* PASIÓN POR EL DETALLE */}
        < section className="py-20 bg-gradient-to-br bg-caborca-beige-suave to-white" >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <img src="https://blocks.astratic.com/img/general-img-landscape.png" alt="Detalle" className="rounded-2xl shadow-2xl" />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-block bg-white px-4 py-2 rounded-full mb-6">
                    <span className="text-caborca-cafe text-sm font-semibold tracking-wider">NUESTRO PROCESO</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif mb-6 text-caborca-cafe">Pasión por el detalle</h2>
                  <div className="space-y-4 text-caborca-negro/80 leading-relaxed">
                    <p>
                      Todo lo que hacemos en Grupo Caborca lo hacemos con pasión; amamos nuestra artesanía y la hacemos bien.
                    </p>
                    <p>
                      Creamos las botas vaqueras más hermosas y cada par que es producido se somete a un proceso de fabricación compuesto por <strong>más de 200 pasos</strong> realizados según los estándares de calidad más altos.
                    </p>
                    <p>
                      Trabajamos con esfuerzo y pasión.
                    </p>
                    <p>
                      Más de cuatro décadas de trabajo arduo, construyendo un legado de tradición que es evidente en cada par de botas hechas por las manos talentosas de nuestros artesanos mexicanos.
                    </p>
                  </div>
                  <div className="mt-8 p-6 bg-caborca-cafe text-white rounded-xl">
                    <div className="text-5xl font-bold mb-2">+200</div>
                    <div className="text-white/80">Pasos en el proceso de fabricación</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >

        {/* LEGADO */}
        < section className="py-20 bg-caborca-negro text-white" >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-serif mb-8">Nuestro Legado</h2>
              <div className="space-y-6 text-lg text-white/90 leading-relaxed">
                <p>
                  Generaciones de trabajo duro han forjado este legado. En 45 años de trabajo arduo hemos logrado consolidar una gran empresa que ha dejado su legado bien cimentado en la tradición botera del país.
                </p>
                <p>
                  Nos sentimos orgullosos de nuestras raíces al igual que nos sentimos orgullosos de nuestros productos porque en ellos hemos materializado el futuro de nuestro sudor, nuestro esfuerzo y nuestra entrega.
                </p>
                <p className="text-2xl font-serif text-white">
                  En cada par de botas dejamos el alma y entregamos nuestro ser.
                </p>
              </div>
            </div>
          </div>
        </section >
      </main >

      <PieDePagina />
    </div >
  );
};

export default Nosotros;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Encabezado from '../componentes/Encabezado';
import PieDePagina from '../componentes/PieDePagina';

const CatalogoMujer = () => {
  const [ordenarPor, setOrdenarPor] = useState('');
  const [estilo, setEstilo] = useState('');

  const listaProductos = [
    {
      id: 1,
      nombre: 'Bota Vaquera Elegante',
      descripcion: 'Piel premium con diseño femenino',
      imagen: 'https://blocks.astratic.com/img/general-img-landscape.png',
      esNuevo: true
    },
    {
      id: 2,
      nombre: 'Bota Texana Deluxe',
      descripcion: 'Estilo sofisticado con detalles únicos',
      imagen: 'https://blocks.astratic.com/img/general-img-landscape.png',
      esNuevo: false
    },
    {
      id: 3,
      nombre: 'Bota Casual Chic',
      descripcion: 'Comodidad y estilo para el día a día',
      imagen: 'https://blocks.astratic.com/img/general-img-landscape.png',
      esNuevo: false
    },
    {
      id: 4,
      nombre: 'Bota Artesanal Premium',
      descripcion: 'Diseño exclusivo hecho a mano',
      imagen: 'https://blocks.astratic.com/img/general-img-landscape.png',
      esNuevo: true
    },
    {
      id: 5,
      nombre: 'Bota Ranchera Moderna',
      descripcion: 'Tradición con toque contemporáneo',
      imagen: 'https://blocks.astratic.com/img/general-img-landscape.png',
      esNuevo: false
    },
    {
      id: 6,
      nombre: 'Bota Lujo Elite',
      descripcion: 'Edición limitada para mujer',
      imagen: 'https://blocks.astratic.com/img/general-img-landscape.png',
      esNuevo: true
    },
    {
      id: 7,
      nombre: 'Bota Clásica Refinada',
      descripcion: 'Elegancia atemporal',
      imagen: 'https://blocks.astratic.com/img/general-img-landscape.png',
      esNuevo: false
    },
    {
      id: 8,
      nombre: 'Bota Fashion Premium',
      descripcion: 'Tendencia y calidad combinadas',
      imagen: 'https://blocks.astratic.com/img/general-img-landscape.png',
      esNuevo: false
    },
    {
      id: 9,
      nombre: 'Bota Vaquera Moderna',
      descripcion: 'Diseño contemporáneo y funcional',
      imagen: 'https://blocks.astratic.com/img/general-img-landscape.png',
      esNuevo: true
    },
    {
      id: 10,
      nombre: 'Bota Casual Premium',
      descripcion: 'Versatilidad y confort',
      imagen: 'https://blocks.astratic.com/img/general-img-landscape.png',
      esNuevo: false
    },
    {
      id: 11,
      nombre: 'Bota Texana Elite',
      descripcion: 'Sofisticación y estilo',
      imagen: 'https://blocks.astratic.com/img/general-img-landscape.png',
      esNuevo: false
    },
    {
      id: 12,
      nombre: 'Bota Artesanal Especial',
      descripcion: 'Pieza única de colección',
      imagen: 'https://blocks.astratic.com/img/general-img-landscape.png',
      esNuevo: true
    }
  ];

  const manejarCambioOrdenar = (evento) => {
    setOrdenarPor(evento.target.value);
  };

  const manejarCambioEstilo = (evento) => {
    setEstilo(evento.target.value);
  };

  return (
    <div className="bg-white text-caborca-cafe font-sans">
      <Encabezado />

      <main>
        {/* HERO SECTION */}
        <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4 sm:mb-6 text-caborca-cafe">
              Botas para Mujer
            </h1>
            <div className="w-20 sm:w-24 h-1 bg-caborca-cafe mx-auto mb-4 sm:mb-6"></div>
            <p className="text-caborca-cafe text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Elegancia y artesanía mexicana diseñada para la mujer moderna
            </p>
          </div>
        </section>

        {/* FILTROS */}
        <section className="py-6 sm:py-8 bg-white border-b border-gray-300">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-between">
              <div>
                <p className="text-caborca-cafe font-semibold text-sm sm:text-base">
                  <span id="productCount">{listaProductos.length}</span> productos encontrados
                </p>
              </div>
              <div className="flex gap-3 sm:gap-4 flex-wrap w-full sm:w-auto">
                <select
                  value={ordenarPor}
                  onChange={manejarCambioOrdenar}
                  className="border-2 border-gray-300 rounded py-2 px-3 sm:px-4 focus:border-caborca-cafe focus:outline-none text-sm flex-1 sm:flex-initial"
                >
                  <option value="">Ordenar por</option>
                  <option value="nombre">Nombre A-Z</option>
                  <option value="nuevo">Más Recientes</option>
                </select>
                <select
                  value={estilo}
                  onChange={manejarCambioEstilo}
                  className="border-2 border-gray-300 rounded py-2 px-4 focus:border-caborca-cafe focus:outline-none text-sm flex-1 sm:flex-initial"
                >
                  <option value="">Estilo</option>
                  <option value="vaquero">Vaquero</option>
                  <option value="clasico">Clásico</option>
                  <option value="casual">Casual</option>
                  <option value="elegante">Elegante</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* CATÁLOGO DE PRODUCTOS */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {listaProductos.slice(0, 3).map((producto) => (
                  <div key={producto.id} className="group relative">
                    <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[3/4]">
                      <img
                        src="https://blocks.astratic.com/img/general-img-portrait.png"
                        alt={producto.nombre}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {producto.esNuevo && (
                        <div className="absolute top-4 right-4 bg-caborca-cafe text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wider z-10">
                          NUEVO
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Link to={`/producto/${producto.id}`} className="bg-white text-caborca-cafe px-8 py-3 rounded-full font-bold tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-gray-100">
                          VER DETALLES
                        </Link>
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <h3 className="text-xl font-serif font-bold text-caborca-cafe mb-1">
                        <Link to={`/producto/${producto.id}`}>{producto.nombre}</Link>
                      </h3>
                      <p className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wide">
                        {producto.descripcion}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <PieDePagina />
    </div>
  );
};

export default CatalogoMujer;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Encabezado from '../componentes/Encabezado';
import PieDePagina from '../componentes/PieDePagina';

const CatalogoHombre = () => {
  const [ordenarPor, setOrdenarPor] = useState('');
  const [estilo, setEstilo] = useState('');

  const listaProductos = [
    {
      id: 1,
      nombre: 'Bota Vaquera Clásica',
      descripcion: 'Piel de res premium con bordado tradicional',
      imagen: 'https://blocks.astratic.com/img/general-img-landscape.png',
      esNuevo: true
    },
    {
      id: 2,
      nombre: 'Bota Texana Premium',
      descripcion: 'Piel exótica con detalles en bronce',
      imagen: 'https://blocks.astratic.com/img/general-img-landscape.png',
      esNuevo: false
    },
    {
      id: 3,
      nombre: 'Bota Casual Elegante',
      descripcion: 'Cuero suave con suela de confort',
      imagen: 'https://blocks.astratic.com/img/general-img-landscape.png',
      esNuevo: false
    },
    {
      id: 4,
      nombre: 'Bota Vaquera Artesanal',
      descripcion: 'Diseño exclusivo hecho a mano',
      imagen: 'https://blocks.astratic.com/img/general-img-landscape.png',
      esNuevo: true
    },
    {
      id: 5,
      nombre: 'Bota Ranchera Tradicional',
      descripcion: 'Estilo auténtico mexicano',
      imagen: 'https://blocks.astratic.com/img/general-img-landscape.png',
      esNuevo: false
    },
    {
      id: 6,
      nombre: 'Bota Premium Lujo',
      descripcion: 'Edición limitada con acabado especial',
      imagen: 'https://blocks.astratic.com/img/general-img-landscape.png',
      esNuevo: true
    },
    {
      id: 7,
      nombre: 'Bota Work Premium',
      descripcion: 'Resistente con máximo confort',
      imagen: 'https://blocks.astratic.com/img/general-img-landscape.png',
      esNuevo: false
    },
    {
      id: 8,
      nombre: 'Bota Clásica Elite',
      descripcion: 'Diseño atemporal de alta calidad',
      imagen: 'https://blocks.astratic.com/img/general-img-landscape.png',
      esNuevo: false
    },
    {
      id: 9,
      nombre: 'Bota Vaquera Moderna',
      descripcion: 'Fusión de tradición y modernidad',
      imagen: 'https://blocks.astratic.com/img/general-img-landscape.png',
      esNuevo: true
    },
    {
      id: 10,
      nombre: 'Bota Casual Premium',
      descripcion: 'Comodidad y estilo en uno',
      imagen: 'https://blocks.astratic.com/img/general-img-landscape.png',
      esNuevo: false
    },
    {
      id: 11,
      nombre: 'Bota Texana Elite',
      descripcion: 'Diseño sofisticado y elegante',
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
              Botas para Hombre
            </h1>
            <div className="w-20 sm:w-24 h-1 bg-caborca-cafe mx-auto mb-4 sm:mb-6"></div>
            <p className="text-caborca-cafe text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Artesanía mexicana de alta calidad, diseñada para el hombre distinguido
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
                  className="border-2 border-gray-300 rounded py-2 px-4 focus:border-caborca-cafe focus:outline-none"
                >
                  <option value="">Estilo</option>
                  <option value="vaquero">Vaquero</option>
                  <option value="clasico">Clásico</option>
                  <option value="casual">Casual</option>
                  <option value="work">Trabajo</option>
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

export default CatalogoHombre;

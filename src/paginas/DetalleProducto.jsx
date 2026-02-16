import { useState } from 'react';
import { Link } from 'react-router-dom';
import Encabezado from '../componentes/Encabezado';
import PieDePagina from '../componentes/PieDePagina';

const DetalleProducto = () => {
  const [imagenPrincipal, setImagenPrincipal] = useState('https://blocks.astratic.com/img/general-img-landscape.png');
  const [imagenSeleccionadaIndex, setImagenSeleccionadaIndex] = useState(0);
  const [tallaSeleccionada, setTallaSeleccionada] = useState('');
  const [cantidad, setCantidad] = useState(1);

  const imagenes = [
    'https://blocks.astratic.com/img/general-img-landscape.png',
    'https://blocks.astratic.com/img/general-img-landscape.png',
    'https://blocks.astratic.com/img/general-img-landscape.png',
    'https://blocks.astratic.com/img/general-img-landscape.png',
  ];

  const tallas = ['24', '25', '26', '27', '28', '29', '30', '31'];

  return (
    <div>
      <Encabezado />

      {/* BREADCRUMB */}
      <section className="pt-28 pb-6 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <nav className="text-sm text-caborca-cafe flex items-center gap-2">
              <Link to="/" className="font-medium hover:underline text-caborca-cafe font-semibold">Inicio</Link>
              <svg className="w-4 h-4 text-caborca-cafe" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
              <Link to="/catalogo-hombre" className="font-medium hover:underline text-caborca-cafe font-semibold">Botas Hombre</Link>
              <svg className="w-4 h-4 text-caborca-cafe" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-caborca-cafe font-semibold">Bota Vaquera Clásica</span>
            </nav>
          </div>
        </div>
      </section>

      {/* DETALLE DEL PRODUCTO */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">

              {/* GALERÍA DE IMÁGENES */}
              <div className="sticky top-24 h-fit">
                {/* Imagen Principal */}
                {/* Imagen Principal con Zoom */}
                <div
                  className="mb-6 rounded-xl overflow-hidden shadow-2xl border border-gray-200 relative group cursor-zoom-in"
                  onMouseMove={(e) => {
                    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - left) / width) * 100;
                    const y = ((e.clientY - top) / height) * 100;
                    e.currentTarget.style.setProperty('--zoom-x', `${x}%`);
                    e.currentTarget.style.setProperty('--zoom-y', `${y}%`);
                  }}
                >
                  <img
                    src={imagenPrincipal}
                    alt="Bota Vaquera Clásica"
                    className="w-full h-[500px] object-cover transition-transform duration-200 ease-out group-hover:scale-150"
                    style={{
                      transformOrigin: 'var(--zoom-x, 50%) var(--zoom-y, 50%)'
                    }}
                  />
                </div>

                {/* Miniaturas */}
                <div className="grid grid-cols-4 gap-3">
                  {imagenes.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setImagenPrincipal(img);
                        setImagenSeleccionadaIndex(idx);
                      }}
                      className={`cursor-pointer rounded-lg overflow-hidden transition ${imagenSeleccionadaIndex === idx
                        ? 'border-2 border-caborca-cafe'
                        : 'border border-gray-200 hover:border-gray-400'
                        }`}
                    >
                      <img
                        src={img}
                        alt={`Vista ${idx + 1}`}
                        className="w-full h-24 object-cover hover:opacity-75 transition"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* INFORMACIÓN DEL PRODUCTO */}
              {/* INFORMACIÓN DEL PRODUCTO */}
              <div>
                <div className="mb-4">
                  <span className="bg-caborca-beige-fuerte text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    NUEVO
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-serif text-caborca-beige-fuerte font-bold mb-2">
                  Bota Vaquera Clásica
                </h1>

                <p className="text-sm text-gray-500 mb-8 font-medium">
                  SKU: BVC-001-2024
                </p>

                <div className="border-t border-gray-100 mb-8"></div>

                <div className="text-gray-600 mb-8 leading-relaxed space-y-4 text-lg">
                  <p>
                    Bota vaquera artesanal elaborada con piel de res premium de la más alta calidad. Diseño clásico con bordado tradicional mexicano hecho a mano. Cada par es único y refleja la pasión de nuestros maestros artesanos.
                  </p>
                </div>

                <div className="mb-10">
                  <h3 className="text-sm font-bold text-caborca-beige-fuerte uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">
                    FICHA TÉCNICA
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-caborca-beige-suave transition-colors">
                      <span className="block text-gray-500 text-xs uppercase tracking-wider font-bold mb-1">Material en Corte</span>
                      <span className="font-bold text-caborca-cafe text-base">Piel de Res Premium</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-caborca-beige-suave transition-colors">
                      <span className="block text-gray-500 text-xs uppercase tracking-wider font-bold mb-1">Suela</span>
                      <span className="font-bold text-caborca-cafe text-base">Cuero / Goma</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-caborca-beige-suave transition-colors">
                      <span className="block text-gray-500 text-xs uppercase tracking-wider font-bold mb-1">Construcción</span>
                      <span className="font-bold text-caborca-cafe text-base">Goodyear Welt</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-caborca-beige-suave transition-colors">
                      <span className="block text-gray-500 text-xs uppercase tracking-wider font-bold mb-1">Horma</span>
                      <span className="font-bold text-caborca-cafe text-base">Oval / Wide Square</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link
                      to="/contacto"
                      className="w-full flex items-center justify-center gap-2 bg-caborca-beige-fuerte text-white px-8 py-4 rounded-lg font-bold tracking-wider hover:bg-caborca-cafe transition shadow-md text-lg group"
                    >
                      <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Obtener más información con nosotros
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* PRODUCTOS RELACIONADOS */}
      < section className="py-16 bg-gray-50" >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-4xl font-serif text-caborca-beige-fuerte mb-4 text-center font-bold">
              También te puede interesar
            </h3>
            <div className="w-24 h-1 bg-caborca-beige-fuerte mx-auto mb-12"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <Link to="/detalle-producto" key={item} className="group">
                  <div className="bg-white shadow-md hover:shadow-xl transition-all duration-300 group rounded-2xl overflow-hidden">
                    {/* Image Area */}
                    <div className="relative bg-gray-50 h-64 overflow-hidden flex items-center justify-center">
                      <img
                        src="https://blocks.astratic.com/img/general-img-portrait.png"
                        alt="Producto relacionado"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {/* Content Area - Dark Footer */}
                    <div className="bg-caborca-beige-suave p-4">
                      <h3 className="text-lg font-serif text-caborca-beige-fuerte mb-2 font-bold transition-colors">
                        Bota Vaquera Premium
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section >

      <PieDePagina />
    </div >
  );
};

export default DetalleProducto;

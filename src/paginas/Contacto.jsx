import { useState } from 'react';
import Encabezado from '../componentes/Encabezado';
import PieDePagina from '../componentes/PieDePagina';

const Contacto = () => {
  const [formulario, setFormulario] = useState({
    nombreCompleto: '',
    correoElectronico: '',
    telefono: '',
    mensaje: ''
  });

  const manejarCambioFormulario = (evento) => {
    const { name, value } = evento.target;
    setFormulario(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const manejarEnvioFormulario = (evento) => {
    evento.preventDefault();
    console.log('Formulario enviado:', formulario);
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    // Limpiar formulario
    setFormulario({
      nombreCompleto: '',
      correoElectronico: '',
      telefono: '',
      mensaje: ''
    });
  };

  return (
    <div className="bg-white text-caborca-cafe font-sans">
      <Encabezado />

      <main>
        {/* HERO IMAGE SECTION */}
        <section className="relative pt-[95px] bg-gray-40">
          <div className="relative w-full overflow-hidden shadow-2xl">
            <img
              src="https://blocks.astratic.com/img/general-img-landscape.png"
              alt="Contacto Caborca Boots"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <div className="inline-block bg-caborca-beige-fuerte px-6 py-2 rounded-lg mb-6">
                  <p className="text-sm md:text-base font-medium tracking-widest uppercase text-white">
                    ESTAMOS AQUÍ PARA TI
                  </p>
                </div>
                <h1 className="text-5xl md:text-7xl font-serif mb-6">Contacto</h1>
                <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                  Nos encantaría saber de ti. Completa el formulario y nos pondremos en contacto contigo
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO SECTION */}
        <section className="py-10 sm:py-14" style={{ backgroundColor: '#ECE7DF' }}>
          <div className="container mx-auto px-4 max-w-7xl">
            {/* Contact Info Cards */}
            <div className="mb-10">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-serif text-caborca-beige-fuerte font-bold mb-3">
                  ¿Cómo podemos ayudarte?
                </h2>
                <p className="text-caborca-cafe font-semibold text-sm leading-relaxed max-w-2xl mx-auto">
                  Nuestro equipo está listo para responder todas tus preguntas sobre nuestros productos,
                  servicios o cualquier consulta que tengas.
                </p>
              </div>

              {/* Contact Cards Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {/* Phone */}
                <div className="bg-white p-5 rounded-lg shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-caborca-bronce rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-caborca-cafe text-sm mb-1">Teléfono</h3>
                    <p className="text-caborca-cafe text-sm">+52 (555) 123-4567</p>
                    <p className="text-gray-500 text-xs mt-1">Lun - Vie: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white p-5 rounded-lg shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-caborca-bronce rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-caborca-cafe text-sm mb-1">Correo Electrónico</h3>
                    <p className="text-caborca-cafe text-sm">contacto@caborcaboots.com</p>
                    <p className="text-gray-500 text-xs mt-1">Respuesta en 24-48 hrs</p>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-white p-5 rounded-lg shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-caborca-bronce rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-caborca-cafe text-sm mb-1">Ubicación</h3>
                    <p className="text-caborca-cafe text-sm">León, Guanajuato, México</p>
                    <p className="text-gray-500 text-xs mt-1">Capital del calzado mexicano</p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col justify-center items-center hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-caborca-cafe text-sm mb-3">Síguenos</h3>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 bg-caborca-bronce rounded-full flex items-center justify-center hover:bg-caborca-bronce/80 transition-colors">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-caborca-bronce rounded-full flex items-center justify-center hover:bg-caborca-bronce/80 transition-colors">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a href="https://wa.me/525551234567" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-caborca-bronce rounded-full flex items-center justify-center hover:bg-caborca-bronce/80 transition-colors">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.506.709.31 1.262.496 1.694.633.712.226 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    </a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-caborca-bronce rounded-full flex items-center justify-center hover:bg-caborca-bronce/80 transition-colors">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl sm:text-3xl font-serif text-caborca-beige-fuerte font-bold mb-2">
                  Envíanos un mensaje
                </h3>
                <p className="text-sm text-caborca-cafe font-semibold">
                  Completa el formulario y nos pondremos en contacto contigo
                </p>
              </div>
              <form onSubmit={manejarEnvioFormulario} className="space-y-4">
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-caborca-beige-fuerte font-bold mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      name="nombreCompleto"
                      value={formulario.nombreCompleto}
                      onChange={manejarCambioFormulario}
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-caborca-cafe focus:ring-2 focus:ring-caborca-cafe/20 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-caborca-beige-fuerte font-bold mb-2">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      name="correoElectronico"
                      value={formulario.correoElectronico}
                      onChange={manejarCambioFormulario}
                      placeholder="correo@ejemplo.com"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-caborca-cafe focus:ring-2 focus:ring-caborca-cafe/20 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-caborca-beige-fuerte font-bold mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formulario.telefono}
                      onChange={manejarCambioFormulario}
                      placeholder="+52 (555) 123-4567"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-caborca-cafe focus:ring-2 focus:ring-caborca-cafe/20 transition-all"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-caborca-beige-fuerte font-bold mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    value={formulario.mensaje}
                    onChange={manejarCambioFormulario}
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    rows="5"
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-caborca-beige-fuerte focus:ring-2 focus:ring-caborca-beige-fuerte/20 transition-all resize-none"
                    required
                  ></textarea>
                </div>
                <div className="text-center pt-2">
                  <button
                    type="submit"
                    className="bg-caborca-beige-fuerte text-white font-bold tracking-wider text-sm px-12 py-4 rounded-lg shadow-lg hover:bg-caborca-negro transition-colors"
                  >
                    ENVIAR MENSAJE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <PieDePagina />
    </div>
  );
};

export default Contacto;

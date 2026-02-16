import { useState, useEffect, useRef } from 'react';

const Carrusel = () => {
  const [diapositivaActual, setDiapositivaActual] = useState(0);
  const [posicionMouse, setPosicionMouse] = useState({ x: 0.5, y: 0.5 });
  const intervalRef = useRef(null);

  const diapositivas = [
    { titulo: "Colección Premium", subtitulo: "BOTAS DE LUJO HECHAS A MANO", imagen: "https://blocks.astratic.com/img/general-img-landscape.png" },
    { titulo: "Elegancia Mexicana", subtitulo: "TRADICIÓN Y ESTILO", imagen: "https://blocks.astratic.com/img/general-img-landscape.png" },
    { titulo: "Botas Caborca", subtitulo: "SOMOS LO QUE HACEMOS", imagen: "https://blocks.astratic.com/img/general-img-landscape.png" }
  ];

  useEffect(() => {
    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        setDiapositivaActual((prev) => (prev + 1) % diapositivas.length);
      }, 5000);
    };

    startAutoSlide();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [diapositivas.length]);

  const manejarMovimientoMouse = (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    setPosicionMouse({ x: mouseX, y: mouseY });
  };

  const calcularTransformParallax = () => {
    const moveX = (posicionMouse.x - 0.5) * 30;
    const moveY = (posicionMouse.y - 0.5) * 30;
    return `translate(${moveX}px, ${moveY}px) scale(1.1)`;
  };

  const handleDotClick = (indice) => {
    setDiapositivaActual(indice);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setDiapositivaActual((prev) => (prev + 1) % diapositivas.length);
    }, 5000);
  };

  return (
    <div
      className="carousel-container"
      onMouseMove={manejarMovimientoMouse}
    >
      {diapositivas.map((diapositiva, indice) => (
        <div key={indice} className={`carousel-slide ${indice === diapositivaActual ? 'active' : ''}`}>
          <div
            className="parallax-layer"
            style={{
              backgroundImage: `url('${diapositiva.imagen}')`,
              transform: indice === diapositivaActual ? calcularTransformParallax() : 'translate(0, 0)'
            }}
          ></div>
          <div className="carousel-overlay"></div>
          <div className="carousel-content">
            <h1 className="carousel-title font-serif">{diapositiva.titulo}</h1>
            <p className="carousel-subtitle font-sans tracking-wider">{diapositiva.subtitulo}</p>
            <button className="carousel-btn">Descubre Más</button>
          </div>
        </div>
      ))}

      <div className="carousel-dots">
        {diapositivas.map((_, indice) => (
          <span
            key={indice}
            className={`carousel-dot ${indice === diapositivaActual ? 'active' : ''}`}
            onClick={() => handleDotClick(indice)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;

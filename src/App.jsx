import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Pages (usar `Inicio` como root)
import Inicio from './paginas/Inicio';
import CatalogoHombre from './paginas/CatalogoHombre';
import CatalogoMujer from './paginas/CatalogoMujer';
import Nosotros from './paginas/Nosotros';
import ResponsabilidadAmbiental from './paginas/ResponsabilidadAmbiental';
import Distribuidores from './paginas/Distribuidores';
import Contacto from './paginas/Contacto';
import DetalleProducto from './paginas/DetalleProducto';
import NotFound from './paginas/NotFound';
import EnConstruccion from './paginas/EnConstruccion';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Inicio />} />

        {/* Rutas de catálogo */}
        <Route path="/catalogo/hombre" element={<CatalogoHombre />} />
        <Route path="/catalogo/mujer" element={<CatalogoMujer />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />

        {/* Rutas de empresa */}
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/responsabilidad-ambiental" element={<ResponsabilidadAmbiental />} />
        <Route path="/distribuidores" element={<Distribuidores />} />
        <Route path="/contacto" element={<Contacto />} />

        {/* Rutas legacy (mantener temporalmente) */}
        <Route path="/catalogo-hombre" element={<Navigate to="/catalogo/hombre" replace />} />
        <Route path="/catalogo-mujer" element={<Navigate to="/catalogo/mujer" replace />} />
        <Route path="/detalle-producto" element={<DetalleProducto />} />

        {/* Páginas de estado */}
        <Route path="/mantenimiento" element={<EnConstruccion />} />
        <Route path="/NotFound" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

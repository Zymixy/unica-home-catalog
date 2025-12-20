import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-semibold tracking-[0.3em] hover:opacity-70 transition-opacity"
        >
          UNICA
        </Link>
        
        <nav className="flex items-center gap-8">
          <Link 
            to="/catalogo"
            className={`text-sm tracking-wide transition-opacity hover:opacity-70 ${
              location.pathname === "/catalogo" ? "font-medium" : ""
            }`}
          >
            Catálogo
          </Link>
          <Link 
            to="/contacto"
            className={`text-sm tracking-wide transition-opacity hover:opacity-70 ${
              location.pathname === "/contacto" ? "font-medium" : ""
            }`}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-6">
      <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
        {/* Línea decorativa superior */}
        <div className="w-24 sm:w-32 h-px bg-foreground mb-6 sm:mb-8 animate-fade-in" />
        
        {/* Fecha estilo periódico */}
        <p className="font-editorial text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 sm:mb-6 animate-fade-in">
          Madrid — {new Date().getFullYear()}
        </p>
        
        {/* Título principal estilo periódico */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight animate-fade-in-up">
          Unique
          <br />
          <span className="italic font-medium">Rental</span>
          <br />
          Places
        </h1>
        
        {/* Línea decorativa */}
        <div className="flex items-center gap-4 my-6 sm:my-8 animate-fade-in">
          <div className="w-16 sm:w-24 h-px bg-foreground" />
          <div className="w-2 h-2 border border-foreground rotate-45" />
          <div className="w-16 sm:w-24 h-px bg-foreground" />
        </div>
        
        {/* Subtítulo editorial */}
        <p className="font-editorial text-lg sm:text-xl md:text-2xl italic text-muted-foreground tracking-wide animate-fade-in-delay-1 max-w-md">
          Descubra los pisos más exclusivos de la capital
        </p>
        
        {/* Botón */}
        <div className="animate-fade-in-delay-2 pt-8 sm:pt-12">
          <Button 
            asChild
            variant="outline"
            className="px-10 sm:px-14 py-5 sm:py-6 text-xs sm:text-sm font-serif tracking-[0.2em] uppercase border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            <Link to="/catalogo">
              Ver Catálogo
            </Link>
          </Button>
        </div>
        
        {/* Línea decorativa inferior */}
        <div className="w-24 sm:w-32 h-px bg-foreground mt-8 sm:mt-12 animate-fade-in" />
      </div>
    </section>
  );
};

export default Hero;

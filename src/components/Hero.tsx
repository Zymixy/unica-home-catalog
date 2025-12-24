import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="flex flex-col items-center justify-center text-center space-y-8">
        <h1 className="text-7xl md:text-9xl font-light tracking-[0.4em] animate-fade-in-up">
          UNICA
        </h1>
        <p className="text-lg md:text-xl font-light tracking-[0.2em] text-muted-foreground animate-fade-in-delay-1">
          Pisos únicos
        </p>
        <div className="animate-fade-in-delay-2 pt-8">
          <Button 
            asChild
            variant="outline"
            className="px-12 py-6 text-sm tracking-[0.2em] border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            <Link to="/catalogo">
              Ver catálogo
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

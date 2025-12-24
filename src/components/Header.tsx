import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, Phone } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import CopyableField from "./CopyableField";

const Header = () => {
  const location = useLocation();
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="text-xl sm:text-2xl font-semibold tracking-[0.2em] sm:tracking-[0.3em] hover:opacity-70 transition-opacity active:scale-95 duration-200"
          >
            UNICA
          </Link>
          
          <nav className="flex items-center gap-3 sm:gap-4 md:gap-8">
            <Link 
              to="/catalogo"
              className={`text-xs sm:text-sm tracking-wide transition-all hover:opacity-70 active:scale-95 duration-200 ${
                location.pathname === "/catalogo" ? "font-medium" : ""
              }`}
            >
              Catálogo
            </Link>
            <button 
              onClick={() => setShowContact(true)}
              className="text-xs sm:text-sm tracking-wide transition-all hover:opacity-70 active:scale-95 duration-200"
            >
              Contacto
            </button>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <Dialog open={showContact} onOpenChange={setShowContact}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold tracking-wide">
              Contacto
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <p className="text-muted-foreground">
              Contáctanos para más información sobre nuestros pisos.
            </p>
            <div className="space-y-4">
              <CopyableField
                icon={<Mail className="w-5 h-5" />}
                label="Email"
                value="info@unica.com"
              />
              <CopyableField
                icon={<Phone className="w-5 h-5" />}
                label="Teléfono"
                value="+34 912 345 678"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;

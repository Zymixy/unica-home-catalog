import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, Phone } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [showContact, setShowContact] = useState(false);

  return (
    <>
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
            <button 
              onClick={() => setShowContact(true)}
              className="text-sm tracking-wide transition-opacity hover:opacity-70"
            >
              Contacto
            </button>
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
              <a 
                href="mailto:info@unica.com" 
                className="flex items-center gap-3 p-4 border border-border hover:bg-secondary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">info@unica.com</p>
                </div>
              </a>
              <a 
                href="tel:+34912345678" 
                className="flex items-center gap-3 p-4 border border-border hover:bg-secondary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <div>
                  <p className="text-sm text-muted-foreground">Teléfono</p>
                  <p className="font-medium">+34 912 345 678</p>
                </div>
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;

import Header from "@/components/Header";
import { Mail, Phone, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Helmet>
        <title>Contacto | Unique Rental Places</title>
        <meta name="description" content="Ponte en contacto con nosotros. Estamos aquí para ayudarte a encontrar tu piso único." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-24 pb-16 px-6">
          <div className="container mx-auto max-w-4xl">
            {/* Title */}
            <div className="text-center mb-16 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] mb-4">
                Contacto
              </h1>
              <p className="text-muted-foreground tracking-wide max-w-md mx-auto">
                Estamos aquí para ayudarte a encontrar tu piso único.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div>
                  <h2 className="text-xl font-light tracking-wide mb-6">Información</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 mt-1 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Dirección</p>
                        <p className="text-muted-foreground">
                          Calle Serrano 50<br />
                          28001 Madrid, España
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 mt-1 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Teléfono</p>
                        <p className="text-muted-foreground">+34 600 000 000</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 mt-1 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">info@uniquerentalplaces.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-light tracking-wide mb-4">Horario</h2>
                  <div className="text-muted-foreground space-y-1">
                    <p>Lunes - Viernes: 10:00 - 19:00</p>
                    <p>Sábados: 10:00 - 14:00</p>
                    <p>Domingos: Cerrado</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="animate-fade-in-up flex flex-col justify-center" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-xl font-light tracking-wide mb-6">¿Tienes alguna pregunta?</h2>
                <p className="text-muted-foreground mb-8">
                  Contacta con nosotros para cualquier consulta sobre nuestros pisos únicos.
                </p>
                <Button
                  onClick={() => setShowPopup(true)}
                  className="w-full py-6 text-sm tracking-[0.15em] bg-foreground text-background hover:bg-foreground/90"
                >
                  Solicitar información
                </Button>
              </div>
            </div>
          </div>
        </main>

        {/* Contact Popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50 flex items-center justify-center p-6" onClick={() => setShowPopup(false)}>
            <div 
              className="bg-background border border-border p-8 max-w-md w-full animate-fade-in-up"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-light tracking-wide text-center mb-8">
                Solicitar información
              </h2>
              <div className="space-y-6 text-center">
                <p className="text-muted-foreground">
                  Contacta con nosotros para más información
                </p>
                
                <div className="space-y-4 pt-4">
                  <a 
                    href="mailto:info@uniquerentalplaces.com"
                    className="flex items-center justify-center gap-3 py-4 border border-border hover:bg-secondary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="tracking-wide">info@uniquerentalplaces.com</span>
                  </a>
                  <a 
                    href="tel:+34600000000"
                    className="flex items-center justify-center gap-3 py-4 border border-border hover:bg-secondary transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="tracking-wide">+34 600 000 000</span>
                  </a>
                </div>
                
                <Button
                  variant="outline"
                  onClick={() => setShowPopup(false)}
                  className="mt-6 px-8 py-2 text-sm tracking-wide border-foreground hover:bg-foreground hover:text-background"
                >
                  Cerrar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;

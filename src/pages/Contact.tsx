import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contacto | UNICA - Pisos Únicos</title>
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
                        <p className="text-muted-foreground">+34 91 XXX XX XX</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 mt-1 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">info@unica.es</p>
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

              {/* Contact Form */}
              <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-xl font-light tracking-wide mb-6">Envíanos un mensaje</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Contact;

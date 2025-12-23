import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import ImageGallery from "@/components/ImageGallery";
import ContactForm from "@/components/ContactForm";
import { properties } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Bed, Bath, Maximize, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const [showForm, setShowForm] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-16 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-2xl font-light tracking-wide mb-4">Piso no encontrado</h1>
            <Link to="/catalogo" className="text-muted-foreground hover:text-foreground transition-colors">
              Volver al catálogo
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      <Helmet>
        <title>{property.title} | UNICA</title>
        <meta name="description" content={property.description} />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-24 pb-16 px-6">
          <div className="container mx-auto max-w-6xl">
            {/* Back Link */}
            <Link 
              to="/catalogo"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm tracking-wide">Volver al catálogo</span>
            </Link>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Gallery */}
              <div className="animate-fade-in-up">
                <ImageGallery images={property.images} title={property.title} />
              </div>

              {/* Details */}
              <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                {/* Location */}
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm tracking-wide">{property.location}</span>
                </div>

                {/* Title */}
                <div>
                  <h1 className="text-3xl font-light tracking-wide">{property.title}</h1>
                </div>

                {/* Quick Stats */}
                <div className="flex gap-8 py-6 border-y border-border">
                  <div className="flex items-center gap-2">
                    <Maximize className="w-5 h-5 text-muted-foreground" />
                    <span>{property.size} m²</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed className="w-5 h-5 text-muted-foreground" />
                    <span>{property.bedrooms} hab.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5 text-muted-foreground" />
                    <span>{property.bathrooms} baños</span>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h2 className="text-sm font-medium tracking-wide mb-3">Descripción</h2>
                  <p className="text-muted-foreground leading-relaxed">{property.description}</p>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-sm font-medium tracking-wide mb-3">Características</h2>
                  <div className="flex flex-wrap gap-2">
                    {property.features.map((feature) => (
                      <span 
                        key={feature}
                        className="px-4 py-2 bg-secondary text-sm tracking-wide"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Button
                    onClick={() => setShowForm(true)}
                    className="w-full py-6 text-sm tracking-[0.15em] bg-foreground text-background hover:bg-foreground/90"
                  >
                    Solicitar información
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Popup */}
            {showForm && (
              <div className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50 flex items-center justify-center p-6" onClick={() => setShowForm(false)}>
                <div 
                  className="bg-background border border-border p-8 max-w-md w-full animate-fade-in-up"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-light tracking-wide">
                      Solicitar información
                    </h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowForm(false)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      ✕
                    </Button>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Interesado en: <span className="font-medium text-foreground">{property.title}</span>
                  </p>
                  <ContactForm propertyId={property.id} propertyTitle={property.title} />
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default PropertyDetail;

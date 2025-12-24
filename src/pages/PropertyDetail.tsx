import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import ImageGallery from "@/components/ImageGallery";
import ContactForm from "@/components/ContactForm";
import BackToTop from "@/components/BackToTop";
import ScrollAnimation from "@/components/ScrollAnimation";
import { properties } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Bed, Bath, Maximize } from "lucide-react";
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
        
        <main className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-3 sm:px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            {/* Back Link */}
            <Link 
              to="/catalogo"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-muted-foreground hover:text-foreground transition-all duration-200 mb-6 sm:mb-8 active:scale-95"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm tracking-wide">Volver al catálogo</span>
            </Link>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
              {/* Gallery */}
              <ScrollAnimation animation="fade-up">
                <ImageGallery images={property.images} title={property.title} />
              </ScrollAnimation>

              {/* Details */}
              <ScrollAnimation animation="fade-up" delay={100} className="space-y-4 sm:space-y-6 md:space-y-8">
                {/* Location */}
                <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm tracking-wide">{property.location}</span>
                </div>

                {/* Title */}
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide">{property.title}</h1>
                </div>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-8 py-3 sm:py-4 md:py-6 border-y border-border">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Maximize className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                    <span className="text-sm sm:text-base">{property.size} m²</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Bed className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                    <span className="text-sm sm:text-base">{property.bedrooms} hab.</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Bath className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                    <span className="text-sm sm:text-base">{property.bathrooms} baños</span>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h2 className="text-xs sm:text-sm font-medium tracking-wide mb-2 sm:mb-3">Descripción</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{property.description}</p>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-xs sm:text-sm font-medium tracking-wide mb-2 sm:mb-3">Características</h2>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {property.features.map((feature) => (
                      <span 
                        key={feature}
                        className="px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-secondary text-xs sm:text-sm tracking-wide transition-transform duration-200 hover:scale-105"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-2 sm:pt-4">
                  <Button
                    onClick={() => setShowForm(true)}
                    className="w-full py-5 sm:py-6 text-xs sm:text-sm tracking-[0.1em] sm:tracking-[0.15em] bg-foreground text-background hover:bg-foreground/90 transition-all duration-200 active:scale-[0.98]"
                  >
                    Solicitar información
                  </Button>
                </div>
              </ScrollAnimation>
            </div>

            {/* Contact Popup */}
            {showForm && (
              <div className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4 md:p-6" onClick={() => setShowForm(false)}>
                <div 
                  className="bg-background border border-border p-4 sm:p-6 md:p-8 max-w-md w-full animate-fade-in-up max-h-[90vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-center mb-4 sm:mb-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-light tracking-wide">
                      Solicitar información
                    </h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowForm(false)}
                      className="text-muted-foreground hover:text-foreground transition-all duration-200 active:scale-95"
                    >
                      ✕
                    </Button>
                  </div>
                  <p className="text-muted-foreground mb-4 sm:mb-6 text-xs sm:text-sm md:text-base">
                    Interesado en: <span className="font-medium text-foreground">{property.title}</span>
                  </p>
                  <ContactForm propertyId={property.id} propertyTitle={property.title} />
                </div>
              </div>
            )}
          </div>
        </main>
        
        <BackToTop />
      </div>
    </>
  );
};

export default PropertyDetail;

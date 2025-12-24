import { useState, useMemo } from "react";
import Header from "@/components/Header";
import PropertyCard from "@/components/PropertyCard";
import PropertyFilters from "@/components/PropertyFilters";
import BackToTop from "@/components/BackToTop";
import ScrollAnimation from "@/components/ScrollAnimation";
import { properties } from "@/data/properties";
import { Helmet } from "react-helmet-async";

interface Filters {
  location: string | null;
  sizeRange: { min: number; max: number } | null;
}

const Catalog = () => {
  const [filters, setFilters] = useState<Filters>({
    location: null,
    sizeRange: null,
  });

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      // Location filter
      if (filters.location && !property.location.includes(filters.location)) {
        return false;
      }

      // Size filter
      if (filters.sizeRange) {
        if (property.size < filters.sizeRange.min || property.size > filters.sizeRange.max) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  return (
    <>
      <Helmet>
        <title>Catálogo | UNICA - Pisos Únicos</title>
        <meta name="description" content="Explora nuestro catálogo de pisos exclusivos en Madrid. Filtra por ubicación, precio y tamaño." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-3 sm:px-4 md:px-6">
          <div className="container mx-auto">
            {/* Title */}
            <ScrollAnimation className="mb-6 sm:mb-8 md:mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] mb-2 sm:mb-4">
                Catálogo
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground tracking-wide">
                {filteredProperties.length} {filteredProperties.length === 1 ? "piso" : "pisos"} disponibles
              </p>
            </ScrollAnimation>

            <div className="grid lg:grid-cols-4 gap-4 sm:gap-6 md:gap-12">
              {/* Filters Sidebar */}
              <ScrollAnimation animation="slide-right" className="lg:col-span-1">
                <PropertyFilters filters={filters} onFiltersChange={setFilters} />
              </ScrollAnimation>

              {/* Properties Grid */}
              <div className="lg:col-span-3">
                {filteredProperties.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {filteredProperties.map((property, index) => (
                      <ScrollAnimation key={property.id} delay={index * 100} animation="fade-up">
                        <PropertyCard property={property} index={index} />
                      </ScrollAnimation>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 sm:py-16">
                    <p className="text-sm sm:text-base text-muted-foreground tracking-wide">
                      No se encontraron pisos con los filtros seleccionados.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
        
        <BackToTop />
      </div>
    </>
  );
};

export default Catalog;

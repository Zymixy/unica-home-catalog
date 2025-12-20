import { useState, useMemo } from "react";
import Header from "@/components/Header";
import PropertyCard from "@/components/PropertyCard";
import PropertyFilters from "@/components/PropertyFilters";
import { properties } from "@/data/properties";
import { Helmet } from "react-helmet-async";

interface Filters {
  location: string | null;
  priceRange: { min: number; max: number } | null;
  sizeRange: { min: number; max: number } | null;
}

const Catalog = () => {
  const [filters, setFilters] = useState<Filters>({
    location: null,
    priceRange: null,
    sizeRange: null,
  });

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      // Location filter
      if (filters.location && !property.location.includes(filters.location)) {
        return false;
      }

      // Price filter
      if (filters.priceRange) {
        if (property.price < filters.priceRange.min || property.price > filters.priceRange.max) {
          return false;
        }
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
        
        <main className="pt-24 pb-16 px-6">
          <div className="container mx-auto">
            {/* Title */}
            <div className="mb-12 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] mb-4">
                Catálogo
              </h1>
              <p className="text-muted-foreground tracking-wide">
                {filteredProperties.length} {filteredProperties.length === 1 ? "piso" : "pisos"} disponibles
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-12">
              {/* Filters Sidebar */}
              <aside className="lg:col-span-1">
                <PropertyFilters filters={filters} onFiltersChange={setFilters} />
              </aside>

              {/* Properties Grid */}
              <div className="lg:col-span-3">
                {filteredProperties.length > 0 ? (
                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {filteredProperties.map((property, index) => (
                      <PropertyCard key={property.id} property={property} index={index} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <p className="text-muted-foreground tracking-wide">
                      No se encontraron pisos con los filtros seleccionados.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Catalog;

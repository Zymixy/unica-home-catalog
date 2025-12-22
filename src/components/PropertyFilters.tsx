import { useState } from "react";
import { Button } from "@/components/ui/button";
import { locations, sizeRanges } from "@/data/properties";
import { X } from "lucide-react";

interface Filters {
  location: string | null;
  sizeRange: { min: number; max: number } | null;
}

interface PropertyFiltersProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

const PropertyFilters = ({ filters, onFiltersChange }: PropertyFiltersProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasActiveFilters = filters.location || filters.sizeRange;

  const clearFilters = () => {
    onFiltersChange({ location: null, sizeRange: null });
  };

  return (
    <div className="space-y-6">
      {/* Toggle Button for Mobile */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setIsExpanded(!isExpanded)}
          className="md:hidden border-foreground"
        >
          Filtros {hasActiveFilters && `(${[filters.location, filters.sizeRange].filter(Boolean).length})`}
        </Button>
        
        {hasActiveFilters && (
          <Button
            variant="ghost"
            onClick={clearFilters}
            className="text-sm"
          >
            <X className="w-4 h-4 mr-2" />
            Limpiar filtros
          </Button>
        )}
      </div>

      {/* Filters */}
      <div className={`space-y-8 ${isExpanded ? "block" : "hidden md:block"}`}>
        {/* Location Filter */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium tracking-wide">Ubicación</h4>
          <div className="flex flex-wrap gap-2">
            {locations.map((location) => (
              <Button
                key={location}
                variant={filters.location === location ? "default" : "outline"}
                size="sm"
                onClick={() => onFiltersChange({
                  ...filters,
                  location: filters.location === location ? null : location,
                })}
                className={`text-xs tracking-wide transition-all ${
                  filters.location === location 
                    ? "bg-foreground text-background" 
                    : "border-border hover:border-foreground"
                }`}
              >
                {location}
              </Button>
            ))}
          </div>
        </div>

        {/* Size Filter */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium tracking-wide">Tamaño</h4>
          <div className="flex flex-wrap gap-2">
            {sizeRanges.map((range) => (
              <Button
                key={range.label}
                variant={filters.sizeRange?.min === range.min ? "default" : "outline"}
                size="sm"
                onClick={() => onFiltersChange({
                  ...filters,
                  sizeRange: filters.sizeRange?.min === range.min ? null : range,
                })}
                className={`text-xs tracking-wide transition-all ${
                  filters.sizeRange?.min === range.min 
                    ? "bg-foreground text-background" 
                    : "border-border hover:border-foreground"
                }`}
              >
                {range.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;

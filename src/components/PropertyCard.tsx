import { Link } from "react-router-dom";
import { Property } from "@/data/properties";
import { MapPin, Camera } from "lucide-react";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

const PropertyCard = ({ property, index = 0 }: PropertyCardProps) => {
  return (
    <Link 
      to={`/piso/${property.id}`}
      className="group block"
    >
      <article className="hover-lift">
        {/* Image Placeholder - blank */}
        <div className="aspect-[4/3] bg-secondary border border-border relative overflow-hidden mb-3 sm:mb-4">
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-95 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] bg-background px-4 py-2 sm:px-6 sm:py-3 border border-border">
              Ver detalles
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="space-y-1.5 sm:space-y-2">
          <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm tracking-wide">{property.location}</span>
          </div>
          
          <h3 className="text-base sm:text-lg font-medium tracking-wide group-hover:opacity-70 transition-opacity line-clamp-2">
            {property.title}
          </h3>
          
          <div className="flex items-center justify-between pt-1.5 sm:pt-2">
            <span className="text-xs sm:text-sm text-muted-foreground">
              {property.size} m²
            </span>
            <div className="flex items-center gap-1 sm:gap-1.5 text-muted-foreground">
              <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">{property.images.length} fotos</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PropertyCard;

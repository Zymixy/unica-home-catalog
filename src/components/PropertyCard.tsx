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
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <article className="hover-lift">
        {/* Image Placeholder */}
        <div className="aspect-[4/3] bg-secondary border border-border relative overflow-hidden mb-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-muted-foreground text-sm tracking-wide">
              Imagen {property.id}
            </span>
          </div>
          
          {/* Photo Count Badge */}
          <div className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1.5 flex items-center gap-1.5 border border-border">
            <Camera className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{property.images.length}</span>
          </div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm tracking-[0.2em] bg-background px-6 py-3 border border-border">
              Ver detalles
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className="text-sm tracking-wide">{property.location}</span>
          </div>
          
          <h3 className="text-lg font-medium tracking-wide group-hover:opacity-70 transition-opacity">
            {property.title}
          </h3>
          
          <div className="pt-2">
            <span className="text-sm text-muted-foreground">
              {property.size} m²
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PropertyCard;

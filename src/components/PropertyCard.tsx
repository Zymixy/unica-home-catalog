import { Link } from "react-router-dom";
import { Property } from "@/data/properties";
import { MapPin, Camera } from "lucide-react";
import { useState } from "react";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

const PropertyCard = ({ property, index = 0 }: PropertyCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link 
      to={`/piso/${property.id}`}
      className="group block"
    >
      <article className="hover-lift">
        {/* Image Placeholder with lazy loading simulation */}
        <div className="aspect-[4/3] bg-secondary border border-border relative overflow-hidden mb-4">
          <div 
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
              imageLoaded ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="w-8 h-8 border-2 border-muted-foreground/30 border-t-muted-foreground rounded-full animate-spin" />
          </div>
          
          <img 
            src={`https://picsum.photos/seed/${property.id}/800/600`}
            alt={property.title}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-700 ${
              imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
            } group-hover:scale-105`}
          />
          
          {/* Photo Count Badge */}
          <div className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1.5 flex items-center gap-1.5 border border-border">
            <Camera className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{property.images.length}</span>
          </div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-95 text-sm tracking-[0.2em] bg-background px-6 py-3 border border-border">
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

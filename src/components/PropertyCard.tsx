import { useState } from "react";
import { Link } from "react-router-dom";
import { Property } from "@/data/properties";
import { MapPin, Camera, Maximize2, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

const PropertyCard = ({ property, index = 0 }: PropertyCardProps) => {
  const [showImage, setShowImage] = useState(false);

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowImage(true);
  };

  return (
    <>
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

            {/* Expand Image Button */}
            <button
              onClick={handleImageClick}
              className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm p-2 border border-border opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center pointer-events-none">
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

      {/* Image Popup */}
      <Dialog open={showImage} onOpenChange={setShowImage}>
        <DialogContent className="sm:max-w-3xl p-0 border-none bg-transparent">
          <div className="relative bg-secondary aspect-[4/3] flex items-center justify-center border border-border">
            <span className="text-muted-foreground text-lg tracking-wide">
              Imagen {property.id}
            </span>
            <button
              onClick={() => setShowImage(false)}
              className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-2 border border-border hover:bg-background transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PropertyCard;

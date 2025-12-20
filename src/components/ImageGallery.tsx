import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

const ImageGallery = ({ images, title }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-[16/9] bg-secondary border border-border overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-muted-foreground text-sm tracking-wide">
            Imagen {currentIndex + 1} de {images.length}
          </span>
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`flex-shrink-0 w-20 h-16 bg-secondary border transition-all ${
              currentIndex === index 
                ? "border-foreground" 
                : "border-border hover:border-muted-foreground"
            }`}
          >
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-xs text-muted-foreground">{index + 1}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

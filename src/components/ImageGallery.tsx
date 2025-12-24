import { useState } from "react";
import { ChevronLeft, ChevronRight, Camera, Maximize2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

const ImageGallery = ({ images, title }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullscreen, setShowFullscreen] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="space-y-3 sm:space-y-4">
        {/* Main Image */}
        <div className="relative aspect-[4/3] sm:aspect-[16/9] bg-secondary border border-border overflow-hidden group">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-muted-foreground text-xs sm:text-sm tracking-wide">
              Imagen {currentIndex + 1} de {images.length}
            </span>
          </div>

          {/* Expand Button */}
          <button
            onClick={() => setShowFullscreen(true)}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-background/90 backdrop-blur-sm p-1.5 sm:p-2 border border-border opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background z-10"
          >
            <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background w-8 h-8 sm:w-10 sm:h-10"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background w-8 h-8 sm:w-10 sm:h-10"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </Button>
        </div>

        {/* Thumbnails with custom scrollbar */}
        <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-2 custom-scrollbar">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-14 h-11 sm:w-20 sm:h-16 bg-secondary border transition-all ${
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
        
        {/* Photo Count */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Camera className="w-4 h-4" />
          <span className="text-xs sm:text-sm">{images.length} fotos</span>
        </div>
      </div>

      {/* Fullscreen Image Popup */}
      <Dialog open={showFullscreen} onOpenChange={setShowFullscreen}>
        <DialogContent className="max-w-[95vw] sm:max-w-5xl p-0 border-none bg-transparent">
          <div className="relative bg-secondary aspect-[4/3] sm:aspect-[16/9] flex items-center justify-center border border-border">
            <span className="text-muted-foreground text-sm sm:text-lg tracking-wide">
              Imagen {currentIndex + 1} de {images.length}
            </span>

            {/* Close Button */}
            <button
              onClick={() => setShowFullscreen(false)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-background/90 backdrop-blur-sm p-1.5 sm:p-2 border border-border hover:bg-background transition-colors z-10"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-sm p-2 sm:p-3 border border-border hover:bg-background transition-colors"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-sm p-2 sm:p-3 border border-border hover:bg-background transition-colors"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 border border-border">
              <span className="text-xs sm:text-sm tracking-wide">{currentIndex + 1} / {images.length}</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageGallery;

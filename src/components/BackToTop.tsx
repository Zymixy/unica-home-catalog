import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 p-3 bg-foreground text-background hover:bg-foreground/90 shadow-lg transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      size="icon"
      aria-label="Volver arriba"
    >
      <ArrowUp className="w-5 h-5" />
    </Button>
  );
};

export default BackToTop;

import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isInverted, setIsInverted] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const computedStyle = window.getComputedStyle(target);
      const isClickable = computedStyle.cursor === "pointer" || 
                          target.tagName === "A" || 
                          target.tagName === "BUTTON" ||
                          target.closest("a") ||
                          target.closest("button");
      setIsPointer(!!isClickable);

      // Check background color to invert cursor
      const bgColor = computedStyle.backgroundColor;
      const rgb = bgColor.match(/\d+/g);
      if (rgb && rgb.length >= 3) {
        const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
        setIsInverted(brightness < 128);
      } else {
        setIsInverted(false);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener("mousemove", updateCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (typeof window === "undefined") return null;

  // Hide on touch devices
  if ("ontouchstart" in window) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-transform duration-150 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        <div
          className={`w-3 h-3 rounded-full transition-colors duration-200 ${
            isInverted ? "bg-background" : "bg-foreground"
          }`}
        />
      </div>
      
      {/* Cursor ring */}
      <div
        className={`fixed pointer-events-none z-[9998] transition-all duration-300 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.8 : 1})`,
        }}
      >
        <div
          className={`w-8 h-8 rounded-full border transition-colors duration-200 ${
            isInverted ? "border-background" : "border-foreground"
          }`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
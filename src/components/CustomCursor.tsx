import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isInverted, setIsInverted] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Get element at cursor position
      const elementAtPoint = document.elementFromPoint(e.clientX, e.clientY);
      if (elementAtPoint) {
        // Check background color of the element and its ancestors
        let currentElement: Element | null = elementAtPoint;
        let brightness = 255; // Default to light (white)
        
        while (currentElement && currentElement !== document.body) {
          const computedStyle = window.getComputedStyle(currentElement);
          const bgColor = computedStyle.backgroundColor;
          const rgb = bgColor.match(/\d+/g);
          
          if (rgb && rgb.length >= 3) {
            const alpha = rgb.length === 4 ? parseFloat(rgb[3]) : 1;
            if (alpha > 0.1) {
              brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
              break;
            }
          }
          currentElement = currentElement.parentElement;
        }
        
        setIsInverted(brightness < 128);
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

  const cursorColor = isInverted ? "#ffffff" : "#000000";
  const strokeColor = isInverted ? "#000000" : "#ffffff";

  return (
    <div
      className={`fixed pointer-events-none z-[9999] transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-1px, -1px)",
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-300 ease-out"
      >
        <path
          d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87c.48 0 .72-.58.38-.92L5.88 2.84a.5.5 0 0 0-.38.37Z"
          fill={cursorColor}
          stroke={strokeColor}
          strokeWidth="1"
          className="transition-all duration-300 ease-out"
        />
      </svg>
    </div>
  );
};

export default CustomCursor;
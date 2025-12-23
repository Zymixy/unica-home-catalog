import { useState, useEffect } from "react";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => setIsLoading(false), 500);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-opacity duration-500 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-light tracking-[0.4em] animate-pulse">
          UNICA
        </h1>
        <div className="mt-8 flex justify-center gap-1">
          <span className="w-2 h-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-2 h-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-2 h-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;

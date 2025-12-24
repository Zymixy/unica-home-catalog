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
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-light tracking-[0.4em] mb-8">
          UNICA
        </h1>
        <div className="w-48 h-0.5 bg-muted overflow-hidden">
          <div className="h-full bg-foreground animate-[loading_1.2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;

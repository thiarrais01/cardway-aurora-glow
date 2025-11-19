import { useEffect, useRef } from "react";

const FloatingShapes = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const shapes = containerRef.current.querySelectorAll(".floating-shape");
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.02;
        const x = (clientX - innerWidth / 2) * speed;
        const y = (clientY - innerHeight / 2) * speed;

        (shape as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating gradient orbs with parallax */}
      <div
        className="floating-shape absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float"
        style={{
          background: "radial-gradient(circle, rgba(230, 60, 46, 0.6) 0%, transparent 70%)",
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="floating-shape absolute top-1/2 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20 animate-float"
        style={{
          background: "radial-gradient(circle, rgba(255, 108, 44, 0.6) 0%, transparent 70%)",
          animationDelay: "2s",
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="floating-shape absolute bottom-1/4 left-1/2 w-72 h-72 rounded-full blur-3xl opacity-15 animate-float"
        style={{
          background: "radial-gradient(circle, rgba(174, 42, 132, 0.6) 0%, transparent 70%)",
          animationDelay: "4s",
          transition: "transform 0.3s ease-out",
        }}
      />
      
      {/* Geometric shapes */}
      <div
        className="floating-shape absolute top-1/3 right-1/3 w-32 h-32 rotate-45 opacity-10"
        style={{
          background: "linear-gradient(135deg, rgba(230, 60, 46, 0.3), rgba(255, 108, 44, 0.3))",
          transition: "transform 0.3s ease-out",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="floating-shape absolute bottom-1/3 left-1/3 w-24 h-24 rounded-full opacity-10"
        style={{
          background: "linear-gradient(135deg, rgba(255, 108, 44, 0.3), rgba(174, 42, 132, 0.3))",
          transition: "transform 0.3s ease-out",
          animation: "float 10s ease-in-out infinite",
          animationDelay: "3s",
        }}
      />
    </div>
  );
};

export default FloatingShapes;

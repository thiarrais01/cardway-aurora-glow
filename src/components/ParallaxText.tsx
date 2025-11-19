import { useEffect, useRef, ReactNode } from "react";

interface ParallaxTextProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxText = ({ children, speed = 0.5, className = "" }: ParallaxTextProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!elementRef.current) return;

      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) * speed * 0.01;
      const y = (e.clientY - innerHeight / 2) * speed * 0.01;

      elementRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [speed]);

  return (
    <div
      ref={elementRef}
      className={`transition-transform duration-200 ease-out ${className}`}
    >
      {children}
    </div>
  );
};

export default ParallaxText;

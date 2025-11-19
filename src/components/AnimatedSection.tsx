import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade" | "slide-up" | "slide-left" | "slide-right" | "scale" | "fade-slide";
  delay?: number;
  id?: string;
}

const AnimatedSection = ({
  children,
  className = "",
  animation = "fade-slide",
  delay = 0,
  id,
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const animationClasses = {
    fade: "opacity-0 transition-opacity duration-1000",
    "slide-up": "opacity-0 translate-y-20 transition-all duration-1000",
    "slide-left": "opacity-0 translate-x-20 transition-all duration-1000",
    "slide-right": "opacity-0 -translate-x-20 transition-all duration-1000",
    scale: "opacity-0 scale-95 transition-all duration-1000",
    "fade-slide": "opacity-0 translate-y-16 transition-all duration-1000 ease-out",
  };

  const visibleClasses = {
    fade: "opacity-100",
    "slide-up": "opacity-100 translate-y-0",
    "slide-left": "opacity-100 translate-x-0",
    "slide-right": "opacity-100 translate-x-0",
    scale: "opacity-100 scale-100",
    "fade-slide": "opacity-100 translate-y-0",
  };

  return (
    <div
      ref={ref}
      id={id}
      className={cn(
        animationClasses[animation],
        isVisible && visibleClasses[animation],
        className
      )}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

import { useEffect } from "react";

export const useSmoothScroll = () => {
  useEffect(() => {
    // Enable smooth scrolling globally
    document.documentElement.style.scrollBehavior = "smooth";

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute("href");
        
        if (href && href !== "#") {
          const element = document.querySelector(href);
          if (element) {
            const offset = 80; // Navigation height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });

            // Update URL without jumping
            if (history.pushState) {
              history.pushState(null, "", href);
            }
          }
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);
};

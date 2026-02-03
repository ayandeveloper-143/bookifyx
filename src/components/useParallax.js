import { useEffect } from 'react';

const useParallax = () => {
  useEffect(() => {
    const parallaxDots = document.querySelectorAll('[data-parallax]');
    if (!parallaxDots.length) return;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        parallaxDots.forEach((dot) => {
          const speed = parseFloat(dot.getAttribute('data-parallax'));
          const yPos = window.scrollY * speed;
          dot.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
};

export default useParallax;

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useRevealOnScroll = () => {
  const location = useLocation();

  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-in-scale');
    if (!fadeElements.length) return;

    // Reset visibility on route change
    fadeElements.forEach((el) => el.classList.remove('visible'));

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    fadeElements.forEach((el) => observer.observe(el));

    const timeoutId = setTimeout(() => {
      fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('visible');
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [location.pathname]);
};

export default useRevealOnScroll;

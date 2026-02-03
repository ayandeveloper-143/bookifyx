import React, { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Book Lover & Student',
    text: 'BookifyX has an amazing collection of e-books! I found exactly what I was looking for and the checkout process was super smooth. Already enjoying my purchases on my phone and tablet!',
    avatar: 'https://i.pravatar.cc/80?img=12'
  },
  {
    id: 2,
    name: 'James Rodriguez',
    role: 'Digital Reader',
    text: 'The prices on BookifyX are unbeatable compared to other platforms. I love that I can download books and read them offline. Great service and tons of genres to choose from!',
    avatar: 'https://i.pravatar.cc/80?img=32'
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Avid Reader & Author',
    text: 'Finally found a platform where I can buy e-books instantly and start reading right away! The sync feature across all my devices is amazing. Highly recommended!',
    avatar: 'https://i.pravatar.cc/80?img=44'
  }
];

const StarRow = () => (
  <div className="flex gap-1 text-amber-400">
    {Array.from({ length: 5 }).map((_, index) => (
      <svg key={index} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial, className = '' }) => (
  <div className={`rounded-md border border-gray-200 bg-white p-6 shadow-sm ${className}`}>
    <StarRow />
    <p className="mt-5 text-gray-400 leading-relaxed">{testimonial.text}</p>
    <div className="mt-10 flex items-center gap-4">
      <img className="h-12 w-12 rounded-full object-cover" src={testimonial.avatar} alt={testimonial.name} />
      <div>
        <div className="font-semibold text-gray-900">{testimonial.name}</div>
        <div className="text-sm text-gray-400">{testimonial.role}</div>
      </div>
    </div>
  </div>
);

const MobileCarousel = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoSlideRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  const updateDots = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const cardWidth = carousel.children[0].offsetWidth + 16;
    const index = Math.round(carousel.scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  const autoSlide = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const cardWidth = carousel.children[0].offsetWidth + 16;
    const nextIndex = (activeIndex + 1) % testimonials.length;
    carousel.scrollTo({ left: nextIndex * cardWidth, behavior: 'smooth' });
    setActiveIndex(nextIndex);
  };

  const startAutoSlide = () => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(autoSlide, 4000);
  };

  const stopAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = null;
    }
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  };

  const scheduleResume = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      startAutoSlide();
      resumeTimeoutRef.current = null;
    }, 4000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      stopAutoSlide();
    };
  }, [activeIndex]);

  return (
    <div className="mt-10 md:hidden overflow-hidden -mx-4 fade-in delay-100">
      <div
        ref={carouselRef}
        className="testimonial-carousel overflow-x-auto snap-x snap-mandatory flex gap-4 pb-4 px-4"
        onScroll={updateDots}
        onTouchStart={stopAutoSlide}
        onTouchEnd={scheduleResume}
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            className="flex-shrink-0 w-[85vw] max-w-[320px] snap-center"
          />
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-2" id="testimonialDots">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.id}
            type="button"
            onClick={() => {
              const carousel = carouselRef.current;
              if (!carousel) return;
              stopAutoSlide();
              const cardWidth = carousel.children[0].offsetWidth + 16;
              carousel.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
              setActiveIndex(index);
              scheduleResume();
            }}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === activeIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        <h2 className="text-center font-serif text-4xl md:text-5xl text-gray-900 fade-in">What Our Readers Say</h2>

        <MobileCarousel />

        <div className="mt-10 hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-3 fade-in delay-200">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

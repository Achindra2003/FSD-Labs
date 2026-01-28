import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, items.length]);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, items.length]);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <div className="max-w-4xl mx-auto relative group">
      <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 h-full">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4 text-center">
                <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                <p className="text-lg max-w-md">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 left-5 z-30 bg-black/30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        <ChevronLeft size={24} />
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 right-5 z-30 bg-black/30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        <ChevronRight size={24} />
      </button>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-white' : 'bg-white/50'}`}></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
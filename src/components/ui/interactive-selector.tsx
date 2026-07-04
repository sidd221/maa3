import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { BorderRotate } from './animated-gradient-border';

const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);
  
  const options = [
    { image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" },
    { image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800" },
    { image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800" },
    { image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" },
    { image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800" },
    { image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" },
    { image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" },
    { image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&q=80&w=800" },
    { image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800" },
    { image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % options.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + options.length) % options.length);
  };

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  // Auto-scroll every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % options.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [options.length]);

  return (
    <div className="relative flex flex-col items-center justify-center font-sans gap-6 w-full"> 
      <BorderRotate className="w-full max-w-full rounded-3xl" borderWidth={3} borderRadius={24} animationSpeed={3} backgroundColor="transparent" 
         gradientColors={{
           primary: '#004B87',
           secondary: '#007BB5',
           accent: '#E58D20'
         }}>
        {/* Options Container */}
        <div className="options flex w-full max-w-full h-[400px] md:h-[500px] mx-0 items-stretch overflow-hidden relative rounded-3xl shadow-sm border border-gray-100">
          {options.map((option, index) => (
          <div
            key={index}
            className={`
              option relative flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out
              ${activeIndex === index ? 'flex' : 'hidden md:flex'}
            `}
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize: activeIndex === index ? 'cover' : 'cover',
              backgroundPosition: 'center',
              backfaceVisibility: 'hidden',
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
              minWidth: '30px',
              minHeight: '100px',
              margin: 0,
              borderRadius: 0,
              borderWidth: '0px',
              borderStyle: 'solid',
              borderColor: activeIndex === index ? '#fff' : '#292929',
              cursor: 'pointer',
              backgroundColor: '#18181b',
              boxShadow: activeIndex === index 
                ? '0 20px 60px rgba(0,0,0,0.50)' 
                : '0 10px 30px rgba(0,0,0,0.30)',
              flex: activeIndex === index ? '7 1 0%' : '1 1 0%',
              zIndex: activeIndex === index ? 10 : 1,
              position: 'relative',
              overflow: 'hidden',
              willChange: 'flex-grow, box-shadow, background-size, background-position'
            }}
            onClick={() => handleOptionClick(index)}
          >
            {/* Dark overlay for passive items */}
            <div 
              className="absolute inset-0 bg-black transition-opacity duration-700" 
              style={{ opacity: activeIndex === index ? 0 : 0.4 }}
            ></div>
          </div>
        ))}
        </div>
      </BorderRotate>
      
      {/* Navigation Controls */}
      <div className="flex items-center gap-4 mt-2">
        <button 
          onClick={handlePrev}
          className="p-3 md:p-4 rounded-full bg-white shadow-md border border-gray-100 text-primary hover:bg-neutral-light hover:scale-105 transition-all outline-none focus:ring-2 focus:ring-primary/20"
        >
          <ChevronLeft size={24} />
        </button>
        
        {/* Pagination Dots */}
        <div className="flex items-center gap-1.5 md:gap-2 px-2 flex-wrap justify-center">
          {options.map((_, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'w-8 bg-primary' 
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={handleNext}
          className="p-3 md:p-4 rounded-full bg-white shadow-md border border-gray-100 text-primary hover:bg-neutral-light hover:scale-105 transition-all outline-none focus:ring-2 focus:ring-primary/20"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes slideFadeIn {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInTop {
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeInFromTop 0.8s ease-in-out forwards;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

export default InteractiveSelector;

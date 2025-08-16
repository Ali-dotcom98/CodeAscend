import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // optional icons
import P1 from "./Icons/P1.svg"
import P2 from "./Icons/P2.svg"
import P3 from "./Icons/P3.svg"
const Banner = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth * 0.9; // scroll by ~90% of visible width
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const banners = [
    {
      title: "Code Ascend ' s",
      subtitle : "Live Section",
      button: 'Get Started',
      icons : P1,
    },
    {
      title: "Code Ascend ' s",
      subtitle : "Platform Courses",
      button: 'Start Learning',
      icons : P2,
     
    },
    {
      title: "Code Ascend ' s",
      subtitle : "Problem Lists",
      button: 'Get Started',
      icons : P3,
     
    },
    
  ];

  return (
    <div className="font-urbanist relative w-full max-w-6xl mx-auto">
      {/* Scrollable Banner Container */}
      <div className="relative">
        {/* Left arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-50 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Scroll Area */}
       <div
            ref={scrollRef}
            className="flex overflow-hidden space-x-4 scroll-smooth py-4 rel"
          >
    
          {banners.map((item, idx) => (
            <div
              key={idx}
              className={` relative min-w-[280px] overflow-hidden min-h-[150px] sm:min-w-[340px] rounded-xl p-4 text-white bg-purple-600/70 flex-shrink-0`}
            >
              <div className='absolute size-48 rounded-full -right-10 top-5 bg-purple-100 ' > </div>
              <div className='absolute right-0 top-10 z-0'><img src={item.icons} className='size-32' alt="" /></div>
              <div className='relative z-20'>
                <h3 className="text-lg font-semibold mt-3">{item.title}</h3>
                <h4 className="text-md font-semibold">{item.subtitle}</h4>
                <button className="bg-purple-100 font-medium text-black px-4 py-1 rounded shadow mt-3">
                  {item.button}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-50 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Banner;

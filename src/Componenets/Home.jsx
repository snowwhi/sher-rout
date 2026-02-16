import React, { useState } from 'react';

const slides = [
  {
    id: 1,
    title: "Empowering Innovation",
    subtitle: "Discover resources to scale your next big idea.",
    button: "Get Started",
    bg: "bg-gray-50"
  },
  {
    id: 2,
    title: "Join the Community",
    subtitle: "Connect with over 5,000+ active members today.",
    button: "Membership",
    bg: "bg-white"
  },
  {
    id: 3,
    title: "Make an Impact",
    subtitle: "Your donations drive real change in local sectors.",
    button: "Donate Now",
    bg: "bg-gray-100"
  }
];

const Home = () => {
  const [active, setActive] = useState(0);

  const nextSlide = () => setActive((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setActive((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className={` w-full h-screen overflow-hidden ${slides[active].bg} transition-colors duration-700`}>
      
      <div className="max-w-6xl mx-auto h-full flex items-center px-10">
        {/* We use the 'key' attribute here. When it changes, React re-renders the div, 
            triggering the 'animate-fade-up' animation. */}
        <div key={active} className="w-full md:w-1/2 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <span className="text-rose-600 font-bold tracking-widest uppercase text-sm">Featured</span>
          <h2 className="text-6xl font-black text-gray-900 mt-2 mb-4 leading-tight">
            {slides[active].title}
          </h2>
          <p className="text-gray-600 text-xl mb-8">
            {slides[active].subtitle}
          </p>
          <button className="bg-rose-600 hover:bg-rose-700 text-white px-10 py-4 rounded-lg font-bold transition-all shadow-lg shadow-rose-200">
            {slides[active].button}
          </button>
        </div>

        <div className="hidden md:block w-1/2">
           {/* Fixed border-[16px] syntax */}
           <div className="w-80 h-80 border-[16px] border-rose-600/10 rounded-full mx-auto flex items-center justify-center">
              <div className={`w-60 h-60 bg-rose-600 rounded-2xl rotate-12 shadow-2xl flex items-center justify-center text-white text-6xl font-bold transition-transform duration-500`}>
                0{slides[active].id}
              </div>
           </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-10 right-10 flex gap-4">
        <button onClick={prevSlide} className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-400 hover:border-rose-600 hover:text-rose-600 transition-colors">
          ←
        </button>
        <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-rose-600 transition-colors">
          →
        </button>
      </div>

      {/* Progress Bars */}
      <div className="absolute bottom-12 left-10 flex gap-2">
        {slides.map((_, index) => (
          <div 
            key={index}
            className={`h-1 transition-all duration-500 ${active === index ? 'w-12 bg-rose-600' : 'w-4 bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
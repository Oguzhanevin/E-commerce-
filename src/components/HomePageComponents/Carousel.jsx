import React, { useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselImages = [
    { 
      url: 'img/header/headerCarouseFirst.jpeg', 
      alt: 'Image 1', 
      description: 'We know how large objects will act, but things on a small scale.'
    },
    { 
      url: 'https://picsum.photos/id/238/1200/600', 
      alt: 'Image 2', 
      description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.'
    },
    // More images can be added here
  ];

  // Move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="relative w-full h-screen mx-auto pt-6">
      <div className="overflow-hidden relative h-full">
        <div 
          className="flex h-full" 
          style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease-in-out' }}
        >
          {carouselImages.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 relative h-full">
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute top-1/2 left-1/2 md:left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg text-center md:text-left p-8">
                <p className="text-white text-sm uppercase tracking-wide md:pb-20">Summer 2024</p>
                <h1 className="text-white text-4xl font-bold mt-2 md:pb-20 md:text-[40px]">NEW COLLECTION</h1>
                <p className="text-white text-lg mt-2 max-w-lg">{image.description}</p>
                <button className="bg-green-500 text-white font-bold py-2 px-6 rounded mt-4 hover:bg-green-600">SHOP NOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Left Arrow Button */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-opacity-50 p-2 hover:bg-opacity-75"
        onClick={prevSlide}
      >
        <i className="fa-solid fa-chevron-left fa-2xl text-white"></i>
      </button>

      {/* Right Arrow Button */}
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-opacity-50 p-2 hover:bg-opacity-75"
        onClick={nextSlide}
      >
        <i className="fa-solid fa-chevron-right fa-2xl text-white"></i>
      </button>

      {/* Slide Indicators (dots) */}
      <div className="hidden md:flex absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-2">
        {carouselImages.map((_, index) => (
          <div
            key={index}
            className={`w-8 h-1 ${index === currentIndex ? 'bg-white' : 'bg-gray-400'} transition-all duration-300`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

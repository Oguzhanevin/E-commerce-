import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

const Carousel2 = () => {
  const slides = [
    {
      url: "/images/carousel2.png",
    },
    {
      url: "",
    },
    {
      url: "",
    },

    {
      url: "",
    },
    {
      url: "",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="h-[1600px] md:h-[840px] w-full md:w-full relative group mt-48 md:mt-[-20px] bg-[#23856D]">
      <div
        className="absolute bottom-0 w-full bg-cover h-1/2 md:h-[685px] md:w-[650px] md:ml-[800px]"
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
        }}
      ></div>
      {/* Yazılar */}
      <div className="absolute inset-0 flex flex-col md:justify-center items-center md:items-start text-center text-white px-4 md:mx-48 mt-56 md:mt-0 ">
        <p className="text-sm font-semibold">SUMMER 2020</p>
        <p className="my-14 md:text-left text-4xl font-bold">
          Vita Classic <br />
          Product
        </p>
        <p className="font-semibold text-base mx-20 md:ml-0 md:text-left">
          We know how large objects will act,
          <br className="hidden md:block" /> We know how are objects will act,
          We know
        </p>
        <div className="flex flex-col mt-12 md:flex-row md:items-center ">
          <span className="font-bold text-xl md:pr-8">$16.48</span>
          <button className="bg-[#2DC071] text-white py-4 px-16 rounded font-bold mt-6 md:mt-0">
            ADD TO CART
          </button>
        </div>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[35.5%] md:top-[50%] -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FontAwesomeIcon icon={faChevronLeft} onClick={prevSlide} size="2x" />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[35.5%] md:top-[50%]  -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FontAwesomeIcon icon={faChevronRight} onClick={nextSlide} size="2x" />
      </div>
      {/* Navigation Dots */}
      <div className="absolute bottom-16 w-full flex justify-center z-10">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`mx-1 ${
              currentIndex === slideIndex ? "text-white" : "text-white/50"
            }`}
          >
            <FontAwesomeIcon icon={faCircle} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel2;

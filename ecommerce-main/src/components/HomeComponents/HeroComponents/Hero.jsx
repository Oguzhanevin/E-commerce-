import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const Hero = () => {
  const history = useHistory();

  const navigate = () => {
    history.push("/shop/kadin/elbise/4");
  };

  const slides = [
    {
      url: "/images/hero-image-3.jpg",
    },
    {
      url: "/images/hero-image-5.jpg",
    },
    {
      url: "/images/hero-image-2.jpg",
    },

    {
      url: "/images/hero-image-4.jpg",
    },
    {
      url: "/images/hero-image-6.jpg",
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
    <div className="h-[840px] w-full md:w-full relative group">
      <div
        className={`w-full h-full bg-cover duration-500 ${
          currentIndex === 0 ? "bg-[center_20%]" : "bg-center"
        } md:bg-center bg-right`}
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          backgroundSize: "cover",
        }}
      ></div>
      {/* Yazılar */}
      <div className="absolute top-40 left-0 right-0 flex flex-col justify-start items-center md:items-start text-center text-white px-4 md:px-48 py-4">
        <p className="text-sm font-semibold drop-shadow-black">SUMMER 2024</p>
        <p className="my-14 mx-32 md:mx-0 text-3xl font-bold drop-shadow-black">
          NEW COLLECTION
        </p>
        <p className="font-base text-xl mx-20 md:ml-0 md:text-left drop-shadow-black flex flex-col">
          <div className="flex flex-row">
            {" "}
            <span className="hidden md:block">
              Personalized Fashion Tips
            </span>{" "}
          </div>
          <br className="hidden md:block drop-shadow-black" /> Shine with Your
          Own Style!
        </p>
        <button
          className="bg-[#2DC071] text-white py-4 px-16 rounded font-bold mt-16 drop-shadow-black"
          onClick={navigate}
        >
          SHOP NOW
        </button>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[40%] -translate-y-[-30%] md:top-[40%] md:-translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FontAwesomeIcon icon={faChevronLeft} onClick={prevSlide} size="2x" />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[40%] -translate-y-[-30%] md:top-[40%] md:-translate-y-[-50%] right-5 md:right-[2%] lg:right-[2%] xl:right-[2%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
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

export default Hero;

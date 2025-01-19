import React, { useState } from 'react';

const imageUrls = [
    'img/header/ContainerFluidCarouselHeroFirst.png',
    'img/header/ContainerFluidCarouselHeroFirst.png',
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1));
    };

    const renderSliderContent = (isMobileView) => (
        <div className={`pt-16 flex ${isMobileView ? 'flex-col' : 'flex-row'} items-center justify-center bg-sliderBgColorGreen`}>
            <div className={`${isMobileView ? 'max-w-sm' : 'w-1/2'} pt-16 mt-16 relative`}>
                <div className="p-6 text-white text-center">
                    <p className="text-sm">SUMMER 2020</p>
                    <h2 className={`${isMobileView ? 'text-2xl' : 'text-4xl'} font-bold mt-2`}>Vita Classic Product</h2>
                    <p className="mt-4">We know how large objects will act, but things on a small scale.</p>
                    <p className="text-lg font-bold mt-4">$16.48</p>
                </div>

                <div className="p-6 flex justify-between items-center text-white text-center">
                    <button onClick={handlePrevClick} className="text-white text-2xl">
                        <i className="fa-solid fa-chevron-left fa-2xl text-white"></i>
                    </button>
                    <button className="bg-buttonBgColorGreen hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                        ADD TO CART
                    </button>
                    <button onClick={handleNextClick} className="text-white text-2xl">
                        <i className="fa-solid fa-chevron-right fa-2xl text-white"></i>
                    </button>
                </div>
                <div className="relative">
                    <img src={imageUrls[currentIndex]} alt="Product" className="h-4/5 w-full object-cover" />
                </div>
            </div>
            <div className="flex justify-center mt-4 mb-4 space-x-2">
                {imageUrls.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1 w-10 ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}
                    ></div>
                ))}
            </div>
        </div>
    );

    return (
        <>
            <div className="sm:hidden">
                {renderSliderContent(true)}
            </div>

            <div className="hidden sm:block">
                {renderSliderContent(false)}
            </div>
        </>
    );
};

export default Slider;

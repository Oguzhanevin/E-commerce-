import React from 'react';

const images = [
    'img/teamPage/1.jpeg',
    'img/teamPage/2.jpeg',
    'img/teamPage/3.jpeg',
    'img/teamPage/4.jpeg',
    'img/teamPage/5.jpeg',
];

function TeamPageHero() {
    return (
        <div className="bg-white mt-6 mb-4 flex flex-col md:flex-row gap-4 h-full">
            {/* Hero Image */}
            <div className="flex-1 max-h-[50vh]">
                <img src={images[0]} alt="Hero" className="w-full h-full object-cover max-h-[50vh]" />
            </div>

            {/* Group of Images */}
            <div className="flex-1 flex flex-col gap-4">
                {[images.slice(1, 3), images.slice(3)].map((group, groupIndex) => (
                    <div key={groupIndex} className="flex-1 flex gap-4">
                        {group.map((image, index) => (
                            <div key={index} className="flex-1 max-h-[24.3vh]">
                                <img src={image} alt={`Image ${groupIndex * 2 + index + 1}`} className="w-full h-full object-cover max-h-[24.3vh]" />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TeamPageHero;

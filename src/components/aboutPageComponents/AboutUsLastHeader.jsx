import React from 'react';

function AboutUsLastHeader() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 mx-auto bg-aboutUsLastHeaderColour relative">
            {/* Text Section */}
            <div className="flex-1 text-center md:text-start px-8 py-4 w-[92%] mx-auto">
                <h4 className="font-bold text-white text-lg mb-4">WORK WITH US</h4>
                <h2 className="text-4xl font-bold text-white mb-4">Now Let’s Grow Yours</h2>
                <p className="text-white mb-4">
                    The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th century.
                </p>

                <div className="flex space-x-4 justify-center md:justify-start">
                    <button className="text-white border-2 border-white px-6 py-2 rounded-lg font-semibold">
                        Button
                    </button>
                </div>
            </div>

            {/* Image Section */}
            <div className="relative flex-1 hidden md:block">
                <img
                    src="img/aboutUs/aboutUsLastHeader.jpeg"
                    alt="About Us"
                    className="w-full h-auto object-cover"
                />
            </div>
        </div>
    );
}

export default AboutUsLastHeader;

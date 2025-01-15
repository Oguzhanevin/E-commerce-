import React from 'react';

const AboutUsHeader = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-8 mx-auto w-[92%] bg-white">
            <div className="flex-1 text-center md:text-start">
                <h4 className="font-bold mb-4 text-textColorDarkGray pt-4 hidden md:block">ABOUT COMPANY</h4>
                <h2 className="text-4xl font-bold mb-4 pt-4 text-textColorDarkGray">ABOUT US</h2>
                <p className="mb-4 pt-4 text-textColorLightGray">
                    We know how large objects will act, but things on a small scale
                </p>

                <div className="flex space-x-4 pt-4 pb-4 justify-center text-textColorDarkGray md:justify-start">
                    <button className="bg-navbarLigthBlue text-white px-6 py-2 rounded-lg font-semibold">
                        Get Quote Now
                    </button>
                </div>
            </div>

            {/* Image Section */}
            <div className="relative flex-1">
                <img src="img/contactUs/background.png" alt="Family Shopping" className="w-full z-10" />

                {/* Circular Decorative Elements */}
                <div className="absolute top-0 left-[25%] bg-pink-200 rounded-full w-[50%] pb-[50%]" />
                <div className="absolute bottom-[50%] right-[18%] bg-pink-200 rounded-full w-[5%] pb-[5%]" />
                <div className="absolute top-[20%] right-[20%] bg-purple-400 rounded-full w-[2.5%] pb-[2.5%]" />
                <div className="absolute top-[5%] left-[15%] bg-pink-200 rounded-full w-[10%] pb-[10%]" />
                <div className="absolute bottom-[30%] left-[20%] bg-purple-400 rounded-full w-[2%] pb-[2%]" />
            </div>
        </div>
    );
};

export default AboutUsHeader;


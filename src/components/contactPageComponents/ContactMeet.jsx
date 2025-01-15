import React from 'react';

function ContactMeet() {
    return (
        <div className="bg-white mb-6">
            <div className="flex flex-col text-center items-center justify-between p-8 mx-auto w-[92%] relative">
                
                {/* Icon and Title Section */}
                <div className="text-center gap-6">
                    <div className="relative mb-4">
                        <div className="mb-6">
                            <i className="fa-solid fa-arrow-turn-down fa-2xl text-navbarLigthBlue"></i>
                        </div>
                        <h2 className="mt-6 text-sm font-semibold text-textColorDarkGray">WE CAN'T WAIT TO MEET YOU</h2>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-3xl font-bold text-textColorDarkGray mb-4">Let's Talk</h1>

                    {/* Button Section */}
                    <button className="bg-navbarLigthBlue text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                        Try it free now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ContactMeet;

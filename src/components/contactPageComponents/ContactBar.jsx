import React from 'react';

function ContactBar() {
    return (
        <div className='bg-mainBackgroundWhite md:bg-white'>
            <div className="flex flex-col text-center items-center md:items-stretch justify-between p-8 mx-auto gap-4 md:gap-12 w-[92%] mb-10">
                {/* Header Section */}
                <div className="relative">
                    <h4 className="font-bold mb-4 text-textColorDarkGray">VISIT OUR OFFICE</h4>
                    <h2 className="text-4xl font-bold mb-4 text-textColorDarkGray">We help small businesses with big ideas</h2>
                </div>

                {/* Contact Info Sections */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-between text-textColorDarkGray font-semibold">

                    {/* First Section: Contact Info */}
                    <div className='flex flex-col bg-white p-8 shadow-md rounded-lg'>
                        <div className='flex flex-col mb-6'>
                            <i className="fa-solid fa-phone fa-2xl mb-4 text-navbarLigthBlue"></i>
                            <p className='mb-2'>georgia.young@example.com</p>
                            <p className='mb-2'>georgia.young@ple.com</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h1 className='font-bold text-lg mb-4'>Get Support</h1>
                            <button className="md:rounded-full rounded-lg m-4 w-[157px] text-buttonFullBlue border-2 border-buttonFullBlue py-2 px-4">
                                Submit Request
                            </button>
                        </div>
                    </div>

                    {/* Second Section: Address Info */}
                    <div className='flex flex-col bg-textColorDarkGray p-8 shadow-md rounded-lg'>
                        <div className='flex flex-col mb-6'>
                            <i className="text-navbarLigthBlue mb-4 fa-solid fa-location-dot fa-2xl"></i>
                            <p className='mb-2 text-white'>georgia.young@example.com</p>
                            <p className='mb-2 text-white'>georgia.young@ple.com</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h1 className='text-white font-bold text-lg mb-4'>Get Support</h1>
                            <button className="md:rounded-full rounded-lg m-4 w-[157px] text-buttonFullBlue border-2 border-buttonFullBlue py-2 px-4">
                                Submit Request
                            </button>
                        </div>
                    </div>

                    {/* Third Section: Email Info */}
                    <div className='flex flex-col bg-white p-8 shadow-md rounded-lg'>
                        <div className='flex flex-col mb-6'>
                            <i className="fa-regular fa-paper-plane fa-2xl text-navbarLigthBlue mb-4"></i>
                            <p className='mb-2'>georgia.young@example.com</p>
                            <p className='mb-2'>georgia.young@ple.com</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h1 className='font-bold text-lg mb-4'>Get Support</h1>
                            <button className="md:rounded-full rounded-lg m-4 w-[157px] text-buttonFullBlue border-2 border-buttonFullBlue py-2 px-4">
                                Submit Request
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ContactBar;

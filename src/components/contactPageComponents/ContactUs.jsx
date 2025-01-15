import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-8 mx-auto w-[92%] bg-white relative">
            {/* Contact Information Section */}
            <div className="flex-1 text-center md:text-start">
                <h4 className="font-bold mb-4 text-textColorDarkGray">CONTACT US</h4>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-textColorDarkGray">Get in touch today!</h2>
                <p className="mb-4 text-textColorLightGray">We know how large objects will act, but things on a small scale</p>
                
                {/* Contact Details */}
                <div className="mb-4 text-textColorLightGray">
                    <p className="font-bold">Phone: +451 215 215</p>
                    <p className="font-bold">Fax: +451 215 215</p>
                </div>
                
                {/* Social Media Links */}
                <div className="flex space-x-6 justify-center md:justify-start text-textColorDarkGray text-2xl">
                    <Link to="#"><i className="fab fa-twitter"></i></Link>
                    <Link to="#"><i className="fab fa-facebook"></i></Link>
                    <Link to="#"><i className="fab fa-instagram"></i></Link>
                    <Link to="#"><i className="fab fa-linkedin"></i></Link>
                </div>
            </div>

            {/* Background Image Section */}
            <div className="relative flex-1">
                <img src="img/contactUs/background.png" alt="Family Shopping" className="w-full relative z-10" />

                {/* Decorative Circles */}
                <div className="absolute top-0 left-[25%] bg-pink-200 rounded-full w-[50%] pb-[50%]" ></div>
                <div className="absolute bottom-[50%] right-[18%] bg-pink-200 rounded-full w-[5%] pb-[5%]" ></div>
                <div className="absolute top-[20%] right-[20%] bg-purple-400 rounded-full w-[2.5%] pb-[2.5%]" ></div>
                <div className="absolute top-[5%] left-[15%] bg-pink-200 rounded-full w-[10%] pb-[10%]" ></div>
                <div className="absolute bottom-[30%] left-[20%] bg-purple-400 rounded-full w-[2%] pb-[2%]" ></div>
            </div>
        </div>
    );
};

export default ContactUs;

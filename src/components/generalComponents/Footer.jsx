import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="bg-footerLightGray md:border-b-2">
            {/* Üst Bölüm */}
            <div className="bg-footerLightGray md:border-b-2">
                <div className="mx-auto px-14 md:px-0 py-5 md:w-[92%]">
                    <div className="flex flex-col items-start md:flex-row md:justify-between">
                        <div className="pt-6">
                            <h1 className="font-bold text-2xl leading-[32px]">Bandage</h1>
                        </div>
                        <div className="flex gap-4 pt-2">
                            <i className="fa-brands fa-instagram text-buttonFullBlue text-xl cursor-pointer"></i>
                            <i className="fa-brands fa-facebook text-buttonFullBlue text-xl cursor-pointer"></i>
                            <i className="fa-brands fa-twitter text-buttonFullBlue text-xl cursor-pointer"></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* Orta Bölüm */}
            <div className="bg-white">
                <div className="mx-auto px-14 md:px-0 py-6 md:w-[92%]">
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
                        {/* Şirket Bilgileri */}
                        <div>
                            <h2 className="font-bold">Company Info</h2>
                            <FooterLink to="/about-us">About Us</FooterLink>
                            <FooterLink to="/career">Career</FooterLink>
                            <FooterLink to="/we-are-hiring">We are hiring</FooterLink>
                            <FooterLink to="/blog">Blog</FooterLink>
                        </div>

                        {/* Yasal Bilgiler */}
                        <div>
                            <h2 className="font-bold">Legal</h2>
                            <FooterLink to="/about-us">About Us</FooterLink>
                            <FooterLink to="/career">Career</FooterLink>
                            <FooterLink to="/we-are-hiring">We are hiring</FooterLink>
                            <FooterLink to="/blog">Blog</FooterLink>
                        </div>

                        {/* Özellikler */}
                        <div>
                            <h2 className="font-bold">Features</h2>
                            <FooterLink to="/business-marketing">Business Marketing</FooterLink>
                            <FooterLink to="/user-analytic">User Analytic</FooterLink>
                            <FooterLink to="/live-chat">Live Chat</FooterLink>
                            <FooterLink to="/unlimited-support">Unlimited Support</FooterLink>
                        </div>

                        {/* Kaynaklar */}
                        <div>
                            <h2 className="font-bold">Resources</h2>
                            <FooterLink to="/ios-android">IOS & Android</FooterLink>
                            <FooterLink to="/watch-a-demo">Watch a Demo</FooterLink>
                            <FooterLink to="/customers">Customers</FooterLink>
                            <FooterLink to="/api">API</FooterLink>
                        </div>

                        {/* İletişim */}
                        <div>
                            <h2 className="font-bold">Get In Touch</h2>
                            <div className="flex flex-row gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="border border-gray-300 p-2 rounded-md flex-1"
                                />
                                <button className="bg-buttonFullBlue hover:bg-buttonFullBlueHover text-white font-bold py-2 px-4 rounded">
                                    Subscribe
                                </button>
                            </div>
                            <p className="pt-2 text-textColorLightGray text-sm leading-[28px]">
                                Lorem ipsum dolor sit amet
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Alt Bölüm */}
            <div className="bg-footerLightGray py-6 text-center md:text-start">
                <div className="mx-auto md:px-14 md:w-[92%]">
                    <p className="text-textColorLightGray font-semibold">
                        Made With Love By Finland. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

// Reusable Footer Link Component
const FooterLink = ({ to, children }) => (
    <Link to={to} className="text-textColorLightGray block hover:text-buttonFullBlue">
        {children}
    </Link>
);

export default Footer;

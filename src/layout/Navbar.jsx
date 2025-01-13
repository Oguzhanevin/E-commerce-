import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const onToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const onToggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <header className="bg-white my-10">
            <nav className="flex justify-between items-center w-[92%] mx-auto">
                {/* Logo and Mobile Menu Toggle */}
                <div className="flex items-center space-x-4">
                    <span className="text-2xl font-bold mr-16">Bandage</span>
                    <i
                        className={`fas fa-bars text-3xl cursor-pointer md:hidden`}
                        onClick={onToggleMenu}
                    ></i>
                </div>

                {/* Navigation Links */}
                <div
                    className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit ${menuOpen ? "top-[9%]" : "top-[-100%]"} md:w-auto w-full flex items-center px-5`}
                >
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                        <li>
                            <Link to="/" className="hover:text-gray-700">Home</Link>
                        </li>

                        {/* Dropdown for Shop */}
                        <li className="relative group">
                            <button
                                onMouseEnter={onToggleDropdown}
                                onMouseLeave={onToggleDropdown}
                                className="hover:text-gray-700"
                            >
                                Shop <i className={`fas ${dropdownOpen ? "fa-angle-down" : "fa-angle-up"}`}></i>
                            </button>
                            {dropdownOpen && (
                                <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg group-hover:block">
                                    <div className="p-4 grid grid-cols-2 gap-4">
                                        {/* Kadın Dropdown */}
                                        <div>
                                            <h3 className="font-semibold">Kadın</h3>
                                            <ul>
                                                <li>
                                                    <Link to="/shop/kadin/etek" className="block px-4 py-2 hover:bg-gray-100">Etek</Link>
                                                </li>
                                                <li>
                                                    <Link to="/shop/kadin/tayt" className="block px-4 py-2 hover:bg-gray-100">Tayt</Link>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Erkek Dropdown */}
                                        <div>
                                            <h3 className="font-semibold">Erkek</h3>
                                            <ul>
                                                <li>
                                                    <Link to="/shop/erkek/gomlek" className="block px-4 py-2 hover:bg-gray-100">Gömlek</Link>
                                                </li>
                                                <li>
                                                    <Link to="/shop/erkek/kravat" className="block px-4 py-2 hover:bg-gray-100">Kravat</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>

                        {/* Other Navigation Links */}
                        <li>
                            <Link to="/about" className="hover:text-gray-700">About</Link>
                        </li>
                        <li>
                            <Link to="/blog" className="hover:text-gray-700">Blog</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-gray-700">Contact</Link>
                        </li>
                        <li>
                            <Link to="/pages" className="hover:text-gray-700">Pages</Link>
                        </li>
                    </ul>
                </div>

                {/* Right Side Icons and Login */}
                <div className="flex items-center gap-6">
                    <Link to="/login" className="hidden md:block text-blue-500 hover:underline">
                        Login / Register
                    </Link>
                    <i className="fas fa-search text-gray-700 cursor-pointer"></i>
                    <i className="fas fa-shopping-cart text-gray-700 cursor-pointer"></i>
                    <i className="fas fa-user text-gray-700 cursor-pointer hidden md:block"></i>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const HeaderMenuItems = ({ closeMenu }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories);

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !event.target.closest(".dropdown-toggle")
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const replaceTurkishCharacters = (str) => {
    const map = {
      ç: "c",
      Ç: "C",
      ğ: "g",
      Ğ: "G",
      ı: "i",
      İ: "I",
      ö: "o",
      Ö: "O",
      ş: "s",
      Ş: "S",
      ü: "u",
      Ü: "U",
    };

    return str.replace(/[çÇğĞıİöÖşŞüÜ]/g, (match) => map[match] || match);
  };

  const womenCategories = categories.filter((category) => category.id <= 8);
  const menCategories = categories.filter((category) => category.id > 8);

  return (
    <div>
      <div className="flex justify-center md:flex items-center md:mx-16">
        <div className="flex flex-col md:flex-row md:mx-6 font-sans">
          <Link
            to="/"
            className="font-bold my-1 text-[#737373] md:mx-2 md:my-0"
            onClick={closeMenu}
          >
            Home
          </Link>

          <div
            className="md:flex items-center font-semibold my-1 text-[#252B42] md:mx-2 md:my-0 cursor-pointer dropdown-toggle"
            onClick={toggleDropdown}
          >
            Shop{" "}
            <FontAwesomeIcon icon={faChevronDown} size="xs" className="ml-2" />
          </div>

          {showDropdown && (
            <div
              ref={dropdownRef}
              className="absolute md:mt-6 md:ml-16 top-0 left-0 md:top-auto md:left-auto bg-white shadow-md z-10 flex flex-col md:flex-row w-full md:w-auto"
            >
              <div className="w-1/2">
                <div className="font-semibold text-[#252B42] mt-2 mb-2 mx-2 md:p-2">
                  Kadın
                </div>
                {womenCategories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/shop/kadin/${replaceTurkishCharacters(
                      category.title.toLowerCase()
                    )}/${category.id}`}
                    className="md:flex my-1 text-[#737373] md:mx-2 md:my-0 md:p-2 flex items-center"
                    onClick={() => {
                      setShowDropdown(false);
                      closeMenu();
                    }}
                  >
                    <img
                      src={category.img}
                      alt={category.title}
                      className="w-10 h-10 mr-2"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                    {category.title}
                  </Link>
                ))}
              </div>
              <div className="w-1/2">
                <div className="font-semibold text-[#252B42] mt-2 mb-2 mx-2 md:p-2">
                  Erkek
                </div>
                {menCategories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/shop/erkek/${replaceTurkishCharacters(
                      category.title.toLowerCase()
                    )}/${category.id}`}
                    className="md:flex my-1 text-[#737373] md:mx-2 md:my-0 md:p-2 flex items-center"
                    onClick={() => {
                      setShowDropdown(false);
                      closeMenu();
                    }}
                  >
                    <img
                      src={category.img}
                      alt={category.title}
                      className="w-10 h-10 mr-2"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <Link
            to="/about"
            className="md:block font-bold my-1 text-[#737373] md:mx-2 md:my-0"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/blog"
            className="md:block font-bold my-1 text-[#737373] md:mx-2 md:my-0"
            onClick={closeMenu}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="font-bold my-1 text-[#737373] md:mx-2 md:my-0"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link
            to="/team"
            className="md:block font-bold my-1 text-[#737373] md:mx-2 md:my-0"
            onClick={closeMenu}
          >
            Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenuItems;

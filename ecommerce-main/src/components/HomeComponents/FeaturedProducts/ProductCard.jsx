import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

const ProductCard = () => {
  const history = useHistory();
  const location = useLocation();
  const productList = useSelector((state) => state.product.productList);
  const fetchState = useSelector((state) => state.product.fetchState);

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

    return str
      .replace(/[çÇğĞıİöÖşŞüÜ]/g, (match) => map[match] || match)
      .replace(/\s+/g, "-") // Boşlukları tire ile değiştir
      .toLowerCase();
  };

  const handleClick = (product) => {
    const currentUrl = location.pathname.split("/");
    const gender = currentUrl[2]; // URL'deki gender parametresini al
    const categoryName = currentUrl[3]; // URL'deki categoryName parametresini al
    const categoryId = currentUrl[4]; // URL'deki categoryId parametresini al
    const productNameSlug = replaceTurkishCharacters(product.name);
    const productId = product.id;
    const url = `/shop/${gender}/${categoryName}/${categoryId}/${productNameSlug}/${productId}`;
    history.push(url);
  };

  return (
    <>
      {fetchState === "FETCHING" && (
        <div className="flex justify-center items-center">
          <svg
            className="animate-spin h-5 w-5 mr-3 text-[#252B42]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.794A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.144zM12 20a8 8 0 01-8-8h-4c0 6.627 5.373 12 12 12v-4zm8-7.794A7.962 7.962 0 0120 12h-4c0-3.042-1.135-5.824-3-7.938l-3 2.144z"
            ></path>
          </svg>
          <span>Fetching products...</span>
        </div>
      )}
      {productList.map((product) => (
        <div
          key={product.id}
          className="bg-white overflow-hidden mt-6 mx-auto md:max-w-full md:flex md:items-center md:flex-col"
          onClick={() => handleClick(product)}
        >
          <div className="relative">
            <img
              src={product.images[0].url}
              alt={product.name}
              className="flex justify-center w-full h-[427px] md:h-[427px] md:w-[239px] object-cover cursor-pointer"
            />
          </div>
          <div className="pt-4 mt-4 text-center font-sans text-[#252B42]">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <h2 className="p-2 text-base font-bold text-[#737373]">
              {product.department}
            </h2>
            <p className="mt-4 mx-24 md:mx-0 text-base text-[#737373] font-semibold">
              <span className="text-[#BDBDBD]">${product.price}</span>{" "}
              <span className="text-[#23856D] pl-2">
                {product.discountedPrice}
              </span>
            </p>
            <div className="mt-4 flex justify-center space-x-2">
              <div className="w-5 h-5 bg-[#23A6F0] rounded-full"></div>
              <div className="w-5 h-5 bg-[#23856D] rounded-full"></div>
              <div className="w-5 h-5 bg-[#E77C40] rounded-full"></div>
              <div className="w-5 h-5 bg-[#252B42] rounded-full"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;

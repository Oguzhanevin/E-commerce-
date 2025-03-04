import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import ProductDetailButtons from "./ProductDetailButtons";

const ProductDetailCarouselText = () => {
  const { productId } = useParams();
  const productList = useSelector((state) => state.product.productList);
  const fetchState = useSelector((state) => state.product.fetchState);

  // URL'deki productId'ye göre ürünü bulma
  const product = productList.find((p) => p.id.toString() === productId);

  if (fetchState === "FETCHING") {
    return (
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
        <span>Fetching product details...</span>
      </div>
    );
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  // Rating değerine göre yıldız ikonlarını hesaplama
  const renderStars = (rating) => {
    const totalStars = 5;
    const solidStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = totalStars - solidStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="text-[#F3CD03] flex items-center">
        {[...Array(solidStars)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={solidStar}
            style={{ marginRight: "4px" }}
          />
        ))}
        {hasHalfStar && (
          <FontAwesomeIcon
            icon={solidStar}
            style={{ marginRight: "4px", opacity: 0.5 }}
          />
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={regularStar}
            style={{ marginRight: "4px" }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="font-sans mt-12 md:mt-0">
      <h2 className="font-bold text-[#252B42] text-xl">{product.name}</h2>
      <div className="flex flex-row items-center mt-2">
        {renderStars(product.rating)}
        <p className="ml-2 text-[#737373] font-bold text-sm">
          {product.reviews} Rating: {product.rating}
        </p>
      </div>
      <div className="mt-6">
        <p className="font-bold text-[#252B42] text-2xl">${product.price}</p>
        <p>
          <span className="text-[#737373] font-bold text-xs pr-2">
            Availability :
          </span>
          <span className="text-[#23A6F0] font-bold text-xs">In Stock</span>
        </p>
      </div>
      <div className="mt-6 md:mr-36">
        <p className="text-[#737373] font-bold">{product.description}</p>
        <hr className="my-6 border-b-2" />
        <div className="mt-4 flex justify-start space-x-2">
          <div className="w-7 h-7 bg-[#23A6F0] rounded-full"></div>
          <div className="w-7 h-7 bg-[#23856D] rounded-full"></div>
          <div className="w-7 h-7 bg-[#E77C40] rounded-full"></div>
          <div className="w-7 h-7 bg-[#252B42] rounded-full"></div>
        </div>
        <ProductDetailButtons product={product} />
      </div>
    </div>
  );
};

export default ProductDetailCarouselText;

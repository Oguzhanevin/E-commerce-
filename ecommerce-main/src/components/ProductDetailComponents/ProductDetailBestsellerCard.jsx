import React, { useEffect } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/thunks/productThunks";

const ProductDetailBestsellerCards = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.productList);
  const fetchState = useSelector((state) => state.product.fetchState);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (categoryId) {
      dispatch(getProducts(categoryId));
    }
  }, [categoryId, dispatch]);

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

  if (fetchState === "FETCHING") {
    return <div>Loading...</div>;
  }

  if (fetchState === "ERROR") {
    return <div>Error fetching products</div>;
  }

  // İlk 3 ürünü göstermek için
  const topProducts = products.slice(0, 3);

  return (
    <div className="flex flex-wrap justify-center md:justify-center gap-10 mt-6">
      {topProducts.map((product) => (
        <div
          key={product.id}
          className="bg-white overflow-hidden mt-6 w-full md:w-1/4 flex flex-col items-center cursor-pointer"
          onClick={() => handleClick(product)}
        >
          <div className="relative">
            <img
              src={
                product.images[0]?.url ||
                "./images/product-detail-bestseller.jpg"
              }
              alt={product.name}
              className="flex justify-center w-full h-[427px] md:h-[427px] md:w-full object-cover cursor-pointer"
            />
          </div>
          <div className="pt-4 mt-4 text-start font-sans text-[#252B42]">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <h2 className="text-base font-bold text-[#737373] mt-4">
              {product.department}
            </h2>
            <p className="mt-4 text-base text-[#737373] font-semibold text-center">
              <span className="text-[#23856D] text-center">
                ${product.price}
              </span>{" "}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetailBestsellerCards;

import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ShopClothsCard = () => {
  const categories = useSelector((state) => state.product.categories);

  // Kategorileri rating değerine göre büyükten küçüğe sırala
  const sortedCategories = categories.sort((a, b) => b.rating - a.rating);

  // En yüksek 5 ratinge sahip kategorileri al
  const top5Categories = sortedCategories.slice(0, 5);

  const history = useHistory();

  const handleCardClick = (category) => {
    const gender = category.gender === "k" ? "kadin" : "erkek";
    const title = category.title
      .toLowerCase()
      .replace(/[çÇğĞıİöÖşŞüÜ]/g, (match) => {
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
        return map[match] || match;
      });
    history.push(`/shop/${gender}/${title}/${category.id}`);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {top5Categories.map((category, index) => (
        <div key={category.id} className="w-full p-1 md:w-1/5">
          <div
            className="relative flex justify-center items-center cursor-pointer md:mx-4"
            onClick={() => handleCardClick(category)}
          >
            <span className="absolute text-center text-white text-lg font-bold py-1 px-3 rounded-sm font-sans drop-shadow-black">
              <p>{category.title}</p>
              <p className="mt-6">{category.rating}</p>
            </span>
            <img
              className="w-[332px] h-[300px] md:w-[210px] md:h-[210px] object-cover"
              src={category.img}
              alt={category.title}
            />
          </div>
          {/* Eğer son kategori değilse, bir boşluk bırak */}
          {index !== top5Categories.length - 1 && <div className="mt-6"></div>}
        </div>
      ))}
    </div>
  );
};

export default ShopClothsCard;

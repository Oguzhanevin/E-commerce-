import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAws,
  faHooli,
  faLyft,
  faPiedPiperHat,
  faRedditAlien,
  faStripe,
} from "@fortawesome/free-brands-svg-icons";

const ShopBrands = () => {
  return (
    <div>
      <div className="flex flex-col text-center md:flex md:flex-row md:justify-between">
        <button>
          <FontAwesomeIcon
            icon={faHooli}
            className="cursor-pointer mx-1 size-24 text-[#737373]"
          />
        </button>
        <button>
          <FontAwesomeIcon
            icon={faLyft}
            className="cursor-pointer mx-1 size-24 text-[#737373]"
          />
        </button>
        <button>
          <FontAwesomeIcon
            icon={faPiedPiperHat}
            className="cursor-pointer mx-1 size-24 text-[#737373]"
          />
        </button>
        <button>
          <FontAwesomeIcon
            icon={faStripe}
            className="cursor-pointer mx-1 size-24 text-[#737373]"
          />
        </button>
        <button>
          <FontAwesomeIcon
            icon={faAws}
            className="cursor-pointer mx-1 size-24 text-[#737373]"
          />
        </button>
        <button>
          <FontAwesomeIcon
            icon={faRedditAlien}
            className="cursor-pointer mx-1 size-24 text-[#737373]"
          />
        </button>
      </div>
    </div>
  );
};

export default ShopBrands;

import React from "react";
import { useHistory } from "react-router-dom";
import {
  faCalendar,
  faChartSimple,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PracticeCard = ({ image, title, description, date, comments, url }) => {
  const history = useHistory();

  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <div>
      <div className="mt-10 mx-12 md:mx-2 max-w-sm rounded overflow-hidden shadow-lg bg-white font-sans">
        <div
          className="relative"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          <span className="absolute top-4 left-4 bg-[#E74040] text-white text-xs font-bold py-1 px-3 rounded-sm">
            NEW
          </span>
          <img
            className="w-full h-[300px] object-cover"
            src={image}
            alt={title}
          />
        </div>
        <div className="px-6 py-4">
          <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500 font-semibold">
            <span className="text-[#8EC2F2]">Google</span>
            <span>Trending</span>
            <span>New</span>
          </div>
          <h3 className="font-bold text-xl mt-4 mb-2 text-[#252B42]">
            {title}
          </h3>
          <p className="mt-4 text-[#737373] text-base font-semibold">
            {description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex flex-row items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <FontAwesomeIcon icon={faCalendar} className="text-[#23A6F0]" />
            <span className="ml-1 font-semibold">{date}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <FontAwesomeIcon icon={faChartSimple} className="text-green-500" />
            <span className="ml-1 font-semibold">{comments} comments</span>
          </div>
        </div>
        <div className="px-2 pt-4 pb-2">
          <button
            className="bg-transparent text-[#737373] py-2 px-4 rounded-full text-sm font-bold"
            onClick={handleClick}
          >
            Learn More
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-[#23A6F0] fa-xl ml-2"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PracticeCard;

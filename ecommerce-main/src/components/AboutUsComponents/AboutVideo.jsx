import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const AboutVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div className="relative md:flex md:justify-center">
      <div
        className="absolute inset-0 flex items-center justify-center md:mt-24"
        onClick={handlePlay}
      >
        {!isPlaying && (
          <FontAwesomeIcon
            icon={faPlay}
            className="bg-[#23A6F0] text-white rounded-full w-16 h-16"
            style={{ width: "1rem", height: "1rem", padding: "1rem" }}
          />
        )}
      </div>
      <video
        ref={videoRef}
        className="absolute top-0 md:mt-32 w-full h-[380px] md:h-[540px] md:w-[1140px] object-cover rounded-lg"
        style={{ display: isPlaying ? "block" : "none" }}
        controls
      >
        <source src="/videos/wit-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img
        src="/images/about-video.jpg"
        alt=""
        className="mt-32 w-full h-[380px] md:h-[540px] md:w-[1140px] object-cover rounded-lg cursor-pointer"
        onClick={handlePlay}
      />
    </div>
  );
};

export default AboutVideo;

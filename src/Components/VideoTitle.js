import React from "react";
import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VideoTitle = ({ overview, title }) => {
  return (
    <div className="absolute   top-64  left-16 text-white">
      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-4">{title}</h1>
      
      {/* Overview */}
      <p className="text-lg w-1/2 leading-relaxed text-gray-300 mb-6">
        {overview || "Discover a world of movies, shows, and more tailored just for you. Stream your favorite titles anytime, anywhere."}
      </p>
      
      {/* Buttons */}
      <div className="flex items-center gap-4">
        {/* Play Button */}
        <button className="flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-300">
          <FontAwesomeIcon icon={faPlay} className="text-lg" />
          Play
        </button>
        
        {/* More Info Button */}
        <button className="flex items-center gap-2 bg-gray-700/80 text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-600">
          <FontAwesomeIcon icon={faInfoCircle} className="text-lg" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

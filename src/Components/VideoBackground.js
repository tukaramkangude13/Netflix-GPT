import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";

const VideoBackground = ({Title}) => {
  const [videoKey, setVideoKey] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  // Fetch video key from TMDb API
  const getMovieVideo = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/912649/videos?language=en-US",
        API_OPTIONS
      );
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setVideoKey(data.results[0].key); // Use the first video key
      } else {
        console.error("No video results found.");
      }
    } catch (error) {
      console.error("Failed to fetch movie video:", error);
    }
  };

  // Handle scroll effect
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    getMovieVideo();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full   h-screen overflow-hidden">
      {/* Video Background */}
      {videoKey ? (
        <iframe
          className="absolute top-0 left-0 w-[1600px] h-[800px] -z-10"
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoKey}&modestbranding=1&rel=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p className="text-white text-center mt-10">Loading video background...</p>
      )}

      {/* Gradient Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black via-black/20 to-black pointer-events-none"
        style={{
          opacity: 1 - scrollY / 300, // Adjust gradient opacity dynamically
        }}
      ></div>

      {/* Header (Dynamic on Scroll) */}
      <div
        className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
          scrollY > 50 ? "bg-black/80" : "bg-transparent"
        }`}
      >
       
      </div>

      
    </div>
  );
};

export default VideoBackground;

import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground"; // Ensure this matches the export type
import VideoTitle from "./VideoTitle"; // Ensure this matches the export type

const Maincontainer = () => {
  // Select movies from the Redux store
  const movies = useSelector((state) => state?.movies?.nowplayingmovies);
  
  // Add a condition to check if movies array is not empty
  if (!movies || movies.length === 0) {
    return <p>No movies available.</p>; // You can show a loading or empty state if there are no movies
  }

  // Now destructure safely from movies[0]
  const { id, title, overview } = movies[0];

  return (
    <div className="       " >
      <VideoBackground id={id} />
      <VideoTitle overview={overview} title={title} />
    </div>
  );
};

export default Maincontainer;

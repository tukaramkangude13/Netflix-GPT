import React from 'react';
import { useSelector } from 'react-redux';
import MoviesList from './MoviesList';

const SecondaryContainer = () => {
  const Playing = useSelector((state) => state.movies);
  const toprated = useSelector((state) => state.movie.nowplayingmovies1);
  const now=toprated?.results;
const nowPlaying=Playing?.nowplayingmovies;

  
if(!now||!nowPlaying) return;
console.log( "now playing Movies"  ,now);
console.log( "now playing Movies"  ,nowPlaying);

return (
  
    <div className="relative  z-10 bg-black  scrollbar-hide  flex  flex-col     ">
  <div className=' -mt-40'>
  <MoviesList props={nowPlaying}  title={"nowPlaying"}    />

  </div>
     <MoviesList props={nowPlaying}  title={"nowPlaying"}    />
     <MoviesList props={now}   title={"nowPlaying"}   />
     <MoviesList props={nowPlaying}  title={"nowPlaying"}    />
     
    </div>
  );
};

export default SecondaryContainer;

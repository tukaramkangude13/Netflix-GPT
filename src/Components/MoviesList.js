import React from 'react';
import { MOVIE_LIST_URL } from '../utils/constant';
import MoviesCard from './MoviesCard';

const MoviesList = ({ props,title }) => {
  console.log(props)
  if(!props) return;
   return (
 <div>
<h1  className='  text-lg font-bold  text-white  '> {title} </h1>
<div className=' flex overflow-x-scroll'>
  <div className='  flex  scrollbar-hide '       >
    {props?.map((movie)=>(
      <MoviesCard  key={movie.id} poster_path={movie.poster_path}   />
    ))}
  </div>
</div>


 </div>
  );
};

export default MoviesList;

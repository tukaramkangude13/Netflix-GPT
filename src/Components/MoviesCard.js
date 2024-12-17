import React from 'react'
import { MOVIE_LIST_URL } from '../utils/constant'

const MoviesCard = ({id, poster_path}) => {
  return (
    <div className='w-72 h-72'>
        <img  
            className='w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-125 hover:scale-x-150 hover:shadow-xl hover:z-20 px-4' 
            src={MOVIE_LIST_URL + poster_path} 
            alt='tukaram'
        />
    </div>
  )
}

export default MoviesCard

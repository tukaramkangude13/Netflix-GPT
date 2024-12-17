import React from 'react'
import { useDispatch } from 'react-redux';
import { addnowplayingmovies } from '../../utils/movieslice';
import { API_OPTIONS } from '../../utils/constant';
import { useEffect } from 'react';
const useNowPlayingMovie = () => {
const dispatch=useDispatch();
    const fetchNowPlayingMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=hi-IN&page=1',
        API_OPTIONS
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      dispatch(addnowplayingmovies(data.results)); // Dispatching only the "results" array
      console.log(data.results); 
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    }
  };

  useEffect(() => {
    fetchNowPlayingMovies(); // Call the function to fetch movies
  }, []);
}

export default useNowPlayingMovie;
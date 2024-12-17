import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addnowplayingmovies1 } from '../../utils/toprated';
import { API_OPTIONS } from '../../utils/constant';

const useNowPlayingMovie1 = () => {
  const dispatch = useDispatch();

  const fetchNowPlayingMovies1 = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?language=hi-IN&page=1',
        API_OPTIONS
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      dispatch(addnowplayingmovies1(data)); // Dispatching the "genres" array
      console.log(data);
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    }
  };

  useEffect(() => {
    fetchNowPlayingMovies1(); // Call the function to fetch movies
  }, [dispatch]);

  // Optionally return a state or status (like loading or error)
  return null;
};

export default useNowPlayingMovie1;

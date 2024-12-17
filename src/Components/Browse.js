import React, { useEffect, useState } from 'react';
import useNowPlayingMovie from './hooks/useNowPlayingMovie';
import Maincontainer from './maincontainer';
import Secondarycontainer from './secondarycontainer';
import Header from './Header';
import useNowPlayingMovie1 from './hooks/useNowPlayingMovie1';
const Browse = () => {
useNowPlayingMovie();
useNowPlayingMovie1();
console.log("api is called ")
  return (
    <div>
       <Header/>
<Maincontainer/>
<Secondarycontainer/>

        <p>
          {/* {movie?.map((x)=>(
            <div>  {x?.original_title} +{x?.adult}   </div>
          ))} */}
        </p>
    </div>
  );
};

export default Browse;

import React , { useState } from 'react';
import MovieCard from './MovieCard';


function MovieList(props) {
    
    console.log(props)
    return (
     <div className="listMovies">

         {props.movies.map(el => <MovieCard movie={el}/>)}
     </div>
    );
  }
  
  export default MovieList;
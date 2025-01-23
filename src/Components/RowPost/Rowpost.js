import React, { useState, useEffect } from 'react';
import { API_KEY } from '../constants/constants';
import './RowPost.css'

import axios from '../axios'
function Rowpost(props) {
const [movies, setMovies]=useState([])

useEffect(()=>{
  axios.get(props.url)
  .then(response=>{
    console.log(response.data)
    setMovies(response.data.results)
  }).catch(err=>{
   // alert("ERROR")
  })
}, [])

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((movie)=>
        <img
        key={movie.id}
        className={props.isSmall ? 'smallposter':'poster'}
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
      />
        )}

      
      </div>
    </div>
  )
}

export default Rowpost

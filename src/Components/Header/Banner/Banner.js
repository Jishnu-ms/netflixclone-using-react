import React, { useEffect, useLayoutEffect, useState } from 'react'
import './Banner.css';
import axios from '../../axios'
import {API_KEY} from '../../constants/constants'
import { useFormState } from 'react-dom';
function Banner() {
  const [movie, setMovie]=useState()
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
      .then((response) => {
        console.log(response.data.results[2]); // Logs the trending movies data
      setMovie(response.data.results[2])
      
      })
      .catch((error) => {
        console.error('Error fetching trending movies:', error);
      });
  }, []);
  return (
    <div className="banner"
    style={{
      backgroundImage: movie
        ? `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`
        : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    }}>
        <div className='content'>
        <h1 className="title">{movie ? movie.title : 'Loading...'}</h1>
            <div className='banner_buttons'>
                <button className='button'>PLAY</button>
                <button className='button'>MY_LIST</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : 'Loading...'}
            </h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner

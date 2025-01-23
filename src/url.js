import React from 'react';
import { API_KEY } from './Components/constants/constants';

export const originals=`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
export const action=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
export const comedy=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`
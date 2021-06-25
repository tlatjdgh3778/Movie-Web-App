import React from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;

const getPopularMovie = async () => {
    try {
        const popularData = await fetch(`
        https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`);
        
        const popularDataResponse = await popularData.json();

        return popularDataResponse;
    }catch(error) {
        console.log(error);
    }  
}

const getNowplayingMovie = async () => {
    try {
        const nowplayingData = await fetch(`
        https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`);
        
        const nowplayingDataResponse = await nowplayingData.json();

        return nowplayingDataResponse;
    }catch(error) {
        console.log(error);
    }  
}

const getTopratedMovie = async () => {
    try {
        const topRatedData = await fetch(`
        https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`);
        
        const topRatedDataResponse = await topRatedData.json();

        return topRatedDataResponse;
    }catch(error) {
        console.log(error);
    }  
}

const getTrendingMovie = async () => {
    try {
        const trendingData = await fetch(`
        https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=ko-KR&page=1`);
        
        const trendingDataResponse = await trendingData.json();
        return trendingDataResponse
    }catch(error) {
        console.log(error);
    }  
}

const getSearchMovie = async (data) => {
    try {
        const searchMovie = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ko&query=${data}&page=1&include_adult=false`);

        const searchMovieResponse = await searchMovie.json();

        return searchMovieResponse;
    }catch(error) {
        console.log(error);
    }
}
export { getPopularMovie, getNowplayingMovie, getTopratedMovie, getTrendingMovie, getSearchMovie };
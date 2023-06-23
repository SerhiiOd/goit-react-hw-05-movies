import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'b5ec273f41ed5d13bd669af204d5b017';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}trending/movie/day`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

  return response.data.results;
};

export const fetchDetailsMovies = async id => {
  const response = await axios.get(`${BASE_URL}movie/${id}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

  return response.data;
};

export const fetchCreditsMovies = async id => {
  const response = await axios.get(`${BASE_URL}movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

  return response.data.cast;
};

export const fetchReviewsMovies = async id => {
  const response = await axios.get(`${BASE_URL}movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

  return response.data.results;
};

export const fetchSearchMovies = async query => {
  const response = await axios.get(`${BASE_URL}search/movie`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      query: query,
    },
  });

  return response.data.results;
};

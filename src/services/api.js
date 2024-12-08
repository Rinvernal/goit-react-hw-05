import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzFiZWRlYzE1ODhlMjk1MDRhOTRjMzQ4OGZjYTAzOSIsIm5iZiI6MTczMzQ5MDY3NC4zNDksInN1YiI6IjY3NTJmN2YyZGYzYWU5N2UxYzJmMjYwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yr8oZ3OwG7oapAplu7Y-2_Hwk7plSTjTdThaCbWaCtc"; // Замініть на свій актуальний токен

const options = {
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

export const fetchMovies = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/trending/movie/day`, options);
    return data.results; 
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/search/movie`, {
      ...options,
      params: {
        query
      },
    });
    return data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      ...options,
    });
    return data;
  } catch (error) {
    console.error(`Error fetching details for movie ID ${movieId}:`, error);
    throw error;
  }
};

export const fetchMovieCast = async (movieId) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
      ...options,
    });
    return data.cast;
  } catch (error) {
    console.error(`Error fetching cast for movie ID ${movieId}:`, error);
    throw error;
  }
};

export const fetchMovieReviews = async (movieId) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      }
    });
    return data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return { results: [] };
  }
};

export const getImageUrl = (path, size = "w500") => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};
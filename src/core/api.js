const API_KEY = "64ac986c586016d0646be000556db945";
const BASE_URL = "https://api.themoviedb.org/3";

/**
 * Uniwersalny fetcher
 */
const fetchFromAPI = async (endpoint) => {
  try {
    const response = await fetch(
      `${BASE_URL}${endpoint}&api_key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};

/* =========================
   MOVIES
   ========================= */

export const getPopularMovies = (page = 1) =>
  fetchFromAPI(`/movie/popular?page=${page}&`);

export const getMovieDetails = (movieId) =>
  fetchFromAPI(`/movie/${movieId}?`);

/* =========================
   PEOPLE
   ========================= */

export const getPopularPeople = (page = 1) =>
  fetchFromAPI(`/person/popular?page=${page}&`);

export const getPersonDetails = (personId) =>
  fetchFromAPI(`/person/${personId}?`);

/* =========================
   SEARCH
   ========================= */

export const searchMovies = (query, page = 1) =>
  fetchFromAPI(
    `/search/movie?query=${encodeURIComponent(query)}&page=${page}&`
  );

export const searchPeople = (query, page = 1) =>
  fetchFromAPI(
    `/search/person?query=${encodeURIComponent(query)}&page=${page}&`
  );

/* =========================
   GENRES
   ========================= */

export const getGenres = () =>
  fetchFromAPI(`/genre/movie/list?`);

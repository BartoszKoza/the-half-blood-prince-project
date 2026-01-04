import { useEffect, useState, useCallback } from "react";
import { getPopularMovies, getGenres, searchMovies } from "../../core/api";

const MOVIES_PER_PAGE = 8;
const API_PAGE_SIZE = 20;

export function useMovies({ page, searchQuery }) {
  const [movies, setMovies] = useState([]);
  const [genreMap, setGenreMap] = useState({});
  const [totalPages, setTotalPages] = useState(1);
  const [filteredTotal, setFilteredTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGenres = async () => {
      const genresData = await getGenres();
      if (genresData?.genres) {
        const map = {};
        genresData.genres.forEach((g) => (map[g.id] = g.name));
        setGenreMap(map);
      }
    };
    fetchGenres();
  }, []);

  const loadMovies = useCallback(async () => {
    setLoading(true);
    setError(false);

    const apiPage = Math.ceil((page * MOVIES_PER_PAGE) / API_PAGE_SIZE);
    const moviesData = searchQuery
      ? await searchMovies(searchQuery, apiPage)
      : await getPopularMovies(apiPage);

    if (!moviesData) {
      setError(true);
      setLoading(false);
      return;
    }

    let results = moviesData.results || [];

    if (searchQuery) {
      const escaped = searchQuery.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const re = new RegExp(`\\b${escaped}\\b`, "i");
      results = results.filter(
        (m) => re.test(m.title || "") || re.test(m.original_title || "")
      );
    }

    setFilteredTotal(results.length);

    const startIndex = ((page - 1) * MOVIES_PER_PAGE) % API_PAGE_SIZE;
    setMovies(results.slice(startIndex, startIndex + MOVIES_PER_PAGE));
    setTotalPages(Math.min(moviesData.total_pages || 1, 500));
    setLoading(false);
  }, [page, searchQuery]);

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  return {
    movies,
    genreMap,
    totalPages,
    filteredTotal,
    loading,
    error,
  };
}

import { useEffect, useState, useCallback } from "react";
import Tile from "../../components/Tile";
import { getPopularMovies, getGenres } from "../../core/api";
import { Page, MoviesGrid, SectionTitle, Content } from "./styled";
import { useCallback, useEffect, useState } from "react";
import Tile from "../../components/Tile";
import { getPopularMovies, getGenres, searchMovies } from "../../core/api";
import { Page, MoviesGrid, SectionTitle } from "./styled";
import { Pagination } from "../../components/Pagination";
import {useLocation, useNavigate } from "react-router-dom";

const MOVIES_PER_PAGE = 8;
const API_PAGE_SIZE = 20;

export default function MovieList() {

  const location = useLocation();
  const navigate = useNavigate();
  
  const params = new URLSearchParams(location.search);
  const searchQuery = params.get("search");
  const urlPage = Number(params.get("page")) || 1;
  
  const [movies, setMovies] = useState([]);
  const [genreMap, setGenreMap] = useState({});
  const [page, setPage] = useState(urlPage);
  const [totalPages, setTotalPages] = useState(1);

  

  useEffect(() => {
    const fetchGenres = async () => {
      const genresData = await getGenres();

      if (genresData?.genres) {
        const map = {};
        genresData.genres.forEach((g) => {
          map[g.id] = g.name;
        });
        setGenreMap(map);
      }
    };

    fetchGenres();
  }, []);

  const loadData = useCallback(async (uiPage) => {
    const apiPage = Math.ceil((uiPage * MOVIES_PER_PAGE) / API_PAGE_SIZE);

    const moviesData = await getPopularMovies(apiPage);
    setPage(urlPage);
  }, [urlPage]);


  const loadData = useCallback(async (uiPage) => {
    const apiPage = Math.ceil((uiPage * MOVIES_PER_PAGE) / API_PAGE_SIZE);

    const moviesData = searchQuery
      ? await searchMovies(searchQuery, apiPage)
      : await getPopularMovies(apiPage);

    const genresData = await getGenres();

    if (moviesData) {
      const startIndex = ((uiPage - 1) * MOVIES_PER_PAGE) % API_PAGE_SIZE;

      const pageMovies = moviesData.results.slice(
        startIndex,
        startIndex + MOVIES_PER_PAGE
      );

      setMovies(pageMovies);

      const uiTotalPages = Math.ceil(
        (moviesData.total_results || 0) / MOVIES_PER_PAGE
      );

      setTotalPages(Math.min(uiTotalPages, 500));
    }
  }, []);

  useEffect(() => {
    loadData(page);
  }, [page, loadData]);

  return (
    <Page>
      <Content>
        <SectionTitle>Popular movies</SectionTitle>

        <MoviesGrid>
          {movies.map((movie) => (
            <Tile key={movie.id} movie={movie} genreMap={genreMap} />
          ))}
        </MoviesGrid>

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </Content>
    if (genresData?.genres) {
      const map = {};
      genresData.genres.forEach((g) => {
        map[g.id] = g.name;
      });
      setGenreMap(map);
    }
  },
  [searchQuery]
  );
  
  useEffect(() => {
    loadData(page);
  }, [page, loadData]);
  
  return (
    <Page>
      <SectionTitle>Popular Movies</SectionTitle>

      <MoviesGrid>
        {movies.map((movie) => (
          <Tile key={movie.id} movie={movie} genreMap={genreMap} />
        ))}
      </MoviesGrid>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(p) => {
          const next = new URLSearchParams(location.search);
          next.set("page", String (p));
          navigate({
            pathname: location.pathname,
            search: next.toString()
          })
          
        }}
      />
    </Page>
  );
}

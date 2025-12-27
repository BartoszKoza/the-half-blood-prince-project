import { useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Tile from "../../components/Tile";
import Loading from "../../components/Loading";
import { Pagination } from "../../components/Pagination";
import { getPopularMovies, getGenres, searchMovies } from "../../core/api";
import { Page, Content, MoviesGrid, SectionTitle, StyledLink } from "./styled";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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

  const loadMovies = useCallback(
    async (uiPage) => {
      setLoading(true);
      setError(false);

      const apiPage = Math.ceil((uiPage * MOVIES_PER_PAGE) / API_PAGE_SIZE);

      const moviesData = searchQuery
        ? await searchMovies(searchQuery, apiPage)
        : await getPopularMovies(apiPage);

      if (!moviesData) {
        setError(true);
        setLoading(false);
        return;
      }

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
      setLoading(false);
    },
    [searchQuery]
  );

  useEffect(() => {
    loadMovies(page);
  }, [page, loadMovies]);

  useEffect(() => {
    setPage(urlPage);
  }, [urlPage]);

  if (loading) {
    return (
      <Page>
        <Content>
          <Loading />
        </Content>
      </Page>
    );
  }

  if (error) {
  return (
    <Page>
      <Content>
        <SectionTitle>Something went wrong</SectionTitle>
      </Content>
    </Page>
  );
}


  return (
    <Page>
      <Content>
        <SectionTitle>
          {searchQuery
            ? `Search results for "${searchQuery}"`
            : "Popular Movies"}
        </SectionTitle>

        <MoviesGrid>
          {movies.map((movie) => (
            <StyledLink key={movie.id} to={`/movies/${movie.id}`}>
              <Tile movie={movie} genreMap={genreMap} />
            </StyledLink>
          ))}
        </MoviesGrid>

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={(nextPage) => {
            const nextParams = new URLSearchParams(location.search);
            nextParams.set("page", String(nextPage));

            navigate({
              pathname: location.pathname,
              search: nextParams.toString(),
            });
          }}
        />
      </Content>
    </Page>
  );
}

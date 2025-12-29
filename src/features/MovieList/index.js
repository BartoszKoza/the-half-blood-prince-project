import { useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Tile from "../../components/Tile";
import Loading from "../../components/Loading";
import { Pagination } from "../../components/Pagination";
import { getPopularMovies, getGenres, searchMovies } from "../../core/api";
import {
  Page,
  Content,
  MoviesGrid,
  SectionTitle,
  StyledLink,
  NoResultsWrapper,
} from "./styled";
import { ReactComponent as NoResultsImage } from "../../images/no-result.svg";

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

  const [filteredTotal, setFilteredTotal] = useState(0);

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

      let results = moviesData.results || [];
      if (searchQuery) {
        const q = searchQuery.trim();
        const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const re = new RegExp(`\\b${escaped}\\b`, "i");

        results = results.filter((m) => {
          const title = m.title || "";
          const original = m.original_title || "";
          return re.test(title) || re.test(original);
        });
      }

      setFilteredTotal(results.length);

      const startIndex = ((uiPage - 1) * MOVIES_PER_PAGE) % API_PAGE_SIZE;

      const pageMovies = results.slice(
        startIndex,
        startIndex + MOVIES_PER_PAGE
      );

      setMovies(pageMovies);

      const uiTotalPages = Math.ceil(results.length / MOVIES_PER_PAGE);
      setTotalPages(Math.min(uiTotalPages, 500));

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

  if (!loading && searchQuery && filteredTotal === 0) {
    return (
      <Page>
        <Content>
          <SectionTitle>
            Sorry, there are no results for "{searchQuery}"
          </SectionTitle>
          <NoResultsWrapper>
            <NoResultsImage />
          </NoResultsWrapper>
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

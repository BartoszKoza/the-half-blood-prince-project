import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Tile from "../../components/Tile";
import Loading from "../../components/Loading";
import ErrorPage from "../../components/Error";
import { Pagination } from "../../components/Pagination";
import { useMovies } from "./useMovieList";
import NoResults from "../../components/NoResults";
import { Page, Content, MoviesGrid, SectionTitle, StyledLink } from "./styled";

export default function MovieList() {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const searchQuery = params.get("search");
  const urlPage = Number(params.get("page")) || 1;

  const [page, setPage] = useState(urlPage);

  useEffect(() => {
    setPage(urlPage);
  }, [urlPage]);

  const { movies, genreMap, totalPages, filteredTotal, loading, error } =
    useMovies({ page, searchQuery });

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
    return <ErrorPage />;
  }

  if (searchQuery && filteredTotal === 0) {
    return (
      <Page>
        <Content>
          <NoResults query={searchQuery} />
        </Content>
      </Page>
    );
  }

  return (
    <Page>
      <Content>
        <SectionTitle>
          {searchQuery
            ? `Search results for "${searchQuery} (${filteredTotal})"`
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

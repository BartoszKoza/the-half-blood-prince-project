import { useEffect, useState } from "react";
import Tile from "../../components/Tile";
import { getPopularMovies, getGenres } from "../../core/api";
import { Page, MoviesGrid, SectionTitle, StyledLink } from "./styled";
import { Pagination } from "../../components/Pagination";

const MOVIES_PER_PAGE = 8;
const API_PAGE_SIZE = 20;

export default function MovieList() {
    const [movies, setMovies] = useState([]);
    const [genreMap, setGenreMap] = useState({});
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        loadData(page);
    }, [page]);

    const loadData = async (uiPage) => {
        const apiPage = Math.ceil((uiPage * MOVIES_PER_PAGE) / API_PAGE_SIZE);

        const moviesData = await getPopularMovies(apiPage);
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

        if (genresData?.genres) {
            const map = {};
            genresData.genres.forEach((g) => {
                map[g.id] = g.name;
            });
            setGenreMap(map);
        }
    };

    return (
        <Page>
            <SectionTitle>Popular Movies</SectionTitle>

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
                onPageChange={setPage}
            />
        </Page>
    );
}

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const API_KEY = "64ac986c586016d0646be000556db945";
const BASE_URL = "https://api.themoviedb.org/3";

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(
                    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch movie details");
                }

                const data = await response.json();
                setMovie(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (loading) {
        return (
            <div style={{ padding: "20px", textAlign: "center" }}>
                <p>Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ padding: "20px", textAlign: "center" }}>
                <p>Error: {error}</p>
            </div>
        );
    }

    if (!movie) {
        return null;
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>{movie.title}</h1>

            {movie.release_date && (
                <p>Year: {movie.release_date.slice(0, 4)}</p>
            )}

            {movie.vote_average && (
                <p>
                    Rating: {movie.vote_average.toFixed(1).replace(".", ",")} /
                    10
                </p>
            )}

            {movie.vote_count && <p>Votes: {movie.vote_count} votes</p>}

            {movie.genres && movie.genres.length > 0 && (
                <p>Genres: {movie.genres.map((g) => g.name).join(", ")}</p>
            )}

            {movie.overview && (
                <div>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                </div>
            )}
        </div>
    );
};

export default MovieDetails;

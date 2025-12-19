import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const API_KEY = "64ac986c586016d0646be000556db945";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState([]);
    const [crew, setCrew] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieData = async () => {
            setLoading(true);
            setError(null);

            try {
                // Fetch movie details i credits równocześnie
                const [movieResponse, creditsResponse] = await Promise.all([
                    fetch(
                        `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
                    ),
                    fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`),
                ]);

                if (!movieResponse.ok || !creditsResponse.ok) {
                    throw new Error("Failed to fetch movie data");
                }

                const movieData = await movieResponse.json();
                const creditsData = await creditsResponse.json();

                setMovie(movieData);
                setCast(creditsData.cast || []);
                setCrew(creditsData.crew || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieData();
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
        <div>
            {/* BACKDROP */}
            {movie.backdrop_path && (
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "400px",
                        marginBottom: "32px",
                    }}
                >
                    <img
                        src={`${IMAGE_BASE_URL}/w1280${movie.backdrop_path}`}
                        alt={movie.title}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background:
                                "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                            padding: "32px",
                            color: "white",
                        }}
                    >
                        <h1 style={{ margin: "0 0 16px 0", fontSize: "48px" }}>
                            {movie.title}
                        </h1>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                fontSize: "24px",
                            }}
                        >
                            ⭐ {movie.vote_average.toFixed(1).replace(".", ",")}{" "}
                            / 10
                        </div>
                    </div>
                </div>
            )}

            {/* BASIC INFO */}
            <div
                style={{
                    padding: "0 32px",
                    maxWidth: "1400px",
                    margin: "0 auto",
                }}
            >
                {movie.release_date && (
                    <p>
                        <strong>Year:</strong> {movie.release_date.slice(0, 4)}
                    </p>
                )}

                {movie.vote_count && (
                    <p>
                        <strong>Votes:</strong> {movie.vote_count} votes
                    </p>
                )}

                {movie.genres && movie.genres.length > 0 && (
                    <p>
                        <strong>Genres:</strong>{" "}
                        {movie.genres.map((g) => g.name).join(", ")}
                    </p>
                )}

                {/* CAST */}
                {cast.length > 0 && (
                    <div style={{ marginTop: "48px" }}>
                        <h2 style={{ fontSize: "36px", marginBottom: "24px" }}>
                            Cast
                        </h2>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns:
                                    "repeat(auto-fill, minmax(150px, 1fr))",
                                gap: "24px",
                            }}
                        >
                            {cast.slice(0, 12).map((person) => (
                                <div
                                    key={person.id}
                                    style={{ textAlign: "center" }}
                                >
                                    <img
                                        src={
                                            person.profile_path
                                                ? `${IMAGE_BASE_URL}/w185${person.profile_path}`
                                                : "https://via.placeholder.com/185x278?text=No+Image"
                                        }
                                        alt={person.name}
                                        style={{
                                            width: "100%",
                                            aspectRatio: "2/3",
                                            objectFit: "cover",
                                            borderRadius: "8px",
                                            marginBottom: "12px",
                                        }}
                                    />
                                    <div
                                        style={{
                                            fontWeight: "500",
                                            fontSize: "14px",
                                            marginBottom: "4px",
                                        }}
                                    >
                                        {person.name}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "13px",
                                            color: "#666",
                                        }}
                                    >
                                        as {person.character}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* CREW */}
                {crew.length > 0 && (
                    <div style={{ marginTop: "48px" }}>
                        <h2 style={{ fontSize: "36px", marginBottom: "24px" }}>
                            Crew
                        </h2>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns:
                                    "repeat(auto-fill, minmax(150px, 1fr))",
                                gap: "24px",
                            }}
                        >
                            {crew
                                .filter(
                                    (person) =>
                                        person.job === "Director" ||
                                        person.job === "Producer" ||
                                        person.job === "Writer" ||
                                        person.job === "Screenplay"
                                )
                                .slice(0, 12)
                                .map((person) => (
                                    <div
                                        key={person.credit_id}
                                        style={{ textAlign: "center" }}
                                    >
                                        <img
                                            src={
                                                person.profile_path
                                                    ? `${IMAGE_BASE_URL}/w185${person.profile_path}`
                                                    : "https://via.placeholder.com/185x278?text=No+Image"
                                            }
                                            alt={person.name}
                                            style={{
                                                width: "100%",
                                                aspectRatio: "2/3",
                                                objectFit: "cover",
                                                borderRadius: "8px",
                                                marginBottom: "12px",
                                            }}
                                        />
                                        <div
                                            style={{
                                                fontWeight: "500",
                                                fontSize: "14px",
                                                marginBottom: "4px",
                                            }}
                                        >
                                            {person.name}
                                        </div>
                                        <div
                                            style={{
                                                fontSize: "13px",
                                                color: "#666",
                                            }}
                                        >
                                            {person.job}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                )}

                {/* METADATA */}
                <div style={{ marginTop: "48px", marginBottom: "48px" }}>
                    {movie.production_countries &&
                        movie.production_countries.length > 0 && (
                            <p>
                                <strong>Production countries:</strong>{" "}
                                {movie.production_countries
                                    .map((c) => c.name)
                                    .join(", ")}
                            </p>
                        )}

                    {movie.release_date && (
                        <p>
                            <strong>Release date:</strong>{" "}
                            {new Date(movie.release_date).toLocaleDateString(
                                "en-US",
                                {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                }
                            )}
                        </p>
                    )}

                    {movie.overview && (
                        <div style={{ marginTop: "24px" }}>
                            <h3>Description</h3>
                            <p style={{ lineHeight: "1.6" }}>
                                {movie.overview}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;

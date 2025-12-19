import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const API_KEY = "64ac986c586016d0646be000556db945";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

// Responsive styles
const responsiveStyles = `
  .movie-details-backdrop {
    height: 400px;
  }

  .movie-details-title {
    font-size: 48px;
  }

  .movie-details-rating {
    font-size: 24px;
  }

  .movie-details-content {
    padding: 0 32px;
  }

  .movie-details-section-title {
    font-size: 36px;
  }

  .movie-details-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 24px;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* TABLET */
  @media (max-width: 1024px) {
    .movie-details-backdrop {
      height: 300px;
    }

    .movie-details-title {
      font-size: 36px;
    }

    .movie-details-rating {
      font-size: 20px;
    }

    .movie-details-content {
      padding: 0 24px;
    }

    .movie-details-section-title {
      font-size: 28px;
    }

    .movie-details-grid {
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 16px;
    }
  }

  /* MOBILE */
  @media (max-width: 767px) {
    .movie-details-backdrop {
      height: 250px;
    }

    .movie-details-title {
      font-size: 24px;
      margin: 0 0 8px 0 !important;
    }

    .movie-details-rating {
      font-size: 16px;
    }

    .movie-details-content {
      padding: 0 16px;
    }

    .movie-details-section-title {
      font-size: 22px;
      margin-bottom: 16px !important;
    }

    .movie-details-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }

    .movie-details-backdrop-content {
      padding: 16px !important;
    }
  }
`;

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

    // LOADING STATE
    if (loading) {
        return (
            <>
                <style>{responsiveStyles}</style>
                <div
                    style={{
                        padding: "100px 20px",
                        textAlign: "center",
                        minHeight: "400px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "20px",
                    }}
                >
                    <div
                        style={{
                            width: "60px",
                            height: "60px",
                            border: "6px solid #f3f3f3",
                            borderTop: "6px solid #3498db",
                            borderRadius: "50%",
                            animation: "spin 1s linear infinite",
                        }}
                    />
                    <p style={{ fontSize: "18px", color: "#666" }}>
                        Loading movie details...
                    </p>
                </div>
            </>
        );
    }

    // ERROR STATE
    if (error) {
        return (
            <>
                <style>{responsiveStyles}</style>
                <div
                    style={{
                        padding: "100px 20px",
                        textAlign: "center",
                        minHeight: "400px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "20px",
                    }}
                >
                    <div style={{ fontSize: "80px", marginBottom: "10px" }}>
                        ⚠️
                    </div>
                    <h2
                        style={{
                            margin: 0,
                            fontSize: "32px",
                            fontWeight: "600",
                        }}
                    >
                        Something went wrong
                    </h2>
                    <p style={{ color: "#666", margin: 0, fontSize: "16px" }}>
                        Unable to load movie details. Please try again.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            marginTop: "10px",
                            padding: "14px 32px",
                            backgroundColor: "#3498db",
                            color: "white",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            fontSize: "16px",
                            fontWeight: "500",
                            transition: "background-color 0.3s",
                        }}
                        onMouseOver={(e) =>
                            (e.target.style.backgroundColor = "#2980b9")
                        }
                        onMouseOut={(e) =>
                            (e.target.style.backgroundColor = "#3498db")
                        }
                    >
                        Try again
                    </button>
                </div>
            </>
        );
    }

    if (!movie) {
        return null;
    }

    return (
        <>
            <style>{responsiveStyles}</style>

            <div>
                {/* BACKDROP */}
                {movie.backdrop_path && (
                    <div
                        className="movie-details-backdrop"
                        style={{
                            position: "relative",
                            width: "100%",
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
                            className="movie-details-backdrop-content"
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
                            <h1
                                className="movie-details-title"
                                style={{ margin: "0 0 16px 0" }}
                            >
                                {movie.title}
                            </h1>
                            <div
                                className="movie-details-rating"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                }}
                            >
                                ⭐{" "}
                                {movie.vote_average
                                    .toFixed(1)
                                    .replace(".", ",")}{" "}
                                / 10
                            </div>
                        </div>
                    </div>
                )}

                {/* BASIC INFO */}
                <div
                    className="movie-details-content"
                    style={{
                        maxWidth: "1400px",
                        margin: "0 auto",
                    }}
                >
                    {movie.release_date && (
                        <p>
                            <strong>Year:</strong>{" "}
                            {movie.release_date.slice(0, 4)}
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
                            <h2
                                className="movie-details-section-title"
                                style={{ marginBottom: "24px" }}
                            >
                                Cast
                            </h2>
                            <div
                                className="movie-details-grid"
                                style={{
                                    display: "grid",
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
                            <h2
                                className="movie-details-section-title"
                                style={{ marginBottom: "24px" }}
                            >
                                Crew
                            </h2>
                            <div
                                className="movie-details-grid"
                                style={{
                                    display: "grid",
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
                                {new Date(
                                    movie.release_date
                                ).toLocaleDateString("en-US", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
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
        </>
    );
};

export default MovieDetails;

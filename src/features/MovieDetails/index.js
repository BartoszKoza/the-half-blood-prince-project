import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
    Container,
    Backdrop,
    BackdropImage,
    BackdropContent,
    Title,
    Rating,
    Content,
    InfoText,
    SectionTitle,
    Grid,
    PersonCard,
    PersonImage,
    PersonName,
    PersonRole,
    MetadataSection,
    DescriptionTitle,
    Description,
    LoadingContainer,
    Spinner,
    LoadingText,
    ErrorContainer,
    ErrorIcon,
    ErrorTitle,
    ErrorMessage,
    RetryButton,
} from "./styled";

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
            <LoadingContainer>
                <Spinner />
                <LoadingText>Loading movie details...</LoadingText>
            </LoadingContainer>
        );
    }

    if (error) {
        return (
            <ErrorContainer>
                <ErrorIcon>⚠️</ErrorIcon>
                <ErrorTitle>Something went wrong</ErrorTitle>
                <ErrorMessage>
                    Unable to load movie details. Please try again.
                </ErrorMessage>
                <RetryButton onClick={() => window.location.reload()}>
                    Try again
                </RetryButton>
            </ErrorContainer>
        );
    }

    if (!movie) {
        return null;
    }

    return (
        <div>
            {movie.backdrop_path && (
                <Backdrop>
                    <BackdropImage
                        src={`${IMAGE_BASE_URL}/w1280${movie.backdrop_path}`}
                        alt={movie.title}
                    />
                    <BackdropContent>
                        <Title>{movie.title}</Title>
                        <Rating>
                            ⭐ {movie.vote_average.toFixed(1).replace(".", ",")}{" "}
                            / 10
                        </Rating>
                    </BackdropContent>
                </Backdrop>
            )}

            <Container>
                <Content>
                    {movie.release_date && (
                        <InfoText>
                            <strong>Year:</strong>{" "}
                            {movie.release_date.slice(0, 4)}
                        </InfoText>
                    )}

                    {movie.vote_count && (
                        <InfoText>
                            <strong>Votes:</strong> {movie.vote_count} votes
                        </InfoText>
                    )}

                    {movie.genres && movie.genres.length > 0 && (
                        <InfoText>
                            <strong>Genres:</strong>{" "}
                            {movie.genres.map((g) => g.name).join(", ")}
                        </InfoText>
                    )}

                    {cast.length > 0 && (
                        <div>
                            <SectionTitle>Cast</SectionTitle>
                            <Grid>
                                {cast.slice(0, 12).map((person) => (
                                    <PersonCard key={person.id}>
                                        <PersonImage
                                            src={
                                                person.profile_path
                                                    ? `${IMAGE_BASE_URL}/w185${person.profile_path}`
                                                    : "https://via.placeholder.com/185x278?text=No+Image"
                                            }
                                            alt={person.name}
                                        />
                                        <PersonName>{person.name}</PersonName>
                                        <PersonRole>
                                            as {person.character}
                                        </PersonRole>
                                    </PersonCard>
                                ))}
                            </Grid>
                        </div>
                    )}

                    {crew.length > 0 && (
                        <div>
                            <SectionTitle>Crew</SectionTitle>
                            <Grid>
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
                                        <PersonCard key={person.credit_id}>
                                            <PersonImage
                                                src={
                                                    person.profile_path
                                                        ? `${IMAGE_BASE_URL}/w185${person.profile_path}`
                                                        : "https://via.placeholder.com/185x278?text=No+Image"
                                                }
                                                alt={person.name}
                                            />
                                            <PersonName>
                                                {person.name}
                                            </PersonName>
                                            <PersonRole>
                                                {person.job}
                                            </PersonRole>
                                        </PersonCard>
                                    ))}
                            </Grid>
                        </div>
                    )}

                    <MetadataSection>
                        {movie.production_countries &&
                            movie.production_countries.length > 0 && (
                                <InfoText>
                                    <strong>Production countries:</strong>{" "}
                                    {movie.production_countries
                                        .map((c) => c.name)
                                        .join(", ")}
                                </InfoText>
                            )}

                        {movie.release_date && (
                            <InfoText>
                                <strong>Release date:</strong>{" "}
                                {new Date(
                                    movie.release_date
                                ).toLocaleDateString("en-US", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </InfoText>
                        )}

                        {movie.overview && (
                            <div>
                                <DescriptionTitle>Description</DescriptionTitle>
                                <Description>{movie.overview}</Description>
                            </div>
                        )}
                    </MetadataSection>
                </Content>
            </Container>
        </div>
    );
};

export default MovieDetails;

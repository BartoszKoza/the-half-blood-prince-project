import Loading from "../../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PersonTile from "../../components/PersonTile";
import noPoster from "../../images/no-poster.png";
import star from "../../images/star.svg";
import ErrorPage from "../../components/Error";
import {
    MovieDetailsWrapper,
    Top,
    BG,
    PosterBig,
    Overlay,
    MainInfo,
    Title,
    RatingWrapper,
    Rating,
    Star as StarIcon,
    RatingText,
    Votes,
    Content,
    MovieTile,
    Poster,
    MovieData,
    MovieTitle,
    MovieYear,
    ProductionWrapper,
    ProductionRelease,
    Label,
    Value,
    Tags,
    Tag,
    DesktopDescription,
    MobileDescription,
    SectionTitle,
    PeopleRow,
    RatingRow,
    RatingValue,
    RatingVotes,
    RatingMax,
    TileStar,
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
        return <Loading text="Loading..." />;
    }

    if (error) {
        return <ErrorPage />;
    }

    if (!movie) return null;

    const posterUrl = movie.poster_path
        ? `${IMAGE_BASE_URL}/w500${movie.poster_path}`
        : noPoster;

    const backdropUrl = movie.backdrop_path
        ? `${IMAGE_BASE_URL}/w1280${movie.backdrop_path}`
        : null;

    return (
        <MovieDetailsWrapper>
            <Top>
                <BG />
                {backdropUrl && (
                    <PosterBig src={backdropUrl} alt={movie.title} />
                )}
                <Overlay />
                <MainInfo>
                    <Title>{movie.title}</Title>
                    <RatingWrapper>
                        <Rating>
                            <StarIcon src={star} alt="star" />
                            <RatingText>
                                {movie.vote_average
                                    .toFixed(1)
                                    .replace(".", ",")}
                                <RatingMax>/ 10</RatingMax>
                            </RatingText>
                        </Rating>
                        <Votes>{movie.vote_count} votes</Votes>
                    </RatingWrapper>
                </MainInfo>
            </Top>

            <Content>
                <MovieTile>
                    <Poster src={posterUrl} alt={movie.title} />

                    <MovieData>
                        <MovieTitle>{movie.title}</MovieTitle>
                        <MovieYear>{movie.release_date?.slice(0, 4)}</MovieYear>

                        <ProductionWrapper>
                            <ProductionRelease>
                                <Label>Production:</Label>
                                <Value>
                                    {movie.production_countries
                                        ?.map((c) => c.name)
                                        .join(", ")}
                                </Value>
                            </ProductionRelease>

                            <ProductionRelease>
                                <Label>Release date:</Label>
                                <Value>
                                    {movie.release_date &&
                                        new Date(
                                            movie.release_date
                                        ).toLocaleDateString("pl-PL")}
                                </Value>
                            </ProductionRelease>
                        </ProductionWrapper>

                        {movie.genres && (
                            <Tags>
                                {movie.genres.map((g) => (
                                    <Tag key={g.id}>{g.name}</Tag>
                                ))}
                            </Tags>
                        )}

                        <RatingRow>
                            <TileStar src={star} alt="star" />
                            <RatingValue>
                                {movie.vote_average
                                    .toFixed(1)
                                    .replace(".", ",")}
                                <RatingMax>/ 10</RatingMax>
                            </RatingValue>
                            <RatingVotes>{movie.vote_count} votes</RatingVotes>
                        </RatingRow>

                        {movie.overview && (
                            <DesktopDescription>
                                {movie.overview}
                            </DesktopDescription>
                        )}
                    </MovieData>

                    {movie.overview && (
                        <MobileDescription>{movie.overview}</MobileDescription>
                    )}
                </MovieTile>

                {cast.length > 0 && (
                    <>
                        <SectionTitle>Cast</SectionTitle>
                        <PeopleRow>
                            {cast.slice(0, 12).map((person) => (
                                <Link
                                    key={person.id}
                                    to={`/people/${person.id}`}
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                >
                                    <PersonTile
                                        person={person}
                                        role={person.character}
                                    />
                                </Link>
                            ))}
                        </PeopleRow>
                    </>
                )}

                {crew.length > 0 && (
                    <>
                        <SectionTitle>Crew</SectionTitle>
                        <PeopleRow>
                            {crew
                                .filter((person) =>
                                    [
                                        "Director",
                                        "Producer",
                                        "Writer",
                                        "Screenplay",
                                    ].includes(person.job)
                                )
                                .slice(0, 12)
                                .map((person) => (
                                    <Link
                                        key={person.id}
                                        to={`/people/${person.id}`}
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    >
                                        <PersonTile
                                            person={person}
                                            role={person.job}
                                        />
                                    </Link>
                                ))}
                        </PeopleRow>
                    </>
                )}
            </Content>
        </MovieDetailsWrapper>
    );
};

export default MovieDetails;

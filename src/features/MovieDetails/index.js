import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import ErrorPage from "../../components/Error";
import PersonTile from "../../components/PersonTile";
import noPoster from "../../images/no-poster.png";
import star from "../../images/star.svg";
import { useMovieDetails } from "./useMovieDetails";
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
  TileRatingMax,
  PersonLink
} from "./styled";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

export default function MovieDetails() {
  const { id } = useParams();
  const { movie, cast, crew, loading, error } = useMovieDetails(id);

  if (loading) return <Loading />;
  if (error) return <ErrorPage />;
  if (!movie) return null;

  const posterUrl = movie.poster_path
    ? `${IMAGE_BASE_URL}/w500${movie.poster_path}`
    : noPoster;

  const backdropUrl = movie.backdrop_path
    ? `${IMAGE_BASE_URL}/w1280${movie.backdrop_path}`
    : null;

  const rating = movie.vote_average.toFixed(1).replace(".", ",");

  return (
    <MovieDetailsWrapper>
      <Top>
        <BG />
        {backdropUrl && <PosterBig src={backdropUrl} alt={movie.title} />}
        <Overlay />
        <MainInfo>
          <Title>{movie.title}</Title>
          <RatingWrapper>
            <Rating>
              <StarIcon src={star} alt="star" />
              <RatingText>
                {rating}
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
                  {movie.production_countries?.map((c) => c.name).join(", ")}
                </Value>
              </ProductionRelease>

              <ProductionRelease>
                <Label>Release date:</Label>
                <Value>
                  {movie.release_date &&
                    new Date(movie.release_date).toLocaleDateString("pl-PL")}
                </Value>
              </ProductionRelease>
            </ProductionWrapper>

            <Tags>
              {movie.genres?.map((g) => (
                <Tag key={g.id}>{g.name}</Tag>
              ))}
            </Tags>

            <RatingRow>
              <TileStar src={star} alt="star" />
              <RatingValue>
                {rating}
                <TileRatingMax>/ 10</TileRatingMax>
              </RatingValue>
              <RatingVotes>{movie.vote_count} votes</RatingVotes>
            </RatingRow>

            {movie.overview && (
              <DesktopDescription>{movie.overview}</DesktopDescription>
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
              {cast.slice(0, 12).map((p) => (
                <PersonLink key={p.id} to={`/people/${p.id}`}>
                  <PersonTile person={p} role={p.character} />
                </PersonLink>
              ))}
            </PeopleRow>
          </>
        )}

        {crew.length > 0 && (
          <>
            <SectionTitle>Crew</SectionTitle>
            <PeopleRow>
              {crew
                .filter((p) =>
                  ["Director", "Producer", "Writer", "Screenplay"].includes(
                    p.job
                  )
                )
                .slice(0, 12)
                .map((p) => (
                  <PersonLink key={p.id} to={`/people/${p.id}`}>
                    <PersonTile person={p} role={p.job} />
                  </PersonLink>
                ))}
            </PeopleRow>
          </>
        )}
      </Content>
    </MovieDetailsWrapper>
  );
}

import {
  TileWrapper,
  PosterWrapper,
  Poster,
  NoPoster,
  Description,
  MovieTitle,
  Title,
  Year,
  Tags,
  Tag,
  Rating,
  Star,
  RatingValue,
  Votes,
} from "./styled";

import StarIcon from "../../images/star.svg";
import noPoster from "../../images/no-poster.png";

export default function Tile({ movie, genreMap = {} }) {
  const {
    title,
    release_date,
    poster_path,
    vote_average,
    vote_count,
    genre_ids,
  } = movie;

  const year = release_date ? release_date.slice(0, 4) : "—";

  const genres = genre_ids
    ? genre_ids
        .map((id) => genreMap[id])
        .filter(Boolean)
        .slice(0, 3)
    : [];

  const rating =
    vote_average > 0
      ? vote_average.toFixed(1).replace(".", ",")
      : "—";

  const votesText =
    vote_count > 0 ? `${vote_count} votes` : "No votes";

  return (
    <TileWrapper>
      <PosterWrapper>
        {poster_path ? (
          <Poster
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        ) : (
          <NoPoster src={noPoster} alt="No poster available" />
        )}
      </PosterWrapper>

      <Description>
        <MovieTitle>
          <Title>{title}</Title>
          <Year>{year}</Year>
        </MovieTitle>

        <Tags>
          {genres.map((genre) => (
            <Tag key={genre}>{genre}</Tag>
          ))}
        </Tags>

        <Rating>
          <Star src={StarIcon} alt="star" />
          <RatingValue>{rating}</RatingValue>
          <Votes>{votesText}</Votes>
        </Rating>
      </Description>
    </TileWrapper>
  );
}

import {
  TileWrapper,
  Poster,
  Description,
  NameYear,
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

export default function Tile({ movie, genreMap }) {
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

  return (
    <TileWrapper>
      <Poster
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : "https://via.placeholder.com/292x434?text=No+Image"
        }
        alt={title}
      />

      <Description>
        <NameYear>
          <Title>{title}</Title>
          <Year>{year}</Year>
        </NameYear>

        <Tags>
          {genres.map((genre) => (
            <Tag key={genre}>{genre}</Tag>
          ))}
        </Tags>
      </Description>

      <Rating>
        <Star src={StarIcon} alt="star" />
        <RatingValue>{vote_average.toFixed(1)}</RatingValue>
        <Votes>({vote_count})</Votes>
      </Rating>
    </TileWrapper>
  );
}

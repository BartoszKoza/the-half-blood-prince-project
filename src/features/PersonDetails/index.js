import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getGenres,
  getPersonDetails,
  getPersonMovieCredits,
} from "../../core/api";
import { SectionTitle, StyledLink } from "../MovieList/styled";
import Tile from "../../components/Tile";
import Loading from "../../components/Loading";
import ErrorPage from "../../components/Error";
import {
  Bio,
  CreditsGrid,
  Metaline,
  Name,
  Page,
  PersonInfo,
  ProfileImage,
  Section,
  TopSection,
} from "./styled";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
const FALLBACK_IMG = "https://via.placeholder.com/300x450?text=No+Image";

export default function PersonDetails() {
  const { id } = useParams();

  const [person, setPerson] = useState(null);
  const [credits, setCredits] = useState({ cast: [], crew: [] });
  const [genreMap, setGenreMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGenres = async () => {
      const genresData = await getGenres();
      if (genresData?.genres) {
        const map = {};
        genresData.genres.forEach((g) => (map[g.id] = g.name));
        setGenreMap(map);
      }
    };

    fetchGenres();
  }, []);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(false);

      const [personData, creditsData] = await Promise.all([
        getPersonDetails(id),
        getPersonMovieCredits(id),
      ]);

      if (!personData || !creditsData) {
        setError(true);
        setLoading(false);
        return;
      }

      setPerson(personData);

      setCredits({
        cast: creditsData.cast || [],
        crew: creditsData.crew || [],
      });
      setLoading(false);
    };

    load();
  }, [id]);

  const topCast = useMemo(
    () => (credits.cast || []).slice(0, 4),
    [credits.cast]
  );
  const topCrew = useMemo(() => {
    return (credits.crew || []).slice(0, 4);
  }, [credits.crew]);

  if (loading) {
    return (
      <Page>
        <Loading />
      </Page>
    );
  }

  if (error || !person) {
    return <ErrorPage />;
  }

  const profileSrc = person.profile_path
    ? `${IMAGE_BASE_URL}/w500${person.profile_path}`
    : FALLBACK_IMG;

  return (
    <Page>
      <TopSection>
        <ProfileImage src={profileSrc} alt={person.name} />
        <PersonInfo>
          <Name>{person.name}</Name>
          {person.birthday && (
            <Metaline>
              <strong>Date of birth:</strong> {person.birthday}
            </Metaline>
          )}
          {person.place_of_birth && (
            <Metaline>
              <strong>Place of birth:</strong> {person.place_of_birth}
            </Metaline>
          )}
          {person.biography && <Bio>{person.biography}</Bio>}
        </PersonInfo>
      </TopSection>
      <Section>
        <SectionTitle>Movies - cast ({credits.cast.length})</SectionTitle>
        <CreditsGrid>
          {topCast.map((movie) => (
            <StyledLink
              key={`cast-${movie.credit_id}`}
              to={`/movies/${movie.id}`}
            >
              <Tile movie={movie} genreMap={genreMap} />
            </StyledLink>
          ))}
        </CreditsGrid>
      </Section>
      <Section>
        <SectionTitle>Movies - crew ({credits.crew?.length || 0})</SectionTitle>
        <CreditsGrid>
          {topCrew.map((movie) => (
            <StyledLink
              key={`crew-${movie.credit_id}`}
              to={`/movies/${movie.id}`}
            >
              <Tile movie={movie} genreMap={genreMap} />
            </StyledLink>
          ))}
        </CreditsGrid>
      </Section>
    </Page>
  );
}

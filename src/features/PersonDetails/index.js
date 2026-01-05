import { useParams } from "react-router-dom";
import { usePersonDetails } from "./usePersonDetails";
import { SectionTitle, StyledLink } from "../MovieList/styled";
import Tile from "../../components/Tile";
import Loading from "../../components/Loading";
import ErrorPage from "../../components/Error";
import {
  Bio,
  CreditsGrid,
  DesktopOnly,
  Metaline,
  MobileOnly,
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

  const { person, cast, crew, genreMap, loading, error } = usePersonDetails(id);

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
              <strong>
                <DesktopOnly>Date of birth:</DesktopOnly>
                <MobileOnly>Birth:</MobileOnly>
              </strong>{" "}
              {person.birthday}
            </Metaline>
          )}

          {person.place_of_birth && (
            <Metaline>
              <strong>Place of birth:</strong> {person.place_of_birth}
            </Metaline>
          )}
        </PersonInfo>
        {person.biography && <Bio>{person.biography}</Bio>}
      </TopSection>

      <Section>
        <SectionTitle>Movies – cast ({cast.length})</SectionTitle>
        <CreditsGrid>
          {cast.slice(0, 4).map((movie) => (
            <StyledLink key={movie.credit_id} to={`/movies/${movie.id}`}>
              <Tile movie={movie} genreMap={genreMap} />
            </StyledLink>
          ))}
        </CreditsGrid>
      </Section>

      <Section>
        <SectionTitle>Movies – crew ({crew.length})</SectionTitle>
        <CreditsGrid>
          {crew.slice(0, 4).map((movie) => (
            <StyledLink key={movie.credit_id} to={`/movies/${movie.id}`}>
              <Tile movie={movie} genreMap={genreMap} />
            </StyledLink>
          ))}
        </CreditsGrid>
      </Section>
    </Page>
  );
}

import { usePeople } from "./usePersonList";


import PersonTile from "../../components/PersonTile";
import Loading from "../../components/Loading";
import ErrorPage from "../../components/Error";
import { Pagination } from "../../components/Pagination";
import { ReactComponent as NoResultsImage } from "../../images/no-result.svg";
import { PeopleGrid, StyledLink } from "./styled";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Page,
  Content,
  NoResultsWrapper,
  SectionTitle,
} from "../MovieList/styled";

export default function PersonList() {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const searchQuery = params.get("search") || "";
  const page = Number(params.get("page")) || 1;

  const { people, totalPages, filteredTotal, loading, error } = usePeople({
    searchQuery,
    page,
  });

  if (loading) {
    return (
      <Page>
        <Loading />
      </Page>
    );
  }

  if (error) {
    return <ErrorPage />;
  }

  if (searchQuery && filteredTotal === 0) {
    return (
      <Page>
        <Content>
          <SectionTitle>
            Sorry, there are no results for "{searchQuery}"
          </SectionTitle>
          <NoResultsWrapper>
            <NoResultsImage />
          </NoResultsWrapper>
        </Content>
      </Page>
    );
  }

  if (!people.length) {
    return (
      <Page>
        <SectionTitle>
          {searchQuery ? `No results for "${searchQuery}"` : "No people found"}
        </SectionTitle>
      </Page>
    );
  }

  return (
    <Page>
      <Content>
        <SectionTitle>
          {searchQuery
            ? `Search results for "${searchQuery} (${filteredTotal})"`
            : "Popular People"}
        </SectionTitle>

        <PeopleGrid>
          {people.map((person) => (
            <StyledLink key={person.id} to={`/people/${person.id}`}>
              <PersonTile person={person} />
            </StyledLink>
          ))}
        </PeopleGrid>

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={(nextPage) => {
            const nextParams = new URLSearchParams(location.search);
            nextParams.set("page", String(nextPage));

            navigate({
              pathname: location.pathname,
              search: nextParams.toString(),
            });
          }}
        />
      </Content>
    </Page>
  );
}

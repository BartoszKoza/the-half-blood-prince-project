import { useEffect, useState } from "react";
import { getPopularPeople } from "../../core/api";
import PersonTile from "../../components/PersonTile";
import Loading from "../../components/Loading";
import { Pagination } from "../../components/Pagination";

import {
  Page,
  PeopleGrid,
  SectionTitle,
  StyledLink,
} from "./styled";

export default function PersonList() {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadPeople = async () => {
      setLoading(true);
      setError(false);

      const data = await getPopularPeople(page);

      if (!data) {
        setError(true);
        setLoading(false);
        return;
      }

      setPeople(data.results || []);
      setTotalPages(Math.min(data.total_pages || 1, 500));
      setLoading(false);
    };

    loadPeople();
  }, [page]);


  if (loading) {
    return (
      <Page>
        <Loading />
      </Page>
    );
  }

  if (error) {
    return (
      <Page>
        <SectionTitle>Something went wrong 😢</SectionTitle>
      </Page>
    );
  }

  if (!people.length) {
    return (
      <Page>
        <SectionTitle>No people found</SectionTitle>
      </Page>
    );
  }

  return (
    <Page>
      <SectionTitle>Popular People</SectionTitle>

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
        onPageChange={setPage}
      />
    </Page>
  );
}

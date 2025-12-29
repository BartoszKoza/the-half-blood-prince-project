import { useCallback, useEffect, useState } from "react";
import { getPopularPeople, searchPeople } from "../../core/api";
import PersonTile from "../../components/PersonTile";
import Loading from "../../components/Loading";
import { Pagination } from "../../components/Pagination";
import { ReactComponent as NoResultsImage } from "../../images/no-result.svg";

import { Page, PeopleGrid, SectionTitle, StyledLink } from "./styled";
import { useLocation, useNavigate } from "react-router-dom";
import { NoResultsWrapper } from "../MovieList/styled";

export default function PersonList() {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const searchQuery = params.get("search") || "";
  const urlPage = Number(params.get("page")) || 1;

  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(urlPage);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [filteredTotal, setFilteredTotal] = useState(0);

  const loadPage = useCallback(
    async (uiPage) => {
      setLoading(true);
      setError(false);

      const data = searchQuery
        ? await searchPeople(searchQuery, uiPage)
        : await getPopularPeople(uiPage);

      if (!data) {
        setError(true);
        setLoading(false);
        return;
      }
      let results = data.results || [];
      if (searchQuery) {
        const q = searchQuery.trim();
        const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const re = new RegExp(`\\b${escaped}\\b`, "i");

        results = results.filter((p) => re.test(p.name || ""));
      }

      setFilteredTotal(results.length);
      setPeople(results);

      const uiTotalPages = Math.ceil(results.length / 24) || 1;
      setTotalPages(Math.min(uiTotalPages, 500));

      setLoading(false);
    },
    [searchQuery]
  );

  useEffect(() => {
    loadPage(page);
  }, [page, loadPage]);

  useEffect(() => {
    setPage(urlPage);
  }, [urlPage]);

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

  if (searchQuery && filteredTotal === 0) {
    return (
      <Page>
        <SectionTitle>
          Sorry, there are no results for "{searchQuery}"
        </SectionTitle>
        <NoResultsWrapper>
          <NoResultsImage />
        </NoResultsWrapper>
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
      <SectionTitle>
        {searchQuery ? `Search results for "${searchQuery}"` : "Popular People"}
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
    </Page>
  );
}

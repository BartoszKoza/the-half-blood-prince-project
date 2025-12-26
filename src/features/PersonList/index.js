import { useEffect, useState } from "react";
import { Page, PeopleGrid, SectionTitle, StyledLink } from "./styled";
import { getPopularPeople } from "../../core/api";
import PersonTile from "../../components/PersonTile";
import { Pagination } from "../../components/Pagination";

export default function PersonList() {
    const [people, setPeople] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPeople = async () => {
            setLoading(true);
            setError(null);

            const data = await getPopularPeople(page);

            if (!data) {
                setError("Failed to load people.");
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
        return <Page>Loading...</Page>;
    }

    if (error) {
        return <Page>{error}</Page>;
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

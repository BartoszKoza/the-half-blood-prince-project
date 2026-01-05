import { useCallback, useEffect, useState } from "react";
import { getPopularPeople, searchPeople } from "../../core/api";

export const usePersonList = ({ searchQuery, page }) => {
  const [people, setPeople] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [filteredTotal, setFilteredTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const loadPeople = useCallback(async () => {
    setLoading(true);
    setError(false);

    const data = searchQuery
      ? await searchPeople(searchQuery, page)
      : await getPopularPeople(page);

    if (!data) {
      setError(true);
      setLoading(false);
      return;
    }

    let results = data.results || [];

    if (searchQuery) {
      const escaped = searchQuery
        .trim()
        .replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const re = new RegExp(`\\b${escaped}\\b`, "i");
      results = results.filter((p) => re.test(p.name || ""));
    }

    setPeople(results);
    setFilteredTotal(results.length);
    setTotalPages(Math.min(data.total_pages || 1, 500));
    setLoading(false);
  }, [searchQuery, page]);

  useEffect(() => {
    loadPeople();
  }, [loadPeople]);

  return {
    people,
    totalPages,
    filteredTotal,
    loading,
    error,
  };
};

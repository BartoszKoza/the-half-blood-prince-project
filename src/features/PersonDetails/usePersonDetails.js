import { useEffect, useState } from "react";
import {
  getGenres,
  getPersonDetails,
  getPersonMovieCredits,
} from "../../core/api";

export const usePersonDetails = (id) => {
  const [person, setPerson] = useState(null);
  const [credits, setCredits] = useState({ cast: [], crew: [] });
  const [genreMap, setGenreMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(false);

      const [genres, personData, creditsData] = await Promise.all([
        getGenres(),
        getPersonDetails(id),
        getPersonMovieCredits(id),
      ]);

      if (!personData || !creditsData) {
        setError(true);
        setLoading(false);
        return;
      }

      if (genres?.genres) {
        const map = {};
        genres.genres.forEach((g) => (map[g.id] = g.name));
        setGenreMap(map);
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

  return {
    person,
    cast: credits.cast,
    crew: credits.crew,
    genreMap,
    loading,
    error,
  };
};

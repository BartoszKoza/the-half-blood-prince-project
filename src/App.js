import { Routes, Route, Navigate } from "react-router-dom";
import NavigationBar from "./components/Navigation";
import MovieList from "./features/MovieList";
import PersonList from "./features/PersonList";
import MovieDetails from "./features/MovieDetails";

export default function App() {
  return (
    <>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Navigate to="/movies" replace />} />

        <Route path="/movies" element={<MovieList />} />
        <Route path="/movies/:id" element={<MovieDetails />} />

        <Route path="/people" element={<PersonList />} />

        <Route path="*" element={<Navigate to="/movies" replace />} />
      </Routes>
    </>
  );
}

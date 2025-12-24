import {Navigate, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/Navigation";
import MovieList from "./features/MovieList";

export default function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/movies" element={<MovieList />} />
        <Route path="*" element={<Navigate to="/movies" replace />} />
      </Routes>
    </>
  );
}

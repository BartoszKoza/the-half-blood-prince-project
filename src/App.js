import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavigationBar from "./components/Navigation";
import MovieList from "./features/MovieList";
import PersonList from "./features/PersonList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Navigate, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/Navigation";
import MovieList from "./features/MovieList";
import MovieDetails from "./features/MovieDetails";

export default function App() {
    return (
        <BrowserRouter>
            <NavigationBar />

            <Routes>
                <Route path="/" element={<Navigate to="/movies" replace />} />

                <Route path="/movies" element={<MovieList />} />

                <Route path="/people" element={<PersonList />} />
            </Routes>
        </BrowserRouter>
    );
            <Routes>
                <Route path="/" element={<MovieList />} />
                <Route path="/movies" element={<MovieList />} />
                <Route path="/movies/:id" element={<MovieDetails />} />
            </Routes>
        </BrowserRouter>
    );
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

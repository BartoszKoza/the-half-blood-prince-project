import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavigationBar from "./components/Navigation";
import MovieList from "./features/MovieList";
import PersonList from "./features/PersonList";

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
}

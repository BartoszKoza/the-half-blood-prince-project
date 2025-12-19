import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navigation";
import MovieList from "./features/MovieList";
import MovieDetails from "./features/MovieDetails";

export default function App() {
    return (
        <BrowserRouter>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<MovieList />} />
                <Route path="/movies" element={<MovieList />} />
                <Route path="/movies/:id" element={<MovieDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

import { useEffect, useRef, useState } from "react";
import {
  Navigation as Nav,
  Container,
  Header,
  Title,
  Menu,
  MenuItem,
  SearchInput,
  SearchWrapper,
  SearchIcon,
  VideoIcon,
  Brand,
} from "./styled";
import { useLocation, NavLink, useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isMovieList = location.pathname === "/movies";
  const isMovieDetails = location.pathname.startsWith("/movies/");
  const isPeopleList = location.pathname === "/people";
  const isPeopleDetails = location.pathname.startsWith("/people/");

  const moviesReturnTo = location.state?.moviesReturnTo || null;
  const peopleReturnTo = location.state?.peopleReturnTo || null;

  const params = new URLSearchParams(location.search);
  const query = params.get("search") || "";

  const debounceRef = useRef(null);

  const [movieDetailsReturnTo, setMovieDetailsReturnTo] = useState(null);
  const [peopleDetailsReturnTo, setPeopleDetailsReturnTo] = useState(null);
  const [inputValue, setInputValue] = useState(query);

  const goHome = () => navigate("/movies");

  useEffect(() => {
    if (isMovieDetails) setMovieDetailsReturnTo(location.pathname);
    if (isPeopleDetails) setPeopleDetailsReturnTo(location.pathname);
  }, [isMovieDetails, isPeopleDetails, location.pathname]);

  useEffect(() => {
    if (isMovieList || isPeopleList) setInputValue(query);
  }, [query, isMovieList, isPeopleList]);

  const isPeople = isPeopleList || isPeopleDetails;
  const placeholder = isPeople
    ? "Search for people..."
    : "Search for movies...";

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      const next = new URLSearchParams(location.search);

      if (isMovieDetails) {
        if (!value) {
          navigate(movieDetailsReturnTo || "/movies");
          return;
        }

        next.set("search", value);
        next.set("page", "1");

        navigate(
          { pathname: "/movies", search: next.toString() },
          {
            state: {
              moviesReturnTo: movieDetailsReturnTo || location.pathname,
            },
          }
        );
        return;
      }

      if (isPeopleDetails) {
        if (!value) {
          navigate(peopleDetailsReturnTo || "/people");
          return;
        }

        next.set("search", value);
        next.set("page", "1");

        navigate(
          { pathname: "/people", search: next.toString() },
          {
            state: {
              peopleReturnTo: peopleDetailsReturnTo || location.pathname,
            },
          }
        );
        return;
      }

      if (isMovieList) {
        if (!value && moviesReturnTo) {
          navigate(moviesReturnTo);
          return;
        }

        if (value) {
          next.set("search", value);
          next.set("page", "1");
        } else {
          next.delete("search");
          next.set("page", "1");
        }

        navigate(
          { pathname: "/movies", search: next.toString() },
          moviesReturnTo ? { state: { moviesReturnTo } } : undefined
        );
        return;
      }

      if (isPeopleList) {
        if (!value && peopleReturnTo) {
          navigate(peopleReturnTo);
          return;
        }

        if (value) {
          next.set("search", value);
          next.set("page", "1");
        } else {
          next.delete("search");
          next.set("page", "1");
        }

        navigate(
          { pathname: "/people", search: next.toString() },
          peopleReturnTo ? { state: { peopleReturnTo } } : undefined
        );
      }
    }, 500);
  };

  return (
    <Nav>
      <Container>
        <Header>
          <Brand onClick={goHome} role="button" tabIndex={0}>
            <VideoIcon />
            <Title>Movies Browser</Title>
          </Brand>

          <Menu>
            <MenuItem as={NavLink} to="/movies">
              MOVIES
            </MenuItem>
            <MenuItem as={NavLink} to="/people">
              PEOPLE
            </MenuItem>
          </Menu>
        </Header>

        <SearchWrapper>
          <SearchIcon />
          <SearchInput
            type="text"
            placeholder={placeholder}
            value={inputValue}
            onChange={handleChange}
          />
        </SearchWrapper>
      </Container>
    </Nav>
  );
};

export default NavigationBar;

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

  const params = new URLSearchParams(location.search);
  const query = params.get("search") || "";

  const handleChange = (e) => {
    const value = e.target.value;
    const next = new URLSearchParams(location.search);

    if (value) {
      next.set("search", value);
      next.set("page", 1);
    } else {
      next.delete("search");
      next.set("page", 1);
    }

    navigate({ pathname: location.pathname, search: next.toString() });
  };

  return (
    <Nav>
      <Container>
        <Header>
          <Brand>
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
            placeholder="Search for movies..."
            value={query || ""}
            onChange={handleChange}
          />
        </SearchWrapper>
      </Container>
    </Nav>
  );
};

export default NavigationBar;

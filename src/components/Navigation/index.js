import { useRef } from "react";
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
import { useHistory, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const history = useHistory();
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

    history.push({ search: next.toString() });
  };

  return (
    <Nav>
      <Container>
        <Header>
          <Brand>
            <VideoIcon />
            <Title>Movie Browser</Title>
          </Brand>

          <Menu>
            <MenuItem>MOVIES</MenuItem>
            <MenuItem>PEOPLE</MenuItem>
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

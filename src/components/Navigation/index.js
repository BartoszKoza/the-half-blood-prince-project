import { useRef } from "react";
import {
  Navigation as Nav,
  Container,
  Header,
  Title,
  Menu,
  MenuItem,
  SearchInput,
} from "./styled";

const NavigationBar = ({ query, setQuery, onSearch }) => {
  const inputRef = useRef();

  const handleInputChange = (e) => {
    if (setQuery) setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    if (onSearch) onSearch(e);
  };

  return (
    <Nav>
      <Container>
        <Header>
          <Title>Movie Browser</Title>
          <Menu>
            <MenuItem>MOVIES</MenuItem>
            <MenuItem>PEOPLE</MenuItem>
          </Menu>
        </Header>

        <form onSubmit={handleSubmit} style={{ marginLeft: "auto" }}>
          <SearchInput
            ref={inputRef}
            type="text"
            placeholder="Search for movies..."
            value={query || ""}
            onChange={handleInputChange}
          />
        </form>
      </Container>
    </Nav>
  );
};

export default NavigationBar;

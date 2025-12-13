import { useRef } from "react";
import {
  Navigation,
  Container,
  Header,
  Title,
  Menu,
  MenuItem,
  SearchInput,
} from "./styled";

const NavigationBar = () => {
  const inputRef = useRef();

  return (
    <Navigation>
      <Container>
        <Header>
          <Title>Movie Browser</Title>
          <Menu>
            <MenuItem>MOVIES</MenuItem>
            <MenuItem>PEOPLE</MenuItem>
          </Menu>
        </Header>

        <SearchInput
          ref={inputRef}
          type="text"
          placeholder="Search for movies..."
        />
      </Container>
    </Navigation>
  );
};

export default NavigationBar;

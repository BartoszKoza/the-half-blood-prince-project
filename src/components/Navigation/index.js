import { useRef } from "react";
import {
  Navigation,
  Container,
  Header,
  Title,
  Menu,
  MenuItem,
  SearchInput,
  SearchIcon,
  SearchWrapper,
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
        <SearchWrapper>
          <SearchIcon/>
          <SearchInput
            ref={inputRef}
            type="text"
            placeholder="Search for movies..."
          />
        </SearchWrapper>
      </Container>
    </Navigation>
  );
};

export default NavigationBar;

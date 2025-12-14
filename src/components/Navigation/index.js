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
  Brand,
  VideoIcon,
} from "./styled";

const NavigationBar = () => {
  const inputRef = useRef();

  return (
    <Navigation>
      <Container>
        <Header>
          <Brand>
            <VideoIcon/>
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

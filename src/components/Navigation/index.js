import { useRef } from "react";
import { Input, Navigation, NavigationItem, NavigationTitle, NavigationWrapper } from "./styled";


const NavigationBar = () => {
  const inputRef = useRef();
  return (
    <Navigation>
      
      <NavigationWrapper>
        <NavigationTitle>Movie Browser</NavigationTitle>
        <NavigationItem>MOVIES</NavigationItem>
        <NavigationItem>PEOPLE</NavigationItem>
        <Input ref={inputRef} type="text" placeholder="Search for movies..." />
      </NavigationWrapper>
    </Navigation>
  );
};

export default NavigationBar;

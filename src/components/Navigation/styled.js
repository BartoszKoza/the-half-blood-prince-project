import styled from "styled-components";
import {ReactComponent as SearchIconSvg} from '../../search-icon.svg'
import {ReactComponent as VideoIconSvg} from '../../Video.svg'
export const Navigation = styled.nav`
  background-color: #18181b;
  color: white;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1368px;
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

export const Title = styled.h1`
  margin-right: 64px;
  white-space: nowrap;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin: 0;
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li`
  padding: 6px 16px;
  border: 1px solid white;
  border-radius: 24px;
  cursor: pointer;
  font-size: 14px;
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px 12px;
    border-radius: 29px;
  }
`;

export const SearchInput = styled.input`
  margin-left: auto;
  width: 432px;
  height: 48px;
  border-radius: 33px;
  padding-left: 48px;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;

export const SearchIcon = styled(SearchIconSvg)`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  pointer-events: none;
`;

export const SearchWrapper = styled.div`
position: relative;
margin-left: auto;

@media (max-width: 768px){
  margin-left: 0;
  width: 100%;
}
`;


export const Brand = styled.div`
 display: flex;
 align-items: center;
 gap: 12px;
 cursor: pointer;
 @media (max-width: 768px){
  gap:7px;
 }
`;

export const VideoIcon = styled(VideoIconSvg)`
width: 40px;
height: 40px;
@media (max-width: 768px){
  width: 17px;
  height: 17px;
}

`;

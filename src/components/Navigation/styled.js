import styled from "styled-components";
import { ReactComponent as SearchIconSvg } from "../../images/search-icon.svg";
import { ReactComponent as VideoLogoSvg } from "../../images/Video.svg";

export const Navigation = styled.nav`
  background-color: ${({ theme }) => theme.color.woodsmoke};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1160px;
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
  padding: 12px 24px;
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
   
  &.active {
    border-radius: 24px;
    border: 1px solid ${({ theme }) => theme.color.white};
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px 12px;
    border-radius: 29px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 33px;
  padding-left: 64px;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 13px;
    padding-left: 40px;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 432px;
  margin-left: auto;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const SearchIcon = styled(SearchIconSvg)`
  position: absolute;
  left: 26px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
    left: 16px;
  }
`;

export const VideoIcon = styled(VideoLogoSvg)`
  width: 40px;
  height: 40px;
  @media (max-width: 768px) {
    width: 17px;
    height: 17px;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  @media (max-width: 768px) {
    gap: 7px;
  }
`;

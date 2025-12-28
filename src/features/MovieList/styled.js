import styled from "styled-components";
import { Link } from "react-router-dom";

export const Page = styled.div`
  display: flex;
  justify-content: center;
  padding: 56px 16px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1368px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 288px;
    gap: 16px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 600;
  margin: 0;
  color: ${({ theme }) => theme.color.blackpearl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopSmMax}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    gap: 16px;
    justify-items: start;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

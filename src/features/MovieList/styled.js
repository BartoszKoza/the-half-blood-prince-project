import styled from "styled-components";

export const Page = styled.div`
  max-width: 1368px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 16px;
  }
`;

export const Content = styled.div`
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 288px;
    margin: 0 auto;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  text-align: left;
  color: ${({ theme }) => theme.color.blackpearl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.2;
    color: ${({ theme }) => theme.color.blackpearl};
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
  }
`;


import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 16px;
  }
`;

export const Content = styled.div`
  width: fit-content;
  max-width: 1368px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 288px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.color.blackpearl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
    margin-bottom: 16px;
  }
`;

export const MoviesGrid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(4, 1fr);

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

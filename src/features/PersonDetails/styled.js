import styled from "styled-components";

export const Page = styled.main`
  max-width: 1368px;
  margin: 0 auto;
  padding: 24px 16px 48px;
`;

export const DesktopOnly = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const MobileOnly = styled.span`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: inline;
  }
`;

export const TopSection = styled.section`
  display: grid;
  grid-template-columns: 320px 1fr;
  grid-template-rows: auto 1fr;
  column-gap: 32px;
  row-gap: 16px;

  padding: 24px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.card};
  border-radius: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
    grid-template-columns: 260px 1fr;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 116px 1fr;
    grid-template-rows: auto auto;
    gap: 16px;
    row-gap: 16px;
    padding: 16px;
    align-items: start;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  aspect-ratio: 2/3;
  display: block;

  grid-column: 1;
  grid-row: 1 / span 2;
  align-self: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-row: 1;
    width: 116px;
    height: 163px;
    aspect-ratio: auto;
  }
`;

export const PersonInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  grid-column: 2;
  grid-row: 1;
`;

export const Name = styled.h2`
  margin: 0;
  font-size: 32px;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;

export const Metaline = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.waterloo};
`;

export const Bio = styled.p`
  margin-top: 8px;
  line-height: 1.6;

  grid-column: 2;
  grid-row: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-column: 1 / -1;
    grid-row: 2;
  }
`;

export const Section = styled.section`
  margin-top: 32px;
`;

export const SectionTitle = styled.h3`
  margin: 0 0 16px 0;
  font-size: 22px;
  font-weight: 600;
`;

export const CreditsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 314px);
  gap: 24px;
  max-width: 1368px;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 16px;
    justify-items: stretch;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 12px;
    justify-items: stretch;
  }
`;

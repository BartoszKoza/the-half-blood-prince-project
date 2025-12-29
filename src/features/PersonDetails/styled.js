import styled from "styled-components";


export const Page = styled.main`
  max-width: 1368px;
  margin: 0 auto;
  padding: 24px 16px 48px;
`;

export const TopSection = styled.section`
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 32px;
  padding: 24px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.card};
  border-radius: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
    grid-template-columns: 260px 1fr;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  aspect-ratio: 2/3;
  display: block;
`;

export const PersonInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Name = styled.h2`
  margin: 0;
  font-size: 32px;
  font-weight: 600;
`;

export const Metaline = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.waterloo};
`;

export const Bio = styled.p`
  margin-top: 8px;
  line-height: 1.6;
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


import styled from "styled-components";

export const TileWrapper = styled.div`
  width: 324px;
  height: 650px;
  background: ${({ theme }) => theme.color.white};
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadow.card};
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-4px);
      box-shadow: ${({ theme }) => theme.shadow.cardHover};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 100%;
    width: 100%;
    height: 201px;
    flex-direction: row;
    gap: 16px;
  }
`;

export const PosterWrapper = styled.div`
  width: 100%;
  aspect-ratio: 2 / 3;
  border-radius: 5px;
  overflow: hidden;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 114px;
    height: 169px;
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const NoPoster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Description = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const MovieTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.span`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  padding-top: 16px;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
    padding-top: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const Year = styled.span`
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.span`
  padding: 8px 16px;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.mystic};
  font-size: 14px;
  line-height: 1.4;
  font-weight: 400;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 4px 8px;
    font-size: 10px;
  }
`;

export const Rating = styled.div`
  margin-top: auto;
  padding-top: 10px;
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding-top: 8px;
  }
`;

export const Star = styled.img`
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 16px;
    height: 16px;
  }
`;

export const RatingValue = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
  }
`;

export const Votes = styled.span`
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
  }
`;

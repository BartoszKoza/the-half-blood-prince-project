import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieDetailsWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.whisper};
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 0px;
  }
`;

export const Top = styled.div`
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: ${({ theme }) => theme.color.black};
  max-height: 80vh;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-height: none;
  }
`;

export const BG = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.black};
  z-index: 0;
`;

export const PosterBig = styled.img`
  width: 100%;
  max-width: 1368px;
  height: auto;
  object-fit: cover;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      270deg,
      #000000 14.11%,
      rgba(0, 0, 0, 0.873268) 15.08%,
      rgba(0, 0, 0, 0.720529) 16.51%,
      rgba(0, 0, 0, 0.294577) 19.99%,
      rgba(0, 0, 0, 0.159921) 21.88%,
      rgba(0, 0, 0, 0) 25.68%
    ),
    linear-gradient(
      90deg,
      #000000 13.6%,
      rgba(0, 0, 0, 0.984059) 14.58%,
      rgba(0, 0, 0, 0.967732) 15.44%,
      rgba(0, 0, 0, 0.865569) 16.3%,
      rgba(0, 0, 0, 0.230315) 22.87%,
      rgba(0, 0, 0, 0) 26.64%
    ),
    linear-gradient(
      180deg,
      #000000 0%,
      rgba(0, 0, 0, 0.689555) 4.66%,
      rgba(0, 0, 0, 0.439033) 9.34%,
      rgba(0, 0, 0, 0.20628) 15.16%,
      rgba(0, 0, 0, 0) 24.22%
    ),
    linear-gradient(
      189.44deg,
      rgba(0, 0, 0, 0) 58.48%,
      rgba(0, 0, 0, 0.106473) 63.17%,
      rgba(0, 0, 0, 0.235359) 68.85%,
      rgba(0, 0, 0, 0.492821) 78.08%,
      rgba(0, 0, 0, 0.740286) 85.86%,
      #000000 92.87%
    );
  z-index: 2;
`;

export const MainInfo = styled.div`
  position: absolute;
  bottom: 56px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1368px;
  padding: 0 16px;

  color: ${({ theme }) => theme.color.white};
  z-index: 3;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    bottom: 0;
    left: 0;
    transform: none;
    width: 100%;
    padding: 16px;
  }
`;

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 600;
  line-height: 1.2;
  margin: 0 0 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 24px;
    margin-bottom: 8px;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 4px;
  }
`;

export const Star = styled.img`
  width: 40px;
  height: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 16px;
    height: 16px;
  }
`;

export const RatingText = styled.span`
  font-weight: 500;
  font-size: 30px;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
    line-height: 1.3;
  }
`;

export const RatingMax = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  margin-left: 5px;
  vertical-align: baseline;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
    display: inline;
    vertical-align: text-bottom;
  }
`;

export const TileRatingMax = styled.span`
  font-weight: 400;
  font-size: 14px;
  margin-left: 2px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const Votes = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
    font-weight: 400;
    align-self: flex-end;
    margin-left: 8px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1368px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 16px;
  padding-bottom: 336px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 16px;
    padding: 16px;
  }
`;

export const MovieTile = styled.div`
  background: ${({ theme }) => theme.color.white};
  padding: 40px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  display: grid;
  grid-template-columns: 312px 1fr;
  gap: 40px;
  margin-bottom: 44px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 114px 1fr;
    gap: 16px;
    padding: 16px;
    margin-bottom: 16px;
  }
`;

export const Poster = styled.img`
  width: 312px;
  height: auto;
  border-radius: 5px;
  grid-row: 1;
  grid-column: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 114px;
    min-width: 114px;
    height: auto;
  }
`;

export const MovieData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  grid-row: 1;
  grid-column: 2;
  padding-top: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 8px;
    padding-top: 0;
  }
`;

export const MovieTitle = styled.h2`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  margin: 0;
  padding-bottom: 0;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
    padding-bottom: 0;
  }
`;

export const MovieYear = styled.span`
  font-weight: 400;
  font-size: 22px;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
    color: ${({ theme }) => theme.color.waterloo};
  }
`;

export const ProductionRelease = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 4px;
  }
`;

export const ProductionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Label = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.stormgrey};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const Value = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 8px;
  }
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  padding: 8px 16px;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.mystic};
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 10px;
    padding: 4px 8px;
    height: 19px;
  }
`;

export const DesktopDescription = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;
  color: ${({ theme }) => theme.color.black};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const MobileDescription = styled.p`
  display: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.color.black};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: block;
    grid-row: 2;
    grid-column: 1 / -1;
    font-size: 14px;
  }
`;

export const SectionTitle = styled.h3`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  margin: 0 0 16px 0;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 20px;
  }
`;

export const PeopleRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px 0;
  text-align: center;
`;

export const ErrorIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

export const ErrorTitle = styled.h2`
  font-weight: 600;
  font-size: 1.25rem;
  margin-bottom: 8px;
`;

export const ErrorMessage = styled.p`
  font-weight: 400;
  font-size: 1rem;
  margin-bottom: 16px;
`;

export const RetryButton = styled.button`
  padding: 8px 16px;
  font-weight: 600;
  font-size: 0.875rem;
  background-color: #007bff;
  color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const RatingRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  height: 29px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 7px;
    height: 24px;
    align-items: center;
  }
`;

export const RatingValue = styled.span`
  font-weight: 500;
  font-size: 22px;
  line-height: 1;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
    line-height: 1.3;
    font-weight: 400;
  }
`;

export const RatingVotes = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
    color: ${({ theme }) => theme.color.waterloo};
    line-height: 1.3;
  }
`;

export const TileStar = styled.img`
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 16px;
    height: 16px;
  }
`;

export const PersonLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
  }
`;

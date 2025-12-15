import styled from "styled-components";

export const TileWrapper = styled.div`
  width: 100%;
  max-width: 324px;
  min-height: 650px;
  background: ${({ theme }) => theme.color.white};
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px #bac7d580;
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-self: center;

  @media (max-width: 767px) {
    max-width: 100%;
  }
`;


export const Poster = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 2 / 3;
  border-radius: 5px;
  object-fit: cover;
  padding-bottom: 16px;
`;

export const Description = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NameYear = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.span`
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.color.woodsmoke};
  padding-bottom: 8px;
`;

export const Year = styled.span`
  font-family: Poppins;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.color.waterloo};
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Tag = styled.div`
  height: 36px;
  padding: 8px 16px;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.mystic};
  font-family: Poppins;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.color.woodsmoke};
  display: flex;
  align-items: center;
`;

export const Rating = styled.div`
  width: 140px;
  height: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: auto;
`;

export const Star = styled.img`
  width: 24px;
  height: 24px;
`;

export const RatingValue = styled.div`
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.color.woodsmoke};
`;

export const Votes = styled.div`
  font-family: Poppins;
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.color.waterloo};
`;

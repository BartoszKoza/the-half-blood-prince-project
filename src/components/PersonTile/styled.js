import styled from "styled-components";

export const TileWrapper = styled.div`
  width: 208px;
  height: 339px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: ${({ theme }) => theme.color.white};
  border-radius: 5px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  align-items: center;
  text-align: center;
`;

export const TileImage = styled.img`
  width: 176px;
  height: 231px;
  border-radius: 5px;
  object-fit: cover;
`;

export const NameWrapper = styled.div`
  width: 176px;
  min-height: 64px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Name = styled.h3`
  margin: 0;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  color: ${({ theme }) => theme.color.woodsmoke};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Role = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.waterloo};
`;

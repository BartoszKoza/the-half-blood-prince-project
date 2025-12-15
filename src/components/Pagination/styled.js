import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 40px 0;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 8px 16px;
  height: 40px;

  border-radius: 5px;
  border: none;

  background: ${({ theme }) => theme.color.mystic};
  color: ${({ theme }) => theme.color.woodsmoke};

  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  ${({ right }) =>
    right &&
    css`
      flex-direction: row-reverse;
    `}

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.color.scienceBlue};
    color: white;

    img {
      filter: brightness(0) invert(1);
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const ArrowIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const PageInfo = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.color.waterloo};

  strong {
    color: ${({ theme }) => theme.color.woodsmoke};
    font-weight: 600;
  }
`;

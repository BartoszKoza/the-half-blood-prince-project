import styled, { css } from "styled-components";

export const DesktopOnly = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const MobileOnly = styled.span`
  display: none;
  align-items: center;
  gap: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: inline-flex;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 525px;
  gap: 24px;
  margin: 48px auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 232px;
    height: 24px;
    gap: 8px;
    margin: 32px auto;
  }
`;

export const LeftGroup = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 8px;
  }
`;

export const RightGroup = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 8px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 36px;
  padding: 8px 16px;
  border-radius: 5px;
  border: none;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 400;

  cursor: pointer;

  ${({ $variant }) =>
    $variant === "secondary" &&
    css`
      background: ${({ theme }) => theme.color.mystic};
      color: ${({ theme }) => theme.color.woodsmoke};
    `}

  ${({ $variant }) =>
    $variant === "primary" &&
    css`
      background: ${({ theme }) => theme.color.pattensblue};
      color: ${({ theme }) => theme.color.woodsmoke};
    `}

  &:disabled {
    background: ${({ theme }) => theme.color.mystic};
    color: ${({ theme }) => theme.color.woodsmoke};
    cursor: default;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 23px;
    padding: 8px 12px;
    gap: 4px;
  }
`;

export const ArrowIcon = styled.img`
  width: 7px;
  height: 11px;

  filter: ${({ $active }) =>
    $active
      ? "invert(21%) sepia(93%) saturate(2892%) hue-rotate(217deg) brightness(92%) contrast(101%)"
      : "invert(56%) sepia(7%) saturate(463%) hue-rotate(202deg) brightness(92%) contrast(88%)"};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 5px;
    height: 8px;
  }
`;

export const PageInfo = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  gap: 12px;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 2px;
    font-size: 10px;
  }
`;

export const PageText = styled.span`
  font-weight: 400;
  color: ${({ theme }) => theme.color.waterloo};
`;

export const PageNumber = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.color.woodsmoke};
`;

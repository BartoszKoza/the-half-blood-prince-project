import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 94px);
  background-color: ${({ theme }) => theme.color.whisper};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const Icon = styled.img`
  width: 120px;
  height: 120px;
`;

export const TextContainer = styled.div`
  max-width: 592px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.woodsmoke};
  text-align: center;
`;

export const Description = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  color: ${({ theme }) => theme.color.woodsmoke};
  text-align: center;
`;

export const Button = styled.button`
  margin-top: 8px;
  height: 51px;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.color.sceniceblue};
  border-radius: 5px;
  border: none;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.color.white};
  opacity: 1;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.smalt};
  }
`;

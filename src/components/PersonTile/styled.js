import styled from "styled-components";

export const TileWrapper = styled.div`
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-4px);
    }
`;

export const TileImage = styled.img`
    width: 100%;
    aspect-ratio: 2 / 3;
    border-radius: 8px;
    object-fit: cover;
`;

export const Placeholder = styled.div`
    width: 100%;
    aspect-ratio: 2 / 3;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.color.silver};
`;

export const TileName = styled.h3`
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    color: ${({ theme }) => theme.color.mineshaft};
`;

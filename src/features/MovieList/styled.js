import styled from "styled-components";
import { Link } from "react-router-dom";

export const Page = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
`;

export const SectionTitle = styled.h2`
    font-size: 36px;
    font-weight: 600;
    line-height: 1.2;
    padding-bottom: 24px;
    text-align: left;
`;

export const MoviesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

    @media (max-width: 1279px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1023px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: block;
`;

export const Star = styled.img`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
`;

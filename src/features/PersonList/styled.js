import styled from "styled-components";
import { Link } from "react-router-dom";

export const Page = styled.main`
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

export const PeopleGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.desktopSmMax}px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: block;
`;

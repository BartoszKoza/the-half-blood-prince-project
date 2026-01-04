import styled from "styled-components";
import { Link } from "react-router-dom";



export const PeopleGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 24px;
    max-width: 1368px;

    @media (max-width: ${({ theme }) => theme.breakpoints.desktopSmMax}px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
         grid-template-columns: repeat(2, 1fr);
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: block;
`;

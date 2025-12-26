import styled from "styled-components";

export const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;
`;

export const Backdrop = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
    margin-bottom: 32px;

    @media (max-width: 1024px) {
        height: 300px;
    }

    @media (max-width: 767px) {
        height: 250px;
    }
`;

export const BackdropImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const BackdropContent = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    padding: 32px;
    color: white;

    @media (max-width: 767px) {
        padding: 16px;
    }
`;

export const Title = styled.h1`
    margin: 0 0 16px 0;
    font-size: 48px;

    @media (max-width: 1024px) {
        font-size: 36px;
    }

    @media (max-width: 767px) {
        font-size: 24px;
        margin: 0 0 8px 0;
    }
`;

export const Rating = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 24px;

    @media (max-width: 1024px) {
        font-size: 20px;
    }

    @media (max-width: 767px) {
        font-size: 16px;
    }
`;

export const Content = styled.div`
    padding: 0 32px;

    @media (max-width: 1024px) {
        padding: 0 24px;
    }

    @media (max-width: 767px) {
        padding: 0 16px;
    }
`;

export const InfoText = styled.p`
    margin: 8px 0;
`;

export const SectionTitle = styled.h2`
    font-size: 36px;
    margin-bottom: 24px;
    margin-top: 48px;

    @media (max-width: 1024px) {
        font-size: 28px;
    }

    @media (max-width: 767px) {
        font-size: 22px;
        margin-bottom: 16px;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 24px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: 16px;
    }

    @media (max-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
    }
`;

export const PersonCard = styled.div`
    text-align: center;
`;

export const PersonImage = styled.img`
    width: 100%;
    aspect-ratio: 2/3;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 12px;
`;

export const PersonName = styled.div`
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 4px;
`;

export const PersonRole = styled.div`
    font-size: 13px;
    color: #666;
`;

export const MetadataSection = styled.div`
    margin-top: 48px;
    margin-bottom: 48px;
`;

export const DescriptionTitle = styled.h3`
    margin-top: 24px;
`;

export const Description = styled.p`
    line-height: 1.6;
`;

export const LoadingContainer = styled.div`
    padding: 100px 20px;
    text-align: center;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const Spinner = styled.div`
    width: 60px;
    height: 60px;
    border: 6px solid #f3f3f3;
    border-top: 6px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export const LoadingText = styled.p`
    font-size: 18px;
    color: #666;
`;

export const ErrorContainer = styled.div`
    padding: 100px 20px;
    text-align: center;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const ErrorIcon = styled.div`
    font-size: 80px;
    margin-bottom: 10px;
`;

export const ErrorTitle = styled.h2`
    margin: 0;
    font-size: 32px;
    font-weight: 600;
`;

export const ErrorMessage = styled.p`
    color: #666;
    margin: 0;
    font-size: 16px;
`;

export const RetryButton = styled.button`
    margin-top: 10px;
    padding: 14px 32px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    transition: background-color 0.3s;

    &:hover {
        background-color: #2980b9;
    }
`;

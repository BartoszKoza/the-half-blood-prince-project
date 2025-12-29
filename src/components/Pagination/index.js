import {
  Wrapper,
  LeftGroup,
  RightGroup,
  Button,
  PageInfo,
  ArrowIcon,
  PageText,
  PageNumber,
  DesktopOnly,
  MobileOnly,
} from "./styled";

import leftArrow from "../../images/left-arrow.svg";
import rightArrow from "../../images/right-arrow.svg";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  const goToPage = (page) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    onPageChange(page);
  };

  return (
    <Wrapper>
      <LeftGroup>
        <Button
          $variant={canGoPrev ? "primary" : "secondary"}
          disabled={!canGoPrev}
          onClick={() => goToPage(1)}
        >
          <MobileOnly>
            <ArrowIcon src={leftArrow} $active={canGoPrev} />
            <ArrowIcon src={leftArrow} $active={canGoPrev} />
          </MobileOnly>

          <DesktopOnly>
            <ArrowIcon src={leftArrow} $active={canGoPrev} />
            First
          </DesktopOnly>
        </Button>

        <Button
          $variant={canGoPrev ? "primary" : "secondary"}
          disabled={!canGoPrev}
          onClick={() => goToPage(currentPage - 1)}
        >
          <MobileOnly>
            <ArrowIcon src={leftArrow} $active={canGoPrev} />
          </MobileOnly>

          <DesktopOnly>
            <ArrowIcon src={leftArrow} $active={canGoPrev} />
            Previous
          </DesktopOnly>
        </Button>
      </LeftGroup>

      <PageInfo>
        <PageText>Page</PageText>
        <PageNumber>{currentPage}</PageNumber>
        <PageText>of</PageText>
        <PageNumber>{totalPages}</PageNumber>
      </PageInfo>

      <RightGroup>
        <Button
          $variant="primary"
          disabled={!canGoNext}
          onClick={() => goToPage(currentPage + 1)}
        >
          <MobileOnly>
            <ArrowIcon src={rightArrow} $active={canGoNext} />
          </MobileOnly>

          <DesktopOnly>
            Next
            <ArrowIcon src={rightArrow} $active={canGoNext} />
          </DesktopOnly>
        </Button>

        <Button
          $variant="primary"
          disabled={!canGoNext}
          onClick={() => goToPage(totalPages)}
        >
          <MobileOnly>
            <ArrowIcon src={rightArrow} $active={canGoNext} />
            <ArrowIcon src={rightArrow} $active={canGoNext} />
          </MobileOnly>

          <DesktopOnly>
            Last
            <ArrowIcon src={rightArrow} $active={canGoNext} />
          </DesktopOnly>
        </Button>
      </RightGroup>
    </Wrapper>
  );
};

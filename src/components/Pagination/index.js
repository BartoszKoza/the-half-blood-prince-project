import {
  Wrapper,
  Button,
  PageInfo,
  ArrowIcon,
} from "./styled";

import leftArrow from "../../images/left-arrow.svg";
import rightArrow from "../../images/right-arrow.svg";

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  return (
    <Wrapper>
      <Button
        disabled={currentPage === 1}
        onClick={() => onPageChange(1)}
      >
        <ArrowIcon src={leftArrow} />
        First
      </Button>

      <Button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ArrowIcon src={leftArrow} />
        Previous
      </Button>

      <PageInfo>
        Page <strong>{currentPage}</strong> of{" "}
        <strong>{totalPages}</strong>
      </PageInfo>

      <Button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        right
      >
        Next
        <ArrowIcon src={rightArrow} />
      </Button>

      <Button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(totalPages)}
        right
      >
        Last
        <ArrowIcon src={rightArrow} />
      </Button>
    </Wrapper>
  );
};

import { ImageWrapper, Title } from "./styled";
import { ReactComponent as NoResultsImage } from "../../images/no-result.svg";

export default function NoResults({ query, title }) {
  return (
    <>
      <Title>
        {title ?? `Sorry, there are no results for "${query}"`}
      </Title>

      <ImageWrapper>
        <NoResultsImage />
      </ImageWrapper>
    </>
  );
}

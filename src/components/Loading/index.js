import { LoadingWrapper, Spinner, LoadingText } from "./styled";
import spinner from "../../images/spinner.svg";

export default function Loading({ text = "Loading..." }) {
  return (
    <LoadingWrapper>
      <Spinner src={spinner} alt="Loading" />
      <LoadingText>{text}</LoadingText>
    </LoadingWrapper>
  );
}

import {
  Wrapper,
  Content,
  Icon,
  TextContainer,
  Title,
  Description,
  Button
} from "./styled";
import warningIcon from "../../images/warning.svg";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Content>
        <Icon src={warningIcon} alt="Error icon" />

        <TextContainer>
          <Title>Ooops! Something went wrong...</Title>
          <Description>
            Please check your network connection and try again
          </Description>
        </TextContainer>

        <Button onClick={() => navigate("/movies")}>
          Back to home page
        </Button>
      </Content>
    </Wrapper>
  );
};

export default ErrorPage;

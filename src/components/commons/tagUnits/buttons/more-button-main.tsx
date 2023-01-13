import styled from "@emotion/styled";
import theme from "styles/theme";

interface IMoreButtonMain {
  text: string
}

const Button = styled.button`
  width: 100%;
  padding: 16px 0;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  background-color: ${theme.colors.primary};
  border: 1px solid white;
  color: white;
  
  :hover {
    background-color: white;
    border: 1px solid ${theme.colors.primary};
    color: black;
  }
`;

function MoreButtonMain(props: IMoreButtonMain) {
  return (
    <Button >{props.text}</Button>
  );
}

export default MoreButtonMain;

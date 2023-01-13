import styled from "@emotion/styled";
import theme from "styles/theme";
import {useRouter} from "next/router";

interface IRequestLargeButtonMain {
  text: string
  marginRight?: string
}

function RequestLargeButtonMain(props: IRequestLargeButtonMain) {
  const Button = styled.button`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 14px;
    margin-right: ${props.marginRight};
    background-color: ${theme.colors.primary};
    border: 1px solid white;
    color: white;

    :hover {
      background-color: white;
      border: 1px solid ${theme.colors.primary};
      color: black;
    }
  `;

  return (
    <Button>{props.text}</Button>
  );
}

export default RequestLargeButtonMain;

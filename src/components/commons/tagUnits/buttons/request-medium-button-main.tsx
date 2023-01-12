import styled from "@emotion/styled";
import theme from "styles/theme";
import {useRouter} from "next/router";

interface IPushSmallButtonWhite {
  text: string
  marginRight?: string
}


function RequestMediumButtonMain(props: IPushSmallButtonWhite) {
  const Button = styled.button`
    width: 200px;
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
  `

  return (
    <Button>{props.text}</Button>
  );
}

export default RequestMediumButtonMain;

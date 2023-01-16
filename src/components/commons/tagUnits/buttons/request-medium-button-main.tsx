import styled from "@emotion/styled";
import common from "@styles/commons";
import {useRouter} from "next/router";

interface IRequestMediumButtonMain {
  text: string
  marginRight?: string
}

function RequestMediumButtonMain(props: IRequestMediumButtonMain) {
  const Button = styled.button`
    width: 200px;
    height: 40px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 14px;
    margin-right: ${props.marginRight};
    background-color: ${common.colors.primary};
    border: 1px solid white;
    color: white;

    :hover {
      background-color: white;
      border: 1px solid ${common.colors.primary};
      color: black;
    }
  `;

  return (
    <Button>{props.text}</Button>
  );
}

export default RequestMediumButtonMain;

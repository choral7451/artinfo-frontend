import styled from "@emotion/styled";
import {useRouter} from "next/router";
import commons from "@styles/commons";

interface IPushButtonMain {
  text: string
  onPush: string
  width: string
  height?: string
  margin?: string
}

function PushButtonMain(props: IPushButtonMain) {
  const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props.width};
    height: ${ props.height ?? '40px' };
    border-radius: 5px;
    font-weight: bold;
    font-size: 14px;
    background-color: ${commons.colors.primary};
    border: 1px solid white;
    color: white;
    margin: ${props.margin};
  
    :hover {
      cursor: pointer;
      background-color: white;
      border: 1px solid ${commons.colors.primary};
      color: black;
    }
  `;

  const router = useRouter();

  const onClickPush = (url: string) => () => {
    router.push(url);
  };

  return (
    <Button onClick={onClickPush(props.onPush)}>{props.text}</Button>
  );
}

export default PushButtonMain;

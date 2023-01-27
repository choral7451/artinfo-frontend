import styled from "@emotion/styled";
import {useRouter} from "next/router";
import commons from "@styles/commons";

interface IPushSmallButtonMain {
  text: string
  onPush: string
}

const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  background-color: ${commons.colors.primary};
  border: 1px solid white;
  color: white;
  
  :hover {
    background-color: white;
    border: 1px solid ${commons.colors.primary};
    color: black;
  }
`;

function PushSmallButtonMain(props: IPushSmallButtonMain) {
  const router = useRouter();

  const onClickPush = (url: string) => () => {
    router.push(url);
  };

  return (
    <Button onClick={onClickPush(props.onPush)}>{props.text}</Button>
  );
}

export default PushSmallButtonMain;

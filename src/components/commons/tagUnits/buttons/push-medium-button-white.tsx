import styled from "@emotion/styled";
import common from "@styles/commons";
import {useRouter} from "next/router";

interface IPushSmallButtonWhite {
  text: string
  onPush: string
  marginRight?: string
}

function PushMediumButtonWhite(props: IPushSmallButtonWhite) {
  const Button = styled.button`
    border: 1px solid ${common.colors.primary};
    height: 40px;
    width: 200px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 14px;
    margin-right: ${props.marginRight};
    
    :hover {
      color: white;
      background-color: ${common.colors.primary};
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

export default PushMediumButtonWhite;

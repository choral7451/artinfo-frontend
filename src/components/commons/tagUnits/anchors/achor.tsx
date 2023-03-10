import styled from "@emotion/styled";
import { useRouter } from "next/router";
import common from "@styles/commons";

interface IAnchor {
  text: string;
  fontSize: string;
  onPush: string;
  marginRight?: string;
}

function Anchor(props: IAnchor) {
  const Anchor = styled.a`
    font-weight: bold;
    font-size: ${props.fontSize};
    margin-right: ${props.marginRight};
    
    :hover {
      cursor: pointer;
      color: ${common.colors.primary};
    }
  `;

  const router = useRouter();
  const onClickPush = (url: string) => () => {
    router.push(url);
  };
  return (
    <Anchor onClick={onClickPush(props.onPush)}>{props.text}</Anchor>
  );
}

export default Anchor;
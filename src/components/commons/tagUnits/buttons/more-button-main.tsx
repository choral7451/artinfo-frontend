import styled from "@emotion/styled";
import common from "@styles/commons";
import commons from "@styles/commons";

interface IMoreButtonMain {
  text: string
  width?: string
  margin?: string
}

function MoreButtonMain(props: IMoreButtonMain) {
  let width = props.width ?? '100%';

  const Button = styled.button`
  width: ${width};
  padding: 16px 0;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  background-color: ${common.colors.primary};
  border: 1px solid white;
  color: white;
  margin: ${props.margin};
  
  :hover {
    background-color: white;
    border: 1px solid ${common.colors.primary};
    color: black;
  }

  @media(max-width: ${commons.device.mobile}){
    width: 100%;
  }
`;
  return (
    <Button >{props.text}</Button>
  );
}

export default MoreButtonMain;

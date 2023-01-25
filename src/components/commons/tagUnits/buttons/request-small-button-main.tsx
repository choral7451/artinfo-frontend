import styled from "@emotion/styled";
import common from "@styles/commons";

interface IRequestSmallButtonMain {
  text: string
  marginRight?: string
}

function RequestSmallButtonMain(props: IRequestSmallButtonMain) {
  const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  background-color: ${common.colors.primary};
  margin-right: ${props.marginRight};
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

export default RequestSmallButtonMain;

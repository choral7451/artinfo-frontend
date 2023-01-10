import { SwapLeftOutlined, SwapRightOutlined } from "@ant-design/icons";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import theme from "styles/theme";
import { v4 as uuidv4 } from 'uuid';

interface IBoardNav {
  nav: string[];
}

export default function BoardNav(props: IBoardNav) {
  const [move, setMove] = useState(0);
  const [toMove, setToMove] = useState(0);

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-bottom: 40px;
    @media (max-width: 575.98px) {
      display: none;
    }
  `;

  const Arrow = styled.div`
    z-index: 1;
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 60px;
    font-size: 20px;
    width: 130px;
  `;

  const Frame = styled.div`
    height: 50px;
    width: 130px;
    overflow: hidden;
    cursor: pointer;
    :hover {
      overflow: visible;
      transition: all 2s ease-in-out;
    }
  `;

  const keyFrames = `0%{right:${move}px} 100% { right:${toMove}px}`;
  const Right = keyframes`
    ${keyFrames}
  `;

  const NavAll = styled.div`
    height: 60px;
    position: relative;
    display: flex;
    width: fit-content;
    border-bottom: 1px solid #a1b4cf;
    background-color: white;
    animation: ${Right} 1s 1 forwards;
  `;

  const NavText = styled.div`
    font-size: 20px;
    font-weight: bold;
    height: 100%;
    width: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.primary};
    :hover {
      color: white;
      background-color: ${theme.colors.primary};
      transition: all 0.2s ease-in-out;
    }
  `;

  const onClickNav = (right: number) => () => {
    setMove(toMove);
    setToMove(right * 130);
  };

  const navArr = props.nav?.map((el, idx) => {
    return (
      <NavText key={uuidv4()} onClick={onClickNav(idx)}>
        {el}
      </NavText>
    );
  });

  return (
    <>
      {" "}
      <Wrapper>
        <Arrow>
          <SwapLeftOutlined />
          <SwapRightOutlined />
        </Arrow>
        <Frame>
          <NavAll>{navArr}</NavAll>
        </Frame>
      </Wrapper>
    </>
  );
}

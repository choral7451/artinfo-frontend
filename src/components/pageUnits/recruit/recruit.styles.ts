import styled from "@emotion/styled";
import commons from "@styles/commons";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;

  @media(max-width: ${commons.device.tablet}) {
    width: 85%;
  }
`;

export const Title = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: black;
`;

export const BoardControllerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  
  @media(max-width: ${commons.device.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const ControllerButtonsWrapper = styled.div`
  display: flex;
  
  
  @media(max-width: ${commons.device.tablet}) {
    justify-content: space-around;
    padding-top: 30px;
    width: 50%;
  }

  @media(max-width: ${commons.device.mobile}) {
    justify-content: space-around;
    padding-top: 30px;
    width: 80%;
  }
`;

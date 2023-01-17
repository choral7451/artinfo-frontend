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
  margin: 60px 0 20px 0;

  @media(max-width: ${commons.device.mobile}) {
    width: 90%;
  }
`;
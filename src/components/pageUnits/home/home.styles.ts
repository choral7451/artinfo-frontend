import styled from "@emotion/styled";
import commons from "@styles/commons";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  @media (max-width: ${commons.device.tablet}) {
    width: 85%;
  }
`;

export const SubTitle = styled.div`
  padding: 10px 0;
  font-size: 26px;
  font-weight: bold;
  width: 100%;
`;

export const Concerts = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: scroll;
  width: 100%;
`;

export const BoardTitle = styled.div`
  padding: 20px 0;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
`;

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 1180px) {
    flex-direction: column;
  }
`;

export const Board = styled.div`
  width: 45%;
  @media (max-width: 1180px) {
    margin-bottom: 40px;
    flex-direction: column;
    width: 100%;
  }
`;

export const BoardBodyWrapper = styled.div`
  border-top: 2px solid ${commons.colors.primary};
  width: 100%;
`;

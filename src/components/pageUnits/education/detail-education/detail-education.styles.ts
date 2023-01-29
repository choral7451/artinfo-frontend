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
  margin-top: 80px;
  margin-bottom: 60px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: ${commons.colors.primary};
  border-bottom: 1px solid ${commons.colors.primary};
`;

export const DetailBoardInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-top: 50px;
  margin-bottom: 40px;
  
  @media(max-width: ${commons.device.mobile}) {
    justify-content: space-around;
  }
`;

export const detailBoardTitle = styled.div`
  width: 80%;
  text-align: center;
  font-size: 24px;
  font-weight: bold;

  @media(max-width: ${commons.device.mobile}) {
    width: 90%;
  }
`;

export const BoardContents = styled.div`
  width: 80%;
  margin-top: 80px;

  @media(max-width: ${commons.device.mobile}) {
    margin-top: 40px;
    width: 100%;
  }
`;

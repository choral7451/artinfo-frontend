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

export const ConcertInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80px;
  border: 1px solid ${commons.colors.primary};
  border-radius: 50px;

  @media(max-width: ${commons.device.tablet}) {
    flex-direction: column;
    height: 100px;
    font-size: 14px;
  }

  @media(max-width: ${commons.device.mobile}) {
    width: 100%;
  }
`;

export const ConcertLocationWrapper = styled.div`
  display: flex;
  width: 40%;
  
  @media(max-width: ${commons.device.tablet}) {
    align-items: center;
    height: 60%;
    width: 100%;
  }
`;

export const ConcertLocationText = styled.div`
  font-weight: bold;
  margin-left: 50px;
`;

export const ConcertLocation = styled.div`
  margin-left: 50px;

  @media(max-width: ${commons.device.mobile}) {
    margin-left: 30px;
  }
`;

export const ConcertDateAndTimeWrapper = styled.div`
  display: flex;
  width: 60%;

  @media(max-width: ${commons.device.tablet}) {
    height: 40%;
    width: 100%;
  }
`;

export const ConcertDateAndTimeText = styled.div`
  font-weight: bold;
  margin-left: 50px;
`;

export const ConcertDate = styled.div`
  margin-left: 50px;

  @media(max-width: ${commons.device.mobile}) {
    margin-left: 30px;
  }
`;

export const ConcertTime = styled.div`
  margin-left: 30px;

  @media(max-width: ${commons.device.mobile}) {
    margin-left: 20px;
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

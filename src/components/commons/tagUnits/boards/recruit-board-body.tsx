import styled from "@emotion/styled";
import common from "@styles/commons";
import commons from "@styles/commons";

const Wrapper = styled.div`
  width: 100%;
`;
const Header = styled.div`
  width: 100%;
  border-top: 2px solid ${common.colors.primary};
  border-bottom: 2px solid ${common.colors.primary};
  font-weight: bold;
  display: flex;
  font-size: 18px;
`;
const Body = styled.div`
  margin-bottom: 60px;
`;

const ColumnNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 5%;
  @media(max-width: ${commons.device.tablet}) {
    display: none;
  }
`;

const ColumnTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 55%;
  

  @media(max-width: ${commons.device.tablet}) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 80%;
    padding-left: 10px;
    justify-content: start;
  }

  @media(max-width: ${commons.device.mobile}) {
    width: 65%;
  }
`;

const ColumnAuthor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 15%;

  @media(max-width: ${commons.device.tablet}) {
    display: none;
  }
`;

const ColumnViews = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 10%;

  @media(max-width: ${commons.device.tablet}) {
    display: none;
  }
`;

const ColumnDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 15%;

  @media(max-width: ${commons.device.tablet}) {
    width: 20%;
  }

  @media(max-width: ${commons.device.mobile}) {
    width: 35%;
  }
`;

const Row = styled.div`
  display: flex;
  font-size: 16px;
  border-bottom: 1px solid ${common.colors.primary};
  
  @media(max-width: ${commons.device.mobile}) {  
    font-size: 14px;
  }
`;

function RecruitBoardBody() {
  return (
    <Wrapper>
      <Header>
        <ColumnNumber>번호</ColumnNumber>
        <ColumnTitle style={{ justifyContent: "center" }}>제목</ColumnTitle>
        <ColumnAuthor>글쓴이</ColumnAuthor>
        <ColumnViews>조회수</ColumnViews>
        <ColumnDate>등록일</ColumnDate>
      </Header>
      <Body>
        <Row>
          <ColumnNumber>1</ColumnNumber>
          <ColumnTitle>국립합창단 제 5차 정규직 직원 모집국립합창단 제 5차 정규직 직원 모집국립합창단 제 5차 정규직 직원 모집</ColumnTitle>
          <ColumnAuthor>임성준</ColumnAuthor>
          <ColumnViews>5</ColumnViews>
          <ColumnDate>2023-01-11</ColumnDate>
        </Row>
      </Body>
    </Wrapper>
  );
}

export default RecruitBoardBody;
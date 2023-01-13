import styled from "@emotion/styled";
import theme from "@styles/theme";

const Wrapper = styled.div`
  width: 100%;
`;
const Header = styled.div`
  width: 100%;
  border-top: 2px solid ${theme.colors.primary};
  border-bottom: 2px solid ${theme.colors.primary};
  font-weight: bold;
  display: flex;
`;
const Body = styled.div`
  margin-bottom: 60px;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  font-size: 18px;
`;

const Row = styled.div`
  display: flex;
  border-bottom: 1px solid ${theme.colors.primary};
`;

const RowField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  font-size: 16px;
`;

function NoticeBoardBody() {
  return (
    <Wrapper>
      <Header>
        <Column style={{ width: "5%"}}>번호</Column>
        <Column style={{ width: "65%"}}>제목</Column>
        <Column style={{ width: "10%"}}>조회수</Column>
        <Column style={{ width: "20%"}}>등록일</Column>
      </Header>
      <Body>
        <Row>
          <RowField style={{ width: "5%"}}>1</RowField>
          <RowField style={{ width: "65%"}}>국립합창단 제 5차 정규직 직원 모집</RowField>
          <RowField style={{ width: "10%"}}>5</RowField>
          <RowField style={{ width: "20%"}}>2023-01-11</RowField>
        </Row>
      </Body>
    </Wrapper>
  );
}

export default NoticeBoardBody;
import styled from "@emotion/styled";
import theme from "@styles/theme";

const Wrapper = styled.div`
  width: 100%;
`
const Header = styled.div`
  width: 100%;
  border-top: 2px solid ${theme.colors.primary};
  border-bottom: 2px solid ${theme.colors.primary};
  display: flex;
`
const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  font-size: 18px;
  font-weight: bold;
`

function IssueBoardBody() {

  return (
    <Wrapper>
      <Header>
        <Column style={{ width: "5%"}}>번호</Column>
        <Column style={{ width: "50%"}}>제목</Column>
        <Column style={{ width: "15%"}}>글쓴이</Column>
        <Column style={{ width: "10%"}}>조회수</Column>
        <Column style={{ width: "20%"}}>등록일</Column>
      </Header>
    </Wrapper>
  );
}

export default IssueBoardBody;
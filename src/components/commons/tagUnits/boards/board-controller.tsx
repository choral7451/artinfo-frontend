import styled from "@emotion/styled";
import PushSmallButtonMain from "../buttons/push-small-button-main";
import BoardSearch from "./board-search";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`


function BoardController() {
  return (
    <Wrapper>
      <BoardSearch />
      <PushSmallButtonMain text={"글쓰기"} onPush={"/issue/write"} />
    </Wrapper>
  );
}

export default BoardController;
import * as S from './issue.styles'
import BoardNav from "@tagUnits/boards/board-nav";
import MoreLargeButtonMain from "@tagUnits/buttons/more-large-button-main";
import BoardController from "@tagUnits/boards/board-controller";
import IssueBoardBody from "@tagUnits/boards/issue-board-body";

function IssuePresenter() {
  return (
    <S.Wrapper>
      <S.Title>이슈</S.Title>
      <BoardNav
        nav={["전체", "이슈", "후기", "자유게시판"]}
      />
      <BoardController />
      <IssueBoardBody />
      <MoreLargeButtonMain text={"더보기"} />
    </S.Wrapper>
  );
}

export default IssuePresenter;
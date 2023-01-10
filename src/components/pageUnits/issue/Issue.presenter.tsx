import * as S from './issue.styles'
import BoardNav from "src/components/commons/tagUnits/boards/board-nav";
import MoreLargeButtonMain from "@tagUnits/buttons/more-large-button-main";
import BoardController from "@tagUnits/boards/board-controller";
import IssueBoardBody from "@tagUnits/boards/issue-board-body";

function IssuePresenter() {
  return (
    <S.Wrapper>
      <S.Title>이슈</S.Title>
      <BoardNav
        nav={["전체", "오케스트라", "합창", "앙상블", "솔로", "기타"]}
      />
      <BoardController />
      <IssueBoardBody />
      <MoreLargeButtonMain text={"더보기"} />
    </S.Wrapper>
  );
}

export default IssuePresenter;
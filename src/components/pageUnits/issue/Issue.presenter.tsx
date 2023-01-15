import * as S from './issue.styles';
import BoardNav from "@tagUnits/boards/board-nav";
import MoreButtonMain from "@tagUnits/buttons/more-button-main";
import IssueBoardBody from "@tagUnits/boards/issue-board-body";
import BoardSearch from "@tagUnits/boards/board-search";
import PushSmallButtonMain from "@tagUnits/buttons/push-small-button-main";

function IssuePresenter() {
  return (
    <S.Wrapper>
      <S.Title>이슈</S.Title>
      <BoardNav
        nav={["전체", "이슈", "후기", "자유게시판"]}
      />
      <S.BoardControllerWrapper>
        <BoardSearch />
        <PushSmallButtonMain text={"글쓰기"} onPush={"/issue/write"} />
      </S.BoardControllerWrapper>
      <IssueBoardBody />
      <MoreButtonMain text={"더보기"} />
    </S.Wrapper>
  );
}

export default IssuePresenter;
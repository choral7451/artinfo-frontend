import * as S from './issue.styles';
import MoreButtonMain from "@tagUnits/buttons/more-button-main";
import IssueBoardBody from "@tagUnits/boards/issue-board-body";
import BoardSearch from "@tagUnits/boards/board-search";
import PushSmallButtonMain from "@tagUnits/buttons/push-small-button-main";
import BoardCategory from "@tagUnits/boards/write-board/board-category";

function IssuePresenter() {
  return (
    <S.Wrapper>
      <S.Title>이슈</S.Title>
      <BoardSearch />
      <S.BoardControllerWrapper>
        <BoardCategory
          elementArr={["전체", "이슈", "후기", "자유게시판"]}
          elementAll={false}
          display={{ pc: "initial", mobile: "initial" }}
        />
        <PushSmallButtonMain text={"글쓰기"} onPush={"/concert/write"} />
      </S.BoardControllerWrapper>
      <IssueBoardBody />
      <MoreButtonMain text={"더보기"} />
    </S.Wrapper>
  );
}

export default IssuePresenter;
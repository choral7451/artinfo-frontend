import * as S from "./recruit.styles";
import BoardNav from "@tagUnits/boards/board-nav";
import MoreButtonMain from "@tagUnits/buttons/more-button-main";
import RecruitBoardBody from "@tagUnits/boards/recruit-board-body";
import BoardSearch from "@tagUnits/boards/board-search";
import PushSmallButtonMain from "@tagUnits/buttons/push-small-button-main";

function RecruitPresenter() {
  return (
    <S.Wrapper>
      <S.Title>채용</S.Title>
      <BoardNav
        nav={["전체", "예술단체", "종교", "기타"]}
      />
      <S.BoardControllerWrapper>
        <BoardSearch />
        <PushSmallButtonMain text={"글쓰기"} onPush={"/recruit/write"} />
      </S.BoardControllerWrapper>
      <RecruitBoardBody />
      <MoreButtonMain text={"더보기"} />
    </S.Wrapper>
  );
}

export default RecruitPresenter;
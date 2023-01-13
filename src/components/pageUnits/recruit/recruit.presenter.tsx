import * as S from "./recruit.styles";
import BoardNav from "@tagUnits/boards/board-nav";
import BoardController from "@tagUnits/boards/board-controller";
import MoreButtonMain from "@tagUnits/buttons/more-button-main";
import RecruitBoardBody from "@tagUnits/boards/recruit-board-body";

function RecruitPresenter() {
  return (
    <S.Wrapper>
      <S.Title>채용</S.Title>
      <BoardNav
        nav={["전체", "예술단체", "종교", "기타"]}
      />
      <BoardController />
      <RecruitBoardBody />
      <MoreButtonMain text={"더보기"} />
    </S.Wrapper>
  );
}

export default RecruitPresenter;
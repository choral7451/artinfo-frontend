import * as S from "./education.styles";
import BoardNav from "@tagUnits/boards/board-nav";
import BoardController from "@tagUnits/boards/board-controller";
import MoreButtonMain from "@tagUnits/buttons/more-button-main";
import EducationBoardBody from "@tagUnits/boards/education-board-body";

function EducationPresenter() {
  return (
    <S.Wrapper>
      <S.Title>교육</S.Title>
      <BoardNav
        nav={["전체", "콩쿨", "세미나", "교육"]}
      />
      <BoardController />
      <EducationBoardBody />
      <MoreButtonMain text={"더보기"} />
    </S.Wrapper>
  );
}

export default EducationPresenter;
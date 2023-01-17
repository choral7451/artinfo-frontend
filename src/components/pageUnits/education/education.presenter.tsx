import * as S from "./education.styles";
import BoardNav from "@tagUnits/boards/board-nav";
import MoreButtonMain from "@tagUnits/buttons/more-button-main";
import EducationBoardBody from "@tagUnits/boards/education-board-body";
import BoardSearch from "@tagUnits/boards/board-search";
import PushSmallButtonMain from "@tagUnits/buttons/push-small-button-main";
import BoardCategory from "@tagUnits/boards/write-board/board-category";

function EducationPresenter() {
  return (
    <S.Wrapper>
      <S.Title>교육</S.Title>
      <BoardSearch />
      <S.BoardControllerWrapper>
        <BoardCategory
          elementArr={["전체", "콩쿨", "세미나", "교육"]}
          elementAll={false}
          display={{ pc: "initial", mobile: "initial" }}
        />
        <PushSmallButtonMain text={"글쓰기"} onPush={"/recruit/write"} />
      </S.BoardControllerWrapper>
      <EducationBoardBody />
      <MoreButtonMain text={"더보기"} />
    </S.Wrapper>
  );
}

export default EducationPresenter;
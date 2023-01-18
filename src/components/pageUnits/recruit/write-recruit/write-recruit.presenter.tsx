import * as S from "./write-recruit.styles";
import BoardCategory from "@tagUnits/boards/write-board/board-category";
import WriteBoard from "@tagUnits/boards/write-board/write-board";
import RequestMediumButtonMain from "@tagUnits/buttons/request-medium-button-main";
import PushMediumButtonWhite from "@tagUnits/buttons/push-medium-button-white";

function WriteRecruitPresenter() {
  return (
    <S.Wrapper>
      <S.Title>채용</S.Title>
      <S.WriteBoardWrapper>
        <S.SelectWrapper>
          <S.SelectLabel>분류</S.SelectLabel>
          <BoardCategory
            elementArr={[ "예술단체", "종교", "기타"]}
            elementAll={false}
            display={{ pc: "initial", mobile: "initial" }}
          />
        </S.SelectWrapper>
        <S.BoardTitleInput placeholder={'제목을 입력해주세요.'}/>
        <WriteBoard />
        <S.BoardControllerWrapper>
          <RequestMediumButtonMain text={'확인'} margin={'10px 20px'}/>
          <PushMediumButtonWhite text={"취소"} onPush={"/recruit"} margin={'10px 20px'}/>
        </S.BoardControllerWrapper>
      </S.WriteBoardWrapper>
    </S.Wrapper>
  );
}

export default WriteRecruitPresenter;
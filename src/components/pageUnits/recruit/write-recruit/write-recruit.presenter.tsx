import * as S from "@src/components/pageUnits/issue/write-issue/write-issue.styles";
import BoardCategory from "@tagUnits/boards/write-board/board-category";
import WriteBoard from "@tagUnits/boards/write-board/write-board";
import {BoardControllerWrapper} from "@src/components/pageUnits/issue/write-issue/write-issue.styles";
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
        <BoardControllerWrapper>
          <RequestMediumButtonMain text={'확인'} marginRight={'20px'}/>
          <PushMediumButtonWhite text={"취소"} onPush={"/recruit"}/>
        </BoardControllerWrapper>
      </S.WriteBoardWrapper>
    </S.Wrapper>
  );
}

export default WriteRecruitPresenter;
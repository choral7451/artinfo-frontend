import * as S from './write-issue.styles';
import BoardCategory from "@tagUnits/boards/write-board/board-category";
import WriteBoard from "@tagUnits/boards/write-board/write-board";
import PushMediumButtonWhite from "@tagUnits/buttons/push-medium-button-white";
import RequestMediumButtonMain from "@tagUnits/buttons/request-medium-button-main";

function WriteIssuePresenter() {
  return (
    <S.Wrapper>
      <S.Title>이슈</S.Title>
      <S.WriteBoardWrapper>
        <S.SelectWrapper>
          <S.SelectLabel>분류</S.SelectLabel>
          <BoardCategory
            elementArr={[ "자유게시판", "이슈", "후기"]}
            elementAll={false}
            display={{ pc: "initial", mobile: "initial" }}
          />
        </S.SelectWrapper>
        <S.BoardTitleInput placeholder={'제목을 입력해주세요.'}/>
        <WriteBoard />
        <S.BoardControllerWrapper>
          <RequestMediumButtonMain text={'확인'} margin={'10px 20px'}/>
          <PushMediumButtonWhite text={"취소"} onPush={"/issue"} margin={'10px 20px'}/>
        </S.BoardControllerWrapper>
      </S.WriteBoardWrapper>
    </S.Wrapper>
  );
}

export default WriteIssuePresenter;
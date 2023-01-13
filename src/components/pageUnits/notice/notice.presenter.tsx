import * as S from "./notice.styles";
import MoreButtonMain from "@tagUnits/buttons/more-button-main";
import NoticeBoardBody from "@tagUnits/boards/notice-board-body";

function NoticePresenter() {
  return (
    <S.Wrapper>
      <S.Title>공지</S.Title>
      <NoticeBoardBody />
      <MoreButtonMain text={"더보기"} />
    </S.Wrapper>
  );
}

export default NoticePresenter;
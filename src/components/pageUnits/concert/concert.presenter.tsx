import * as S from "./concert.styles";
import BoardNav from "@tagUnits/boards/board-nav";
import Poster from "@tagUnits/card/poster";
import BoardSearch from "@tagUnits/boards/board-search";
import PushSmallButtonMain from "@tagUnits/buttons/push-small-button-main";
import BoardCategory from "@tagUnits/boards/write-board/board-category";
import MoreButtonMain from "@tagUnits/buttons/more-button-main";

function ConcertPresenter() {
  return (
    <S.Wrapper>
      <S.Title>공연</S.Title>
      <BoardSearch />
      <S.BoardControllerWrapper>
        <BoardCategory
          elementArr={["전체", "오케스트라", "합창", "앙상블", "솔로", "기타"]}
          elementAll={false}
          display={{ pc: "initial", mobile: "initial" }}
        />
        <PushSmallButtonMain text={"글쓰기"} onPush={"/concert/write"} />
      </S.BoardControllerWrapper>
      <S.PosterWrapper>
        <Poster />
        <Poster />
        <Poster />
        <Poster />
        <Poster />
      </S.PosterWrapper>
      <MoreButtonMain text={"더보기"} />
    </S.Wrapper>
  );
}

export default ConcertPresenter;
import * as S from "./concert.styles";
import BoardNav from "@tagUnits/boards/board-nav";
import BoardController from "@tagUnits/boards/board-controller";
import {BoardControllerWrapper} from "./concert.styles";
import Poster from "@tagUnits/card/poster";

function ConcertPresenter() {
  return (
    <S.Wrapper>
      <S.Title>공연</S.Title>
      <BoardNav
        nav={["전체", "오케스트라", "합창", "앙상블", "솔로", "기타"]}
      />
      <BoardControllerWrapper>
        <BoardController />
      </BoardControllerWrapper>
      <S.PosterWrapper>
        <Poster />
        <Poster />
        <Poster />
        <Poster />
        <Poster />
      </S.PosterWrapper>
    </S.Wrapper>
  );
}

export default ConcertPresenter;
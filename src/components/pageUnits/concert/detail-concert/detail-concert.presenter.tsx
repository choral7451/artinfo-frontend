import * as S from "./detail-concert.styles";
import DetailBoardInfo from "@tagUnits/boards/detail-board/detail-board-info";
import PushSmallButtonMain from "@tagUnits/buttons/push-small-button-main";
import CommentView from "@tagUnits/card/comment-view";
import MoreButtonMain from "@tagUnits/buttons/more-button-main";
import CommentWrite from "@tagUnits/card/comment-write";
import {
  ConcertDate,
  ConcertDateAndTimeText,
  ConcertDateAndTimeWrapper,
  ConcertLocation,
  ConcertLocationText,
  ConcertLocationWrapper, ConcertTime
} from "./detail-concert.styles";

function DetailConcertPresenter() {
  return (
    <S.Wrapper>
      <S.Title>공연</S.Title>
      <S.detailBoardTitle>국립합창단 제 5차 정규직 직원 모집국립합창단 제 5차 정규직 직원 모집국립합창단 제 5차 정국립합창단 제 5차 정규직 직원 모집국립합창단 제 5차 정규직 직원 모집국립합창단 제 5차 정</S.detailBoardTitle>
      <S.DetailBoardInfoWrapper>
        <DetailBoardInfo
          userIconImage={"/images/login/kakao.svg"}
          userName={"choral"}
          countOfViews={63}
          countOfComments={32}
          createdAt={"23.01.25 15:44"}
        />
        <PushSmallButtonMain text={'목록'} onPush={'/recruit'} />
      </S.DetailBoardInfoWrapper>
      <S.ConcertInfoWrapper>
        <ConcertLocationWrapper>
          <ConcertLocationText>장소</ConcertLocationText>
          <ConcertLocation>예술의 전당 콘서트홀</ConcertLocation>
        </ConcertLocationWrapper>
        <ConcertDateAndTimeWrapper>
          <ConcertDateAndTimeText>일시</ConcertDateAndTimeText>
          <ConcertDate>2023년 01월 28일</ConcertDate>
          <ConcertTime>20:00</ConcertTime>
        </ConcertDateAndTimeWrapper>
      </S.ConcertInfoWrapper>
      <S.BoardContents>
        삼척시립합창단 비상임단원 모집 공고
        1. 공고기간 : 2023. 1. 16.(월) ~ 2. 3.(금)
        2. 접수기간 : 2023. 1. 16.(월) ~ 2. 3.(금)
        3. 모집분야 : 소프라노(00명), 알토(00명), 테너(00명), 베이스(00명)
        4. 지원방법 : 방문접수 및 우편접수(삼척시 중앙로 296 삼척시청 문화홍보실)
        5. 상세사항 : 공고문 참조
        붙임  2023 삼척시립합창단 비상임단원 모집 공고 1부.  끝.
      </S.BoardContents>
      <CommentView
        commentUserIconImage={"/images/login/kakao.svg"}
        commentUserName={"choral"}
        commentCreatedAt={"23.01.25 15:44"}
        commentContents={"붙임  2023 삼척시립합창단 비상임단원 모집 공고 1부.  끝.붙임  2023 삼척시립합창단 비상임단원 모집 공고 1부.  끝.붙임  2023 삼척시립합창단 비상임단원 모집 공고 1부.  끝.붙임  2023 삼척시립합창단 비상임단원 모집 공고 1부.  끝.붙임  2023 삼척시립합창단 비상임단원 모집 공고 1부.  끝."}
      />
      <MoreButtonMain text={'댓글 더보기'} width={"80%"} margin={"60px 0 0 0"}/>
      <CommentWrite display={true}/>
    </S.Wrapper>
  );
}

export default DetailConcertPresenter;
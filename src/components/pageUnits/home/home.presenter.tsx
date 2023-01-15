import * as S from './home.styles';
import Banner from "@tagUnits/banners/banner";
import Poster from "@tagUnits/card/poster";
import {IHomePresenter} from "@src/components/pageUnits/home/home.types";
import HomeBoardBodyLite from "@tagUnits/boards/board-body-lite";

function HomePresenter(props: IHomePresenter) {
  const posts = [
    {title: "국립합창단 제 5차 정규직 직원 모집", date: "2023-01-15"},
    {title: "국립합창단 제 5차 정규직 직원 모집", date: "2023-01-15"},
    {title: "국립합창단 제 5차 정규직 직원 모집", date: "2023-01-15"},
    {title: "국립합창단 제 5차 정규직 직원 모집", date: "2023-01-15"},
    {title: "국립합창단 제 5차 정규직 직원 모집", date: "2023-01-15"},
  ];

  return (
    <S.Wrapper>
      <Banner
        images={[
          "images/home/banner/test2.gif",
          "images/home/banner/test2.gif",
        ]}
      />
      <S.SubTitle>주목할 연주 ✨</S.SubTitle>
      <S.Concerts>
        <Poster infoDisplay={"none"} />
        <Poster infoDisplay={"none"} />
        <Poster infoDisplay={"none"} />
        <Poster infoDisplay={"none"} />
      </S.Concerts>
      <Banner
        images={["images/home/banner/test.gif", "images/home/banner/test.gif"]}
      />
      <S.BoardWrapper>
        <S.Board>
          <S.BoardTitle onClick={props.onClickPush("/recruit")}>
            채용 정보 🚀
          </S.BoardTitle>
          <S.BoardBodyWrapper>
            <HomeBoardBodyLite posts={posts}/>
          </S.BoardBodyWrapper>
        </S.Board>
        <S.Board>
          <S.BoardTitle onClick={props.onClickPush("/issue")}>
            이슈 💬
          </S.BoardTitle>
          <S.BoardBodyWrapper>
            <HomeBoardBodyLite posts={posts}/>
          </S.BoardBodyWrapper>
        </S.Board>
      </S.BoardWrapper>
    </S.Wrapper>
  );
}

export default HomePresenter;
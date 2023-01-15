import * as S from "./write-concert.styles";
import BoardCategory from "@tagUnits/boards/write-board/board-category";
import WriteBoard from "@tagUnits/boards/write-board/write-board";
import RequestMediumButtonMain from "@tagUnits/buttons/request-medium-button-main";
import PushMediumButtonWhite from "@tagUnits/buttons/push-medium-button-white";
import {IWriteConcertPresenter} from "@src/components/pageUnits/concert/write-concert/write-concert.type";
import { ko } from "date-fns/locale";

function WriteConcertPresenter(props: IWriteConcertPresenter) {
  return (
    <S.Wrapper>
      <S.Title>공연</S.Title>
      <S.WriteBoardWrapper>
        <S.SelectWrapper>
          <S.SelectLabel>분류</S.SelectLabel>
          <BoardCategory
            elementArr={["오케스트라", "합창", "앙상블", "솔로", "기타"]}
            elementAll={false}
            display={{ pc: "initial", mobile: "initial" }}
          />
        </S.SelectWrapper>
        <S.BoardTitleInput placeholder={'제목을 입력해주세요.'}/>
        <S.InfoWrapper >
          <S.InfoElementWrapper>
            <S.InfoTitle>장소</S.InfoTitle>
            <S.InfoInput placeholder={"장소를 입력해주세요."} />
          </S.InfoElementWrapper>
          <S.InfoElementWrapper>
            <S.InfoTitle>일시</S.InfoTitle>
            <S.PickWrapper>
              <S.DatePick
                selected={props.date}
                locale={ko}
                dateFormat={"yyyy년 MM월 dd일"}
                closeOnScroll={true}
                onChange={(date: Date) => props.onChangeConcertDate(date)}
              />
              <S.TimePick format={"HH:mm"} />
            </S.PickWrapper>
          </S.InfoElementWrapper>
        </S.InfoWrapper >
        <S.ImageWrapper >
          <S.ImageInputLabel>포스터</S.ImageInputLabel>
          <S.ImageInputWrapper>
            <S.ImageInputText>{props.imageTitle}</S.ImageInputText>
            <S.ImageInput type="file" onChange={props.onChangeImageTitle} />
          </S.ImageInputWrapper>
          <S.ImageDeleteButton onClick={props.onChangeImageTitle}>X</S.ImageDeleteButton>
        </S.ImageWrapper>
        <WriteBoard />
        <S.BoardControllerWrapper>
          <RequestMediumButtonMain text={'확인'} marginRight={'20px'}/>
          <PushMediumButtonWhite text={"취소"} onPush={"/concert"}/>
        </S.BoardControllerWrapper>
      </S.WriteBoardWrapper>
    </S.Wrapper>
  );
}

export default WriteConcertPresenter;
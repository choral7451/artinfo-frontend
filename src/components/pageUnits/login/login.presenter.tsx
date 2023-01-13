import * as S from './login.styles';
import Achor from "@tagUnits/anchors/achor";
import RequestLargeButtonMain from "@tagUnits/buttons/request-large-button-main";

function LoginPresenter() {
  return (
    <S.Wrapper>
      <S.Title>로그인</S.Title>
      <S.LoginForm>
        <S.InputWrapper>
          <S.Input placeholder="이메일" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Input placeholder="비밀번호" />
        </S.InputWrapper>
      </S.LoginForm>
      <S.FindPasswordWrapper>
        <S.FindPassword>비밀번호 찾기</S.FindPassword>
      </S.FindPasswordWrapper>
      <RequestLargeButtonMain text={'로그인'} />
      <S.SocialBtn
        style={{ backgroundColor: "rgb(3, 199, 90)", color: "white" }}
      >
        <S.BtnImg src={"/images/login/naver.svg"} />
        <S.BtnText>네이버 로그인</S.BtnText>
      </S.SocialBtn>
      <S.SocialBtn style={{ backgroundColor: "rgb(254, 229, 0)" }}>
        <S.BtnImg src={"/images/login/kakao.svg"} />
        <S.BtnText>카카오 로그인</S.BtnText>
      </S.SocialBtn>
      <S.SocialBtn>
        <S.BtnImg src={"/images/login/google.svg"} />
        <S.BtnText>구글 로그인</S.BtnText>
      </S.SocialBtn>
    </S.Wrapper>
  );
}

export default LoginPresenter;
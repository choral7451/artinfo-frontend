import * as S from "./signup.styles";
import Input from "@tagUnits/Inputs/Input";
import {SignupAndCancelButton} from "./signup.styles";

function SignupPresenter() {
  return (
    <S.Wrapper>
      <S.Title>회원가입</S.Title>
      <S.InputWrapper>
        <Input width={"70%"} placeholder={"이메일을 입력해주세요."} />
        <S.SendVerificationCode>인증번호 전송</S.SendVerificationCode>
      </S.InputWrapper>
      <S.InputWrapper>
        <Input width={"70%"} placeholder={"인증번호를 입력해주세요."} />
        <S.CountNumber>180</S.CountNumber>
        <S.CheckVerificationCode>인증</S.CheckVerificationCode>
      </S.InputWrapper>
      <S.InputWrapper>
        <Input width={"100%"} placeholder={"인증번호를 입력해주세요."} />
      </S.InputWrapper>
      <S.InputWrapper>
        <Input width={"100%"} placeholder={"비밀번호를 입력해주세요."} />
      </S.InputWrapper>
      <S.InputWrapper>
        <Input width={"100%"} placeholder={"비밀번호를 다시 입력해주세요."} />
      </S.InputWrapper>
      <S.TermsWrapper style={{ marginTop: "20px" }}>
        <S.CheckBox id="checkAll" type={"checkbox"} />
        <S.TermsTitle>전체 동의</S.TermsTitle>
      </S.TermsWrapper>
      <S.TermsWrapper>
        <S.CheckBox type={"checkbox"} />
        <S.TermsTitle>(필수) 이용약관 동의</S.TermsTitle>
        <S.TermsDetailArrow>{">"}</S.TermsDetailArrow>
      </S.TermsWrapper>
      <S.TermsWrapper>
        <S.CheckBox type={"checkbox"} />
        <S.TermsTitle>(필수) 개인정보 처리방침 동의</S.TermsTitle>
        <S.TermsDetailArrow>{">"}</S.TermsDetailArrow>
      </S.TermsWrapper>
      <S.TermsWrapper>
        <S.CheckBox type={"checkbox"} />
        <S.TermsTitle>(선택) 마케팅 수신 동의</S.TermsTitle>
      </S.TermsWrapper>
      <S.SignupAndCancelButton>회원가입</S.SignupAndCancelButton>
      <S.SignupAndCancelButton>취소</S.SignupAndCancelButton>
    </S.Wrapper>
  );
}

export default SignupPresenter;
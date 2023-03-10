import * as S from "./signup.styles";
import {ISignupPresenter} from "@src/components/pageUnits/signup/signyp.types";
import PushButtonMain from "@tagUnits/buttons/push-button-main";
import {MiddleSizeButton} from "./signup.styles";

function SignupPresenter(props: ISignupPresenter) {
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.requestSignup)}>
      <S.Title>회원가입</S.Title>
      <S.FieldWrapper>
        <S.InputWrapperSmall>
          <S.Input id='email' placeholder={"이메일을 입력해주세요."} onChange={props.onChange}/>
        </S.InputWrapperSmall>
        <S.MiddleSizeButton onClick={props.sendVerificationCode}>인증번호 전송</S.MiddleSizeButton>
      </S.FieldWrapper>
      <S.FieldWrapper>
        <S.InputWrapperSmall>
          <S.Input id='verificationCode' placeholder={"인증번호를 입력해주세요."} onChange={props.onChange}/>
        </S.InputWrapperSmall>
        <S.CountNumber>180</S.CountNumber>
        <S.VerifyEmail onClick={props.verifyEmail}>인증</S.VerifyEmail>
      </S.FieldWrapper>
      <S.FieldWrapper>
        <S.InputWrapperFull>
          <S.Input placeholder={"이름을 입력해주세요."} { ...props.register('name')}/>
        </S.InputWrapperFull>
      </S.FieldWrapper>
      <S.FieldWrapper>
        <S.InputWrapperSmall>
          <S.Input placeholder={"닉네임을 입력해주세요."} { ...props.register('nick_name')}/>
        </S.InputWrapperSmall>
        <S.MiddleSizeButton>중복 확인</S.MiddleSizeButton>
      </S.FieldWrapper>
      <S.FieldWrapper>
        <S.InputWrapperFull>
          <S.Input placeholder={"비밀번호를 입력해주세요."} { ...props.register('password')}/>
        </S.InputWrapperFull>
      </S.FieldWrapper>
      <S.FieldWrapper>
        <S.InputWrapperFull>
          <S.Input placeholder={"비밀번호를 다시 입력해주세요."} />
        </S.InputWrapperFull>
      </S.FieldWrapper>
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
      <S.SignupButton>회원가입</S.SignupButton>
      <PushButtonMain text={'취소'} onPush={'/login'} width={'80%'} height={'50px'} margin={'20px 0 0 0'}/>
    </S.Wrapper>
  );
}

export default SignupPresenter;
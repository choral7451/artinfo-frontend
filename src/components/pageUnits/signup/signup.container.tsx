import SignupPresenter from "@src/components/pageUnits/signup/signup.presenter";
import {useForm} from "react-hook-form";
import {post} from "@src/commons/axios/axios";
import {useState, ChangeEvent} from "react";
import isEmail from 'validator/lib/isEmail';

function SignupContainer() {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verifiedToken, setVerifiedToken] = useState('');

  const sendVerificationCode  = async () => {
    if(isEmail(email)) {
      await post('verification/email', {email});
    } else {
      alert('에러');
    }
  };

  const verifyEmail = async () => {
    const { data } = await post('verification/email/verify', {email, verificationCode});

    if(!data || !isEmail(email)) alert('에러');
    setVerifiedToken(data.verifiedToken);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.id === 'email') setEmail(e.target.value);
    if(e.target.id === 'verificationCode') setVerificationCode(e.target.value);
  };

  const requestSignup = (data: any) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState,
  } = useForm();

  return (
    <SignupPresenter
      register={register} //
      handleSubmit={handleSubmit}
      formState={formState}
      sendVerificationCode={sendVerificationCode}
      verifyEmail={verifyEmail}
      requestSignup={requestSignup}
      onChange={onChange}
    />
  );
}

export default SignupContainer;
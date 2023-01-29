import SignupPresenter from "@src/components/pageUnits/signup/signup.presenter";
import {useForm} from "react-hook-form";
import {get} from "@src/commons/axios/axios";

function SignupContainer() {
  const verifyEmail = async () => {
    const { data } = await get('user');
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
      verifyEmail={verifyEmail}
      requestSignup={requestSignup}/>
  );
}

export default SignupContainer;
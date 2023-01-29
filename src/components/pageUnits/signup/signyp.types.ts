import {FieldValues, FormState, UseFormHandleSubmit, UseFormRegister} from "react-hook-form";

export interface ISignupPresenter {
  register:  UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  requestSignup: (data: any) => void;
  verifyEmail:() => void;
}
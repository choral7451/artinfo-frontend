import {FieldValues, FormState, UseFormHandleSubmit, UseFormRegister} from "react-hook-form";
import {ChangeEvent, KeyboardEvent} from "react";

export interface ISignupPresenter {
  register:  UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  requestSignup: (data: any) => void;
  sendVerificationCode: () => void;
  verifyEmail: () => void;
  onChange:(e:ChangeEvent<HTMLInputElement>) => void;
}
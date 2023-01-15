import React from "react";

export interface IWriteConcertPresenter {
  date: Date
  onChangeConcertDate: (date:Date) => void
  imageTitle: string
  onChangeImageTitle: (e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => void
}
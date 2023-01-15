import WriteConcertPresenter from "@src/components/pageUnits/concert/write-concert/write-concert.presenter";
import React, {ChangeEvent, useState} from "react";

function WriteConcertContainer() {
  const [date, setDate] = useState(new Date());
  const [imageTitle, setImageTitle] = useState(
    "메인 포스터 이미지를 등록해주세요."
  );

  const onChangeConcertDate = (date:Date) => {
    setDate(date);
  };

  const onChangeImageTitle = (e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => {
    const value = (e.target as HTMLInputElement).value ;

    if (!value) {
      setImageTitle("메인 포스터 이미지를 등록해주세요.");
    } else {
      const image = value.split("\\");
      setImageTitle(image[image.length - 1]);
    }
  };

  return (
    <WriteConcertPresenter
      date={date}
      onChangeConcertDate={onChangeConcertDate}
      imageTitle={imageTitle}
      onChangeImageTitle={onChangeImageTitle}/>
  );
}

export default WriteConcertContainer;
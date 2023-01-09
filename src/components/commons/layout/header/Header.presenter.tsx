import * as S from "./Header.styles";
import {HeaderTop, Wrapper} from "./Header.styles";

export default function HeaderUI() {
  return (
    <S.Wrapper>
      <S.HeaderTop></S.HeaderTop>
      <S.HeaderMain>메인</S.HeaderMain>
    </S.Wrapper>
  );
}

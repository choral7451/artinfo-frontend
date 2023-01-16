import * as S from "./Header.styles";
import PushSmallButtonWhite from "@tagUnits/buttons/push-small-button-white";
import PushSmallButtonMain from "@tagUnits/buttons/push-small-button-main";
import Anchor from "@tagUnits/anchors/achor";
import { Nav } from "./Header.styles";
import {IHeaderUI} from "./Header.types";

export default function HeaderUI(props: IHeaderUI) {
  return (
    <S.Wrapper>
      <S.HeaderTop>
        <PushSmallButtonWhite text={'로그인'} onPush={'/login'} marginRight={'20px'}/>
        <PushSmallButtonMain text={'회원가입'} onPush={'/signup'}/>
      </S.HeaderTop>
      <S.HeaderMain>
        <S.HeaderMainContent>
          <S.Menu />
          <S.Logo onClick={props.onClickPush('/')}>ARTINFO</S.Logo>
          <Nav>
            <Anchor text={'채용'} onPush={'/recruit'} fontSize={'20px'} marginRight={'40px'}/>
            <Anchor text={'공연'} onPush={'/concert'} fontSize={'20px'} marginRight={'40px'}/>
            <Anchor text={'이슈'} onPush={'/issue'} fontSize={'20px'} marginRight={'40px'}/>
            <Anchor text={'교육'} onPush={'/education'} fontSize={'20px'} marginRight={'40px'}/>
            <Anchor text={'공지'} onPush={'/notice'} fontSize={'20px'} marginRight={'20px'}/>
          </Nav>
          <S.LoginUserIcon />
        </S.HeaderMainContent>
      </S.HeaderMain>
    </S.Wrapper>
  );
}

import HeaderUI from "./Header.presenter";
import {useRouter} from "next/router";

export default function Header() {
  const router = useRouter();
  const onClickPush = (url: string) => () => {
    router.push(url);
  };

  return (
    <HeaderUI onClickPush={onClickPush}/>
  );
}

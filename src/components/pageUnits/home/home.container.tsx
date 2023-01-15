import HomePresenter from "@src/components/pageUnits/home/home.presenter";
import {useRouter} from "next/router";

function HomeContainer() {
  const router = useRouter();

  const onClickPush = (path: string) => ()  => {
    router.push(path);
  };
  
  return (
    <HomePresenter onClickPush={onClickPush}/>
  );
}

export default HomeContainer;
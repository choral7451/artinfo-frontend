export interface IHomePresenter {
  onClickPush: (path: string) => () => void;
}

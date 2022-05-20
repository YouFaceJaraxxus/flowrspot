interface IHeaderItem {
  id: number;
  title: string;
  action: Function;
  protected: boolean;
}

export type {
  IHeaderItem
}
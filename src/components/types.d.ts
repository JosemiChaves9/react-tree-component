export interface DataItem {
  name: string;
  rightContent?: JSX.Element | string;
  children?: DataItem[];
}

// import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IReducerState } from "./IReducerState";

export interface IDrawerProps {
  // context: WebPartContext;
  // selectedListId?: string;
  title: string;
  state: IReducerState;
  onCategoryChange: (_: any, data: any) => void;
}

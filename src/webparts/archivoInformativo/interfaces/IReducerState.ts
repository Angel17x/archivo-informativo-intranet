import { ICategoryItem } from "./ICategoryItem";
import { IItem } from "./IItem";

export interface IReducerState {
  loading: boolean;
  loadingPosts: boolean;
  categories: ICategoryItem[];
  error?: string;
  errorPosts?: string;
  selectedCategory: string;
  selectedListId?: string;
  posts?: IItem[];
}

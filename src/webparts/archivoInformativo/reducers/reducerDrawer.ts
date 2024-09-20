import { StateActions } from "../enums";
import { IReducerAction } from "../interfaces/IReducerAction";
import { IReducerState } from "../interfaces/IReducerState";

export const reducerDrawer = (
  state: IReducerState,
  action: IReducerAction
): IReducerState => {
  switch (action.type) {
    case StateActions.SELECTED_LIST:
      return {
        ...state,
        loading: false,
        error: undefined,
        errorPosts: undefined,
        selectedListId: action.payload,
      };
    case StateActions.LOADING:
      return {
        ...state,
        loading: true,
      };
    case StateActions.SET_CATEGORIES:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case StateActions.SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case StateActions.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload ?? "Hubo un problema al obtener las categorías",
      };
      case StateActions.ERROR_POSTS:
        return {
          ...state,
          loading: false,
          errorPosts: action.payload ?? "Hubo un problema al obtener las categorías",
        };
    case StateActions.SEARCH_POSTS:
      return {
       ...state,
        loadingPosts: true,
        posts: [],
      };
      case StateActions.SET_POSTS:
        return {
         ...state,
         loadingPosts: false,
          posts: action.payload,
        };
    default:
      return state;
  }
};

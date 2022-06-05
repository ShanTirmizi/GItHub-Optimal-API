import {
  SEARCH_GITHUB_USER,
  ERROR,
  LOADING,
  CHECK_REQUESTS,
} from "../utils/actions";
import { IAction, IState } from "../utils/types";

export const githubReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case SEARCH_GITHUB_USER:
      const { repos, data, followers, following, request } = action.payload;
      return {
        ...state,
        githubUser: data,
        githubRepos: repos.data,
        githubFollowers: followers.data,
        githubFollowing: following.data,
        loading: false,
        error: {
          message: "",
          status: false,
        },
        request: request.data.rate.remaining,
      };
    case ERROR:
      const { err } = action.payload;
      return {
        ...state,
        error: {
          message: err.message,
          status: true,
        },
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case CHECK_REQUESTS:
      const { initialLimit } = action.payload;
      return {
        ...state,
        request: initialLimit.data.rate.remaining,
      };

    default:
      return state;
  }
};

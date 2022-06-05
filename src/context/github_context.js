import React, { useReducer, useContext, createContext, useEffect } from "react";
import { githubReducer } from "../reducer/github_reducer";
import axios from "axios";
import mockFollowers from "./MockData/mockFollowers";
import mockFollowing from "./MockData/mockFollowing";
import mockRepos from "./MockData/mockRepos";
import mockUser from "./MockData/mockUser";
import { url } from "../utils/utils";
import {
  SEARCH_GITHUB_USER,
  ERROR,
  LOADING,
  CHECK_REQUESTS,
} from "../utils/actions";

const initialState = {
  githubUser: mockUser,
  githubRepos: mockRepos,
  githubFollowers: mockFollowers,
  githubFollowing: mockFollowing,
  request: 0,
  error: {
    status: false,
    message: "",
  },
  loading: false,
};

export const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchGithubUser = async (user) => {
    dispatch({ type: LOADING });
    const responce = await axios(`${url}/users/${user}`).catch((err) =>
      dispatch({ type: ERROR, payload: { err } })
    );
    if (responce) {
      const { login, followers_url } = responce.data;
      const repos = await axios(
        `${url}/users/${login}/repos?per_page=100`
      ).catch((err) => console.log(err));
      const followers = await axios(`${followers_url}?per_page=100`).catch(
        (err) => console.log(err)
      );
      const request = await axios(`${url}/rate_limit`).catch((err) =>
        console.log(err)
      );
      const following = await axios(`${url}/users/${login}/following`).catch(
        (err) => console.log(err)
      );
      dispatch({
        type: SEARCH_GITHUB_USER,
        payload: {
          data: responce.data,
          repos,
          followers,
          following,
          request,
        },
      });
    }
  };
  const checkRequests = async () => {
    try {
      const initialLimit = await axios(`${url}/rate_limit`);
      dispatch({
        type: CHECK_REQUESTS,
        payload: { initialLimit },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkRequests();
  }, []);

  return (
    <GithubContext.Provider
      value={{
        searchGithubUser,
        dispatch,
        state,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export const useGithubContext = () => useContext(GithubContext);

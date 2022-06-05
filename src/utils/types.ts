import { SEARCH_GITHUB_USER, ERROR, LOADING, CHECK_REQUESTS } from "./actions";

export type IAction =
  | {
      type: typeof SEARCH_GITHUB_USER;
      payload: {
        data: {
          login: string;
          id: number;
          node_id: string;
          avatar_url: string;
          gravatar_id: string;
          url: string;
          html_url: string;
          followers_url: string;
          following_url: string;
          gists_url: string;
          starred_url: string;
          subscriptions_url: string;
          organizations_url: string;
          repos_url: string;
          events_url: string;
          received_events_url: string;
          type: string;
          site_admin: boolean;
          name?: string;
          company?: string;
          blog?: string;
          location?: string;
          email?: string;
          hireable?: string;
          bio?: string;
          twitter_username?: string;
          public_repos: number;
          public_gists: number;
          followers: number;
          following: number;
          created_at: string;
          updated_at: string;
        };
        repos: {
          data: [];
        };
        followers: {
          data: [];
        };
        following: {
          data: [];
        };
        request: {
          data: {
            rate: {
              remaining: number;
            };
          };
        };
      };
    }
  | {
      type: typeof ERROR;
      payload: {
        err: {
          message: string;
        };
      };
    }
  | {
      type: typeof CHECK_REQUESTS;
      payload: {
        initialLimit: {
          data: {
            rate: {
              remaining: number;
            };
          };
        };
      };
    }
  | {
      type: typeof LOADING;
    };

export type IState = {
  githubUser: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name?: string;
    company?: string;
    blog: string;
    location?: string;
    email?: string;
    hireable?: string;
    bio?: string;
    twitter_username?: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
  };
  repos: {
    data: [];
  };
  followers: {
    data: [];
  };
  following: {
    data: [];
  };
  request: number;
  loading: boolean;
  error: {
    status: boolean;
    message: string;
  };
};

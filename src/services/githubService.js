import apiClient from "./apiClient";
import { REPOS_PER_PAGE } from "../constants/github";

export const githubService = {
  getUser: async (username, signal) => {
    const { data } = await apiClient.get(
      `/users/${encodeURIComponent(username)}`,
      { signal },
    );
    return data;
  },

  getRepos: async (reposUrl, page = 1, signal) => {
    const { data } = await apiClient.get(reposUrl, {
      params: {
        per_page: REPOS_PER_PAGE,
        page,
        sort: "updated",
        direction: "desc",
      },
      signal,
    });
    return data;
  },
};

import { useEffect, useState } from "react";
import axios from "axios";
import { REPOS_PER_PAGE } from "../constants/github";

export const useGithubRepos = (reposUrl, page) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (!reposUrl) {
      setRepos([]);
      setHasMore(true);
      return;
    }

    const controller = new AbortController();

    const fetchRepos = async () => {
      setLoading(true);

      try {
        const { data } = await axios.get(
          `${reposUrl}?per_page=${REPOS_PER_PAGE}&page=${page}&sort=updated&direction=desc`,
          { signal: controller.signal },
        );
        setRepos(data);
        setHasMore(data.length === REPOS_PER_PAGE);
      } catch (err) {
        if (err.name !== "CanceledError") {
          setRepos([]);
        }
      } finally {
        setTimeout(() => setLoading(false), 300);
      }
    };

    fetchRepos();
    return () => controller.abort();
  }, [reposUrl, page]);

  return { repos, loading, hasMore };
};

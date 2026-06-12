import { useEffect, useState } from "react";
import { githubService } from "../../../services/githubService";
import { REPOS_PER_PAGE } from "../../../constants/github";

export const useGithubRepos = (reposUrl, page) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [prevReposUrl, setPrevReposUrl] = useState(reposUrl);
  const [prevPage, setPrevPage] = useState(page);

  // Resetear el estado en renderizado si cambian las dependencias para evitar cascading renders en useEffect
  if (reposUrl !== prevReposUrl || page !== prevPage) {
    setPrevReposUrl(reposUrl);
    setPrevPage(page);
    setRepos([]);
    setHasMore(true);
  }

  useEffect(() => {
    if (!reposUrl) return;

    const controller = new AbortController();

    const fetchRepos = async () => {
      setLoading(true);

      try {
        const data = await githubService.getRepos(reposUrl, page, controller.signal);
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

import { useEffect, useState } from "react";
import { githubService } from "../../../services/githubService";
import { setDefaultMeta, setProfileMeta } from "../../../utils/metaTags";

export const useGithubUser = (username) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [prevUsername, setPrevUsername] = useState(username);

  // Resetear el estado en renderizado si cambia el username para evitar cascading renders en useEffect
  if (username !== prevUsername) {
    setPrevUsername(username);
    setUser(null);
    setError(null);
    setLoading(false);
  }

  useEffect(() => {
    if (!username?.trim()) return;

    const controller = new AbortController();

    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      setUser(null);

      try {
        const data = await githubService.getUser(username, controller.signal);
        setUser(data);
        setProfileMeta(data);
      } catch (err) {
        if (err.name !== "CanceledError") {
          setError(
            err.response?.status === 404
              ? "Usuario no encontrado"
              : "Ocurrió un error inesperado",
          );
          setUser(null);
          setDefaultMeta();
        }
      } finally {
        setTimeout(() => setLoading(false), 300);
      }
    };

    fetchUser();
    return () => controller.abort();
  }, [username]);

  return { user, loading, error };
};

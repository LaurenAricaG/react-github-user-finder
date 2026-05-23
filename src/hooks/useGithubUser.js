import { useEffect, useState } from "react";
import axios from "axios";
import { GITHUB_API_USERS_URL } from "../constants/github";
import { setDefaultMeta, setProfileMeta } from "../utils/metaTags";

export const useGithubUser = (username) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username?.trim()) {
      setUser(null);
      setError(null);
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      setUser(null);

      try {
        const { data } = await axios.get(GITHUB_API_USERS_URL + username, {
          signal: controller.signal,
        });
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

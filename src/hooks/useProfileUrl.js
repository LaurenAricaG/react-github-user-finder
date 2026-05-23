import { useCallback, useEffect, useState } from "react";
import { getUserFromUrl, setProfileInUrl } from "../utils/profileUrl";

export const useProfileUrl = () => {
  const [username, setUsername] = useState(getUserFromUrl);

  useEffect(() => {
    const handlePopState = () => setUsername(getUserFromUrl());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const openProfile = useCallback((login) => {
    const value = login.trim();
    if (!value) return;
    setProfileInUrl(value);
    setUsername(value);
  }, []);

  const goHome = useCallback(() => {
    setProfileInUrl("", { replace: false });
    setUsername("");
  }, []);

  return {
    username,
    isProfileRoute: Boolean(username),
    openProfile,
    goHome,
  };
};

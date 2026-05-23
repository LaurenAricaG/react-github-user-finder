export const getUserFromUrl = () => {
  const user = new URLSearchParams(window.location.search).get("user");
  return user?.trim() || "";
};

export const buildProfileUrl = (login) => {
  const path = window.location.pathname || "/";
  return `${window.location.origin}${path}?user=${encodeURIComponent(login.trim())}`;
};

export const setProfileInUrl = (login, { replace = false } = {}) => {
  const path = window.location.pathname || "/";
  const url = login
    ? `${path}?user=${encodeURIComponent(login.trim())}`
    : path;

  if (replace) {
    window.history.replaceState({}, "", url);
  } else {
    window.history.pushState({}, "", url);
  }
};

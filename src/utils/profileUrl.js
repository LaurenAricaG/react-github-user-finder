/**
 * Utilidades de rutas para perfiles (React Router: /user/:username?page=N).
 * Compatible con enlaces legacy: /?user=login&page=N (redirigidos en RootRoute).
 */

export const parsePage = (pageParam) => {
  const page = Number.parseInt(pageParam ?? "1", 10);
  return Number.isFinite(page) && page >= 1 ? page : 1;
};

export const buildProfilePath = (login, page = 1) => {
  const path = `/user/${encodeURIComponent(login.trim())}`;
  return page > 1 ? `${path}?page=${page}` : path;
};

export const buildProfileUrl = (login, page = 1, origin = "") => {
  const base = origin || (typeof window !== "undefined" ? window.location.origin : "");
  return `${base}${buildProfilePath(login, page)}`;
};

/** Lee ?user= y ?page= de la query legacy (/?user=...) */
export const getLegacyProfileFromSearch = (search = "") => {
  const params = new URLSearchParams(
    search.startsWith("?") ? search : `?${search}`,
  );
  const username = params.get("user")?.trim() || "";
  const page = parsePage(params.get("page"));
  return { username, page };
};

export const buildLegacyRedirectPath = (search = "") => {
  const { username, page } = getLegacyProfileFromSearch(search);
  if (!username) return null;
  return buildProfilePath(username, page);
};

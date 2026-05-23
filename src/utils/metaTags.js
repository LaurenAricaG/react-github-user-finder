const APP_NAME = "GitSearch";
const DEFAULT_DESCRIPTION =
  "Explora perfiles y repositorios públicos de GitHub en segundos.";

const DEFAULT_OG_IMAGE = "/og-default.svg";

const setMeta = (key, content, isProperty = false) => {
  const attr = isProperty ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${key}"]`);

  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }

  el.setAttribute("content", content);
};

export const setDefaultMeta = () => {
  const origin = window.location.origin;

  document.title = `${APP_NAME} · GitHub User Finder`;
  setMeta("description", DEFAULT_DESCRIPTION);
  setMeta("og:title", `${APP_NAME} · GitHub User Finder`, true);
  setMeta("og:description", DEFAULT_DESCRIPTION, true);
  setMeta("og:type", "website", true);
  setMeta("og:url", origin, true);
  setMeta("og:image", `${origin}${DEFAULT_OG_IMAGE}`, true);
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", `${APP_NAME} · GitHub User Finder`);
  setMeta("twitter:description", DEFAULT_DESCRIPTION);
  setMeta("twitter:image", `${origin}${DEFAULT_OG_IMAGE}`);
};

export const setProfileMeta = (user) => {
  const origin = window.location.origin;
  const title = `${user.name || user.login} (@${user.login})`;
  const description =
    user.bio?.trim() ||
    `Perfil de GitHub de @${user.login} con ${user.public_repos} repositorios públicos.`;
  const image = user.avatar_url;
  const url = `${origin}${window.location.pathname}${window.location.search}`;

  document.title = `${title} · ${APP_NAME}`;
  setMeta("description", description);
  setMeta("og:title", title, true);
  setMeta("og:description", description, true);
  setMeta("og:type", "profile", true);
  setMeta("og:url", url, true);
  setMeta("og:image", image, true);
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", title);
  setMeta("twitter:description", description);
  setMeta("twitter:image", image);
};

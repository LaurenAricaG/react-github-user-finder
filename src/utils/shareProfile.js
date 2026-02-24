export const shareProfile = async (user) => {
  const appUrl = `${window.location.origin}/?user=${user.login}`;
  const message = `¡Echa un vistazo al perfil de GitHub de ${user.name || user.login}!\n${appUrl}`;

  if (navigator.share) {
    await navigator.share({
      title: `${user.login} | GitHub Profile`,
      text: message,
    });
  } else {
    await navigator.clipboard.writeText(appUrl);
    alert("Link copiado 📋");
  }
};

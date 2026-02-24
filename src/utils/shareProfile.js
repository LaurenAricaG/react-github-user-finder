export const shareProfile = async (user) => {
  const appUrl = `${window.location.origin}/?user=${user.login}`;

  if (navigator.share) {
    await navigator.share({
      title: `${user.login} | GitHub Profile`,
      text: "Mira este perfil",
      url: appUrl,
    });
  } else {
    await navigator.clipboard.writeText(appUrl);
    alert("Link copiado 📋");
  }
};

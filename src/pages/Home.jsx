import { useEffect, useState } from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import SearchBar from "../components/search/SearchBar";
import ProfileHeader from "../components/profile/ProfileHeader";
import RepoList from "../components/repos/RepoList";
import axios from "axios";
import ProfileSkeleton from "../components/common/ProfileSkeleton";
import RepoSkeleton from "../components/common/RepoSkeleton";

const URL = "https://api.github.com/users/";

const Home = () => {
  const [layout, setLayout] = useState(() => {
    return localStorage.getItem("layout") || "horizontal";
  });

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (!username.trim()) return;

    const controller = new AbortController();

    const fetchUserAndRepos = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data: userdata } = await axios.get(URL + username, {
          signal: controller.signal,
        });
        const { data: reposdata } = await axios.get(userdata.repos_url, {
          signal: controller.signal,
        });
        setUser(userdata);
        setRepos(reposdata);
      } catch (err) {
        if (err.name !== "CanceledError") {
          setError(
            err.response?.status === 404
              ? "Usuario no encontrado"
              : "Ocurrió un error inesperado",
          );
          setUser(null);
          setRepos([]);
        }
      } finally {
        setTimeout(() => setLoading(false), 300);
      }
    };

    fetchUserAndRepos();
    return () => controller.abort();
  }, [username]);

  useEffect(() => {
    localStorage.setItem("layout", layout);
  }, [layout]);

  useEffect(() => {
    document.title = username
      ? `${username} · GitHub`
      : "User Finder in GitHub";
  }, [username]);

  return (
    <div className="flex flex-col min-h-screen bg-[#f6f6f8] dark:bg-[#0D1117] text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <Header
        open={open}
        setOpen={setOpen}
        layout={layout}
        onChangeLayout={setLayout}
      />

      <main className="flex-1 flex flex-col items-center px-4 pt-8 pb-8 max-w-6xl mx-auto w-full">
        {!user && <SearchBar onSearch={setUsername} />}

        {loading && (
          <section
            className={`w-full grid gap-6 items-start transition-opacity duration-300 opacity-100 ${
              layout === "horizontal"
                ? "md:grid-cols-[290px_1fr]"
                : "md:grid-cols-1"
            }`}
          >
            <ProfileSkeleton />

            <div
              className={`grid gap-3 grid-cols-1 ${
                layout === "horizontal" ? "sm:grid-cols-2" : "sm:grid-cols-3"
              }`}
            >
              {[...Array(4)].map((_, i) => (
                <RepoSkeleton key={i} />
              ))}
            </div>
          </section>
        )}

        {!loading && error && (
          <div className="w-full max-w-md rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/20 p-6 text-center">
            <p className="text-sm font-medium text-red-700 dark:text-red-300">
              ❌ {error}
            </p>
            <p className="mt-2 text-xs text-red-600 dark:text-red-400">
              Verifica el nombre de usuario e intenta nuevamente
            </p>
          </div>
        )}

        {!loading && user && (
          <section
            className={`w-full grid gap-6 items-start transition-opacity duration-300 ${
              layout === "horizontal"
                ? "md:grid-cols-[290px_1fr]"
                : "md:grid-cols-1"
            }`}
          >
            <div className="col-span-full mb-4">
              <button
                onClick={() => {
                  setUser(null);
                  setRepos([]);
                  setUsername("");
                }}
                className="px-4 py-2 bg-teal-800 text-white rounded-lg hover:bg-teal-700 transition cursor-pointer"
              >
                Nueva búsqueda
              </button>
            </div>

            <ProfileHeader user={user} layout={layout} />
            <RepoList repos={repos} layout={layout} />
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Home;

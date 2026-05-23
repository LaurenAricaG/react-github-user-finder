import { useEffect, useRef, useState } from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ProfileHeader from "../components/profile/ProfileHeader";
import RepoList from "../components/repos/RepoList";
import axios from "axios";
import ProfileSkeleton from "../components/common/ProfileSkeleton";
import RepoSkeleton from "../components/common/RepoSkeleton";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import HeroLanding from "../components/HeroLanding";
import { useProfileUrl } from "../hooks/useProfileUrl";

const URL = "https://api.github.com/users/";
const PER_PAGE = 12;

const Home = () => {
  const { username, isProfileRoute, openProfile, goHome } = useProfileUrl();

  const [layout, setLayout] = useState(() => {
    return localStorage.getItem("layout") || "horizontal";
  });

  const reposRef = useRef(null);

  const [open, setOpen] = useState(false);

  const [loadingUser, setLoadingUser] = useState(false);
  const [loadingRepos, setLoadingRepos] = useState(false);

  const [error, setError] = useState(null);

  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const [page, setPage] = useState(1);
  const [hasMoreRepos, setHasMoreRepos] = useState(true);

  const resetProfileState = () => {
    setUser(null);
    setRepos([]);
    setError(null);
    setPage(1);
    setHasMoreRepos(true);
  };

  const handleGoHome = () => {
    goHome();
    resetProfileState();
  };

  const handleSearch = (value) => {
    resetProfileState();
    openProfile(value);
  };

  useEffect(() => {
    if (!username) {
      resetProfileState();
      return;
    }

    const controller = new AbortController();

    const fetchUser = async () => {
      setLoadingUser(true);
      setError(null);
      setUser(null);
      setRepos([]);

      try {
        const { data } = await axios.get(URL + username, {
          signal: controller.signal,
        });

        setUser(data);
        setPage(1);
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
        setTimeout(() => setLoadingUser(false), 300);
      }
    };

    fetchUser();
    return () => controller.abort();
  }, [username]);

  useEffect(() => {
    if (!user) return;

    const controller = new AbortController();

    const fetchRepos = async () => {
      setLoadingRepos(true);

      try {
        const { data } = await axios.get(
          `${user.repos_url}?per_page=${PER_PAGE}&page=${page}&sort=updated&direction=desc`,
          { signal: controller.signal },
        );

        setRepos(data);
        setHasMoreRepos(data.length === PER_PAGE);
      } catch (err) {
        if (err.name !== "CanceledError") {
          setRepos([]);
        }
      } finally {
        setTimeout(() => setLoadingRepos(false), 300);
      }
    };

    fetchRepos();
    return () => controller.abort();
  }, [user, page]);

  useEffect(() => {
    localStorage.setItem("layout", layout);
  }, [layout]);

  useEffect(() => {
    document.title = username
      ? `${username} · GitHub`
      : "User Finder in GitHub";
  }, [username]);

  useEffect(() => {
    if (isProfileRoute) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [username, isProfileRoute]);

  return (
    <div className="flex flex-col min-h-screen bg-[#f6f6f8] dark:bg-[#0D1117] text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <Header
        open={open}
        setOpen={setOpen}
        layout={layout}
        onChangeLayout={setLayout}
        onGoHome={handleGoHome}
      />

      <main className="flex-1 flex flex-col items-center px-4 pt-4 sm:pt-6 pb-8 max-w-6xl mx-auto w-full">
        {!isProfileRoute && (
          <HeroLanding error={error} onSearch={handleSearch} />
        )}

        {isProfileRoute && loadingUser && (
          <section
            className={`w-full grid gap-6 ${
              layout === "horizontal"
                ? "md:grid-cols-[290px_1fr]"
                : "md:grid-cols-1"
            }`}
          >
            <ProfileSkeleton />
            <div
              className={`grid gap-3 ${
                layout === "horizontal" ? "sm:grid-cols-2" : "sm:grid-cols-3"
              }`}
            >
              {[...Array(4)].map((_, i) => (
                <RepoSkeleton key={i} />
              ))}
            </div>
          </section>
        )}

        {isProfileRoute && !loadingUser && error && !user && (
          <div className="w-full max-w-md mt-4 rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/20 p-6 text-center">
            <p className="text-sm font-medium text-red-700 dark:text-red-300">
              {error}
            </p>
            <p className="mt-2 text-xs text-red-600 dark:text-red-400">
              Verifica el nombre de usuario e intenta nuevamente
            </p>
            <button
              type="button"
              onClick={handleGoHome}
              className="mt-5 px-4 py-2 bg-[#1152D4] text-white rounded-lg hover:bg-blue-700 transition cursor-pointer text-sm font-medium"
            >
              Volver al inicio
            </button>
          </div>
        )}

        {isProfileRoute && !loadingUser && user && (
          <section
            className={`w-full grid gap-6 items-start ${
              layout === "horizontal"
                ? "md:grid-cols-[290px_1fr]"
                : "md:grid-cols-1"
            }`}
          >
            <div className="col-span-full mb-4">
              <button
                type="button"
                onClick={handleGoHome}
                className="px-4 py-2 bg-teal-800 text-white rounded-lg hover:bg-teal-700 transition cursor-pointer"
              >
                Nueva búsqueda
              </button>
            </div>
            <ProfileHeader user={user} layout={layout} />

            <div ref={reposRef} className="w-full">
              {loadingRepos ? (
                <div
                  className={`grid gap-3 ${
                    layout === "horizontal"
                      ? "sm:grid-cols-2"
                      : "sm:grid-cols-3"
                  }`}
                >
                  {[...Array(12)].map((_, i) => (
                    <RepoSkeleton key={i} />
                  ))}
                </div>
              ) : (
                <RepoList repos={repos} layout={layout} />
              )}

              <div className="flex justify-center items-center gap-4 mt-6 text-slate-500 dark:text-slate-400">
                <button
                  type="button"
                  onClick={() => {
                    setPage((p) => Math.max(p - 1, 1));
                    reposRef.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  disabled={page === 1}
                  className="flex items-center justify-center px-4 py-2 rounded-lg border border-slate-300 dark:border-[#1E293B] 
               hover:bg-slate-100 dark:hover:bg-[#1E293B] hover:text-[#1152D4] transition-all duration-200 
               disabled:opacity-50 disabled:cursor-not-allowed shadow-sm cursor-pointer"
                >
                  <FiChevronLeft className="text-lg" />
                </button>

                <span className="text-xs font-medium px-2">{`Página ${page}`}</span>

                <button
                  type="button"
                  onClick={() => {
                    setPage((p) => p + 1);
                    reposRef.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  disabled={!hasMoreRepos}
                  className="flex items-center justify-center px-4 py-2 rounded-lg border border-slate-300 dark:border-[#1E293B] 
               hover:bg-slate-100 dark:hover:bg-[#1E293B] hover:text-[#1152D4] transition-all duration-200 
               disabled:opacity-50 disabled:cursor-not-allowed shadow-sm cursor-pointer"
                >
                  <FiChevronRight className="text-lg" />
                </button>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Home;

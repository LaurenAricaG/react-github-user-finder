import { useEffect, useRef, useState } from "react";
import {
  useNavigate,
  useOutletContext,
  useParams,
  useSearchParams,
} from "react-router-dom";
import ProfileHeader from "../components/profile/ProfileHeader";
import RepoList from "../components/repos/RepoList";
import ProfileSkeleton from "../components/common/ProfileSkeleton";
import RepoSkeleton from "../components/common/RepoSkeleton";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useGithubUser } from "../hooks/useGithubUser";
import { useGithubRepos } from "../hooks/useGithubRepos";
import { parsePage } from "../utils/profileUrl";

const ProfilePage = () => {
  const { username: rawUsername } = useParams();
  const username = decodeURIComponent(rawUsername ?? "");
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parsePage(searchParams.get("page"));
  const navigate = useNavigate();
  const { layout } = useOutletContext();
  const reposRef = useRef(null);

  const [contentKey, setContentKey] = useState(username);
  const [reposAnimKey, setReposAnimKey] = useState(`${username}-${page}`);

  const { user, loading: loadingUser, error } = useGithubUser(username);
  const { repos, loading: loadingRepos, hasMore } = useGithubRepos(
    user?.repos_url,
    page,
  );

  useEffect(() => {
    document.title = username
      ? `${username} · GitHub`
      : "GitSearch · GitHub User Finder";
  }, [username]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [username]);

  useEffect(() => {
    if (!loadingUser && user) {
      setContentKey(username);
    }
  }, [loadingUser, user, username]);

  useEffect(() => {
    if (!loadingRepos) {
      setReposAnimKey(`${username}-${page}`);
    }
  }, [loadingRepos, username, page]);

  const handleGoHome = () => navigate("/");

  const handlePageChange = (updater) => {
    const nextPage =
      typeof updater === "function" ? updater(page) : updater;
    const safePage = Math.max(1, nextPage);

    if (safePage > 1) {
      setSearchParams({ page: String(safePage) });
    } else {
      setSearchParams({});
    }

    reposRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const showPagination =
    user &&
    !loadingRepos &&
    (page > 1 || hasMore || repos.length > 0);

  if (loadingUser) {
    return (
      <section
        className={`profile-enter-subtle w-full grid gap-6 ${
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
    );
  }

  if (error && !user) {
    return (
      <div className="profile-enter w-full max-w-md mt-4 rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/20 p-6 text-center">
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
    );
  }

  if (!user) return null;

  return (
    <section
      key={contentKey}
      className={`w-full grid gap-6 items-start ${
        layout === "horizontal"
          ? "md:grid-cols-[290px_1fr]"
          : "md:grid-cols-1"
      }`}
    >
      <nav
        aria-label="Ruta de navegación"
        className="profile-enter profile-enter-delay-1 col-span-full flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-300"
      >
        <button
          type="button"
          onClick={handleGoHome}
          className="font-medium hover:text-[#1152D4] transition-colors cursor-pointer"
        >
          Inicio
        </button>
        <span className="text-slate-400">/</span>
        <span className="font-semibold text-slate-800 dark:text-slate-100">
          @{user.login}
        </span>
        {page > 1 && (
          <>
            <span className="text-slate-400">/</span>
            <span>Página {page}</span>
          </>
        )}
      </nav>

      <div className="profile-enter profile-enter-delay-2">
        <ProfileHeader user={user} layout={layout} />
      </div>

      <div
        key={reposAnimKey}
        ref={reposRef}
        className="profile-repos-enter w-full"
      >
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
          <RepoList repos={repos} page={page} />
        )}

        {showPagination && (
          <div className="flex justify-center items-center gap-4 mt-6 text-slate-500 dark:text-slate-400">
            <button
              type="button"
              onClick={() => handlePageChange((p) => Math.max(p - 1, 1))}
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
              onClick={() => handlePageChange((p) => p + 1)}
              disabled={!hasMore}
              className="flex items-center justify-center px-4 py-2 rounded-lg border border-slate-300 dark:border-[#1E293B] 
               hover:bg-slate-100 dark:hover:bg-[#1E293B] hover:text-[#1152D4] transition-all duration-200 
               disabled:opacity-50 disabled:cursor-not-allowed shadow-sm cursor-pointer"
            >
              <FiChevronRight className="text-lg" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProfilePage;

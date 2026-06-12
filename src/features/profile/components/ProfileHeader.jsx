import { BsLink, BsTwitterX } from "react-icons/bs";
import { FaDownload, FaShare } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { RiShareBoxLine } from "react-icons/ri";
import { downloadImage } from "../../../utils/downloadImage";
import { shareProfile } from "../../../utils/shareProfile";

const EmptyHint = ({ children }) => (
  <span className="italic text-slate-400 dark:text-slate-500">{children}</span>
);

const ContactDetails = ({ user, className = "" }) => {
  const hasBlog = Boolean(user?.blog?.trim());

  return (
    <div className={`space-y-2 text-sm text-slate-500 dark:text-slate-400 ${className}`}>
      <p className="flex items-start gap-2">
        <GrLocation className="text-[#1152D4] shrink-0 mt-0.5" />
        {user?.location?.trim() ? (
          user.location
        ) : (
          <EmptyHint>Sin ubicación indicada</EmptyHint>
        )}
      </p>

      {hasBlog ? (
        <a
          href={user.blog.startsWith("http") ? user.blog : `https://${user.blog}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline break-all"
        >
          <BsLink className="text-[#1152D4] shrink-0" />
          {user.blog}
        </a>
      ) : (
        <p className="flex items-center gap-2">
          <BsLink className="text-[#1152D4] shrink-0" />
          <EmptyHint>Sin sitio web público</EmptyHint>
        </p>
      )}

      {user?.twitter_username ? (
        <p className="flex items-center gap-2">
          <BsTwitterX className="text-[#1152D4] shrink-0" />
          @{user.twitter_username}
        </p>
      ) : null}
    </div>
  );
};

const ProfileHeader = ({ user, layout }) => {
  const isVertical = layout === "vertical";
  const displayName = user?.name?.trim() || user?.login;

  return (
    <div className="bg-white/70 dark:bg-[#161B22] border border-slate-300 dark:border-[#1E293B] rounded-2xl px-5 py-6 flex flex-col gap-6 shadow-sm">
      <div
        className={`flex flex-col items-center gap-5 ${
          isVertical ? "sm:flex-row sm:items-start sm:gap-8" : ""
        }`}
      >
        <div
          className={`flex ${isVertical ? "flex-col items-center" : " items-center gap-3"}`}
        >
          <img
            src={user?.avatar_url}
            alt={`Avatar de ${user?.login}`}
            className="rounded-full h-24 w-24 shrink-0 ring-2 ring-slate-200 dark:ring-slate-800"
          />
          <div
            className={`${isVertical ? "flex justify-center w-auto mt-2" : ""} border border-slate-300 dark:border-[#1E293B]  rounded-lg`}
          >
            <button
              type="button"
              onClick={() =>
                downloadImage(user.avatar_url, `${user.login}-avatar.jpg`)
              }
              title="Descargar imagen"
              className={`${isVertical ? "border-r" : "border-b "} border-slate-300 dark:border-[#1E293B] p-2 text-xs cursor-pointer hover:text-[#1152D4] flex text-slate-500 dark:text-slate-400`}
            >
              <FaDownload />
            </button>
            <button
              type="button"
              onClick={() => shareProfile(user)}
              className="p-2 text-xs cursor-pointer hover:text-[#1152D4] flex text-slate-500 dark:text-slate-400"
              title="Compartir perfil"
            >
              <FaShare />
            </button>
          </div>
        </div>

        <div
          className={`flex-1 text-center ${isVertical ? "sm:text-left" : ""}`}
        >
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 leading-tight">
            {displayName}
          </h2>

          <p className="text-sm font-medium text-[#1152D4]">@{user?.login}</p>

          <p className="mt-2 max-w-md mx-auto sm:mx-0 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
            {user?.bio?.trim() ? (
              user.bio
            ) : (
              <EmptyHint>Este usuario no ha escrito una biografía.</EmptyHint>
            )}
          </p>

          {isVertical && (
            <div className="hidden sm:block mt-4 space-y-4">
              <ContactDetails user={user} />

              <a
                href={user?.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-500 hover:shadow-md transition"
              >
                <RiShareBoxLine className="text-lg" />
                Ir a GitHub
              </a>
            </div>
          )}
        </div>

        {isVertical && (
          <ul className="hidden sm:flex flex-col gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900/50 p-4 min-w-35">
            <li className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-slate-200/70 dark:hover:bg-slate-800/60 transition">
              <div>
                <p className="text-base font-semibold text-slate-800 dark:text-slate-200 leading-none">
                  {user?.followers}
                </p>
                <p className="text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Followers
                </p>
              </div>
              <span className="h-2 w-2 rounded-full bg-blue-500/80" />
            </li>
            <li className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-slate-200/70 dark:hover:bg-slate-800/60 transition">
              <div>
                <p className="text-base font-semibold text-slate-800 dark:text-slate-200 leading-none">
                  {user?.following}
                </p>
                <p className="text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Following
                </p>
              </div>
              <span className="h-2 w-2 rounded-full bg-blue-500/80" />
            </li>
            <li className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-slate-200/70 dark:hover:bg-slate-800/60 transition">
              <div>
                <p className="text-base font-semibold text-slate-800 dark:text-slate-200 leading-none">
                  {user?.public_repos}
                </p>
                <p className="text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Repos
                </p>
              </div>
              <span className="h-2 w-2 rounded-full bg-blue-500/80" />
            </li>
          </ul>
        )}
      </div>

      <ContactDetails
        user={user}
        className={isVertical ? "sm:hidden" : ""}
      />

      <ul
        className={`flex justify-around border-t border-b border-slate-300 dark:border-[#1E293B] py-4 ${
          isVertical ? "sm:hidden" : ""
        }`}
      >
        <li className="text-center">
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
            {user?.followers}
          </p>
          <p className="text-[10px] tracking-wide text-slate-600 dark:text-slate-400">
            FOLLOWERS
          </p>
        </li>
        <li className="text-center">
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
            {user?.following}
          </p>
          <p className="text-[10px] tracking-wide text-slate-600 dark:text-slate-400">
            FOLLOWING
          </p>
        </li>
        <li className="text-center">
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
            {user?.public_repos}
          </p>
          <p className="text-[10px] tracking-wide text-slate-600 dark:text-slate-400">
            REPOS
          </p>
        </li>
      </ul>
      <a
        href={user?.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 rounded-lg bg-[#1152D4] px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-600 hover:shadow-md transition ${
          isVertical ? "sm:hidden w-full" : "w-full"
        }`}
      >
        <RiShareBoxLine className="text-lg" />
        Ir a GitHub
      </a>
    </div>
  );
};

export default ProfileHeader;

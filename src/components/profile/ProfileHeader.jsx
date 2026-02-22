import { BsLink, BsTwitterX } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { RiShareBoxLine } from "react-icons/ri";

const ProfileHeader = ({ user, layout }) => {
  const isVertical = layout === "vertical";

  return (
    <div className="bg-white/70 dark:bg-[#161B22] border border-slate-300 dark:border-[#1E293B] rounded-2xl px-5 py-6 flex flex-col gap-6 shadow-sm">
      <div
        className={`flex flex-col items-center gap-5 ${
          isVertical ? "sm:flex-row sm:items-start sm:gap-8" : ""
        }`}
      >
        <img
          src={user?.avatar_url}
          alt="avatar"
          className="rounded-full h-24 w-24 shrink-0 ring-2 ring-slate-200 dark:ring-slate-800"
        />

        <div
          className={`flex-1 text-center ${isVertical ? "sm:text-left" : ""}`}
        >
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 leading-tight">
            {user?.name}
          </h2>

          <p className="text-sm font-medium text-[#1152D4]">@{user?.login}</p>

          <p className="mt-2 max-w-md mx-auto sm:mx-0 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
            {user?.bio}
          </p>

          {isVertical && (
            <div className="hidden sm:block mt-4 space-y-4">
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
                <p className="flex items-center gap-2 whitespace-nowrap">
                  <GrLocation className="text-[#1152D4]" />
                  {user?.location}
                </p>

                <a
                  href={user?.blog || user?.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  <BsLink className="text-[#1152D4]" />
                  {user?.blog || user?.html_url}
                </a>

                {user?.twitter_username && (
                  <p className="flex items-center gap-2 whitespace-nowrap">
                    <BsTwitterX className="text-[#1152D4]" />
                    {user?.twitter_username}
                  </p>
                )}
              </div>

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

      <div
        className={`text-sm text-slate-500 dark:text-slate-400 ${
          isVertical ? "sm:hidden space-y-2" : "space-y-2"
        }`}
      >
        <p className="flex items-center gap-2">
          <GrLocation className="text-[#1152D4]" />
          {user?.location}
        </p>
        <a
          href={user?.blog || user?.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <BsLink className="text-[#1152D4]" />
          {user?.blog || user?.html_url}
        </a>
        {user?.twitter_username && (
          <p className="flex items-center gap-2 whitespace-nowrap">
            <BsTwitterX className="text-[#1152D4]" />
            {user?.twitter_username}
          </p>
        )}
      </div>

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

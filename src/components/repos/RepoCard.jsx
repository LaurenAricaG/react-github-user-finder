import { VscRepo } from "react-icons/vsc";
import { LANGUAGE_DOT_COLORS, MAX_TOPICS } from "../../constans/constants";
import { formatNumber, timeAgo } from "../../helpers/helpers";

const RepoCard = ({ repo }) => {
  const dotColor =
    LANGUAGE_DOT_COLORS[repo.language] || LANGUAGE_DOT_COLORS.default;

  const visibleTopics = repo.topics?.slice(0, MAX_TOPICS) || [];
  const remainingTopics =
    repo.topics?.length > MAX_TOPICS ? repo.topics.length - MAX_TOPICS : 0;

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col min-h-55 rounded-xl p-4
                 bg-white dark:bg-[#161B22]
                 border border-slate-200 dark:border-[#1E293B]
                 shadow-sm hover:shadow-xl
                 hover:-translate-y-0.5
                 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2 min-w-0">
        {/* Repo name */}
        <div className="flex items-start gap-2 min-w-0">
          <VscRepo className="shrink-0 mt-0.75 text-[#1152D4]" />

          <h4
            className="text-sm font-semibold text-[#1152D4]
                 leading-snug
                 line-clamp-2"
            title={repo.name}
          >
            {repo.name}
          </h4>
        </div>

        {/* Visibility */}
        <span
          className="shrink-0 text-[10px] font-semibold uppercase tracking-wide
               px-2 py-0.5 rounded-full
               bg-slate-100 dark:bg-slate-800
               text-slate-500 dark:text-slate-400"
        >
          {repo.visibility}
        </span>
      </div>

      {/* Description */}
      {repo.description && (
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 line-clamp-3">
          {repo.description}
        </p>
      )}

      {/* Topics */}
      {visibleTopics.length > 0 && (
        <ul className="flex flex-wrap gap-2 mt-3 mb-4">
          {visibleTopics.map((topic) => (
            <li
              key={topic}
              className="text-[11px] font-medium px-2 py-1 rounded-full
                         bg-slate-100 dark:bg-slate-700/70
                         text-slate-600 dark:text-slate-200"
            >
              #{topic}
            </li>
          ))}

          {remainingTopics > 0 && (
            <li
              className="text-[11px] font-medium px-2 py-1 rounded-full
                           bg-slate-100 dark:bg-slate-700/70
                           text-slate-500 dark:text-slate-400"
            >
              +{remainingTopics} more
            </li>
          )}
        </ul>
      )}

      <div className="grow" />

      {/* Footer */}
      <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
        <div className="grid grid-cols-[max-content_auto] gap-y-2 gap-x-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-4 whitespace-nowrap">
            {repo.language && (
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${dotColor}`} />
                <span className="">{repo.language}</span>
              </div>
            )}

            {repo.stargazers_count > 0 && (
              <div className="flex items-center gap-1">
                <span className="text-yellow-400">★</span>
                {formatNumber(repo.stargazers_count)}
              </div>
            )}

            {repo.forks_count > 0 && (
              <div className="flex items-center gap-1">
                <span>⑂</span>
                {formatNumber(repo.forks_count)}
              </div>
            )}
          </div>

          {repo.updated_at && (
            <span className="text-[11px] text-slate-500 dark:text-slate-400 justify-self-end whitespace-nowrap">
              Updated {timeAgo(repo.updated_at)}
            </span>
          )}
        </div>
      </div>
    </a>
  );
};

export default RepoCard;

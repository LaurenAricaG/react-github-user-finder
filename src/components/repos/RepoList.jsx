import { GrProjects } from "react-icons/gr";
import RepoCard from "./RepoCard";

const RepoList = ({ repos }) => {
  return (
    <div className="w-full space-y-4">
      <h2
        className="flex items-center gap-2
             text-lg font-semibold
             text-slate-800 dark:text-slate-200"
      >
        <GrProjects className="text-base text-[#1152D4]" />
        <span>Repositorios</span>
      </h2>

      <div className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(285px,1fr))]">
        {repos
          .slice()
          .reverse()
          .map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
      </div>
    </div>
  );
};

export default RepoList;

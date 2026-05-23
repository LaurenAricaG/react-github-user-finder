import { GrProjects } from "react-icons/gr";
import { VscRepo } from "react-icons/vsc";
import EmptyState from "../common/EmptyState";
import RepoCard from "./RepoCard";

const RepoList = ({ repos, page }) => {
  return (
    <div className="w-full space-y-4">
      <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-slate-200">
        <GrProjects className="text-base text-[#1152D4]" />
        <span>Repositorios</span>
        {page > 1 && (
          <span className="text-xs font-normal text-slate-500 dark:text-slate-400">
            · Página {page}
          </span>
        )}
      </h2>

      {repos.length === 0 ? (
        <EmptyState
          icon={VscRepo}
          title="No hay repositorios en esta página"
          description={
            page > 1
              ? "Prueba volver a la página anterior o revisa si este usuario tiene más repos públicos."
              : "Este usuario no tiene repositorios públicos visibles o aún no ha publicado ninguno."
          }
        />
      ) : (
        <div className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(285px,1fr))]">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RepoList;

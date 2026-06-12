const RepoSkeleton = () => {
  return (
    <div className="bg-slate-200/75 dark:bg-slate-800/60 p-4 rounded-xl animate-pulse space-y-3">
      <div className="h-4 w-3/4 bg-slate-300 dark:bg-slate-700 rounded" />
      <div className="h-3 w-full bg-slate-300 dark:bg-slate-700 rounded" />
      <div className="h-3 w-1/2 bg-slate-300 dark:bg-slate-700 rounded" />
    </div>
  );
};

export default RepoSkeleton;

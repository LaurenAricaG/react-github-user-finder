const Skeleton = () => {
  return (
    <div className="w-full flex flex-col items-center gap-6 animate-pulse">
      {/* Título */}
      <div className="h-6 w-72 rounded bg-slate-300/60 dark:bg-slate-700/60" />
      <div className="h-4 w-96 rounded bg-slate-200/60 dark:bg-slate-800/60" />

      {/* Grid tipo contributions */}
      <div className="mt-4 p-6 rounded-xl border border-slate-300/40 dark:border-slate-700/40">
        <div className="grid grid-cols-12 gap-2">
          {Array.from({ length: 84 }).map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-sm bg-emerald-400/30 dark:bg-emerald-500/30"
            />
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-8 mt-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-4 w-24 rounded bg-slate-300/60 dark:bg-slate-700/60"
          />
        ))}
      </div>
    </div>
  );
};

export default Skeleton;

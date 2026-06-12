const EmptyState = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 dark:border-[#1E293B] bg-white/50 dark:bg-[#161B22]/50 px-6 py-12 text-center">
      {Icon && (
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#1152D4]/10 text-[#1152D4]">
          <Icon className="text-xl" />
        </div>
      )}
      <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
        {title}
      </h3>
      {description && (
        <p className="mt-2 max-w-sm text-xs leading-relaxed text-slate-500 dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
};

export default EmptyState;

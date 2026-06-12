const ProfileSkeleton = () => {
  return (
    <div>
      <div className="bg-white/70 dark:bg-[#161B22] border border-slate-300 dark:border-[#1E293B] rounded-2xl p-6 animate-pulse space-y-4">
        <div className="flex gap-4 items-center">
          <div className="h-24 w-24 rounded-full bg-slate-300 dark:bg-slate-700" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-32 bg-slate-300 dark:bg-slate-700 rounded" />
            <div className="h-3 w-24 bg-slate-300 dark:bg-slate-700 rounded" />
            <div className="h-3 w-full bg-slate-300 dark:bg-slate-700 rounded" />
            <div className="h-3 w-3/4 bg-slate-300 dark:bg-slate-700 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;

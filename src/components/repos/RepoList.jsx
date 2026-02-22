import RepoCard from "./RepoCard";

const RepoList = () => {
  return (
    <div className="w-full bg-slate-200/75 p-6 rounded-2xl grid gap-3 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
      <RepoCard />
      <RepoCard />
      <RepoCard />
      <RepoCard />
      <RepoCard />
    </div>
  );
};

export default RepoList;

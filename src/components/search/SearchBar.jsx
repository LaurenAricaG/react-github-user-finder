import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    onSearch(value.trim());
  };
  return (
    <div className="w-full max-w-2xl mb-12 text-center">
      <h1 className="text-xl md:text-4xl font-bold mb-5 tracking-tight text-slate-800 dark:text-slate-100">
        Encuentra a tu proximo colaborador
      </h1>

      <div className="relative w-full max-w-xl mx-auto">
        <FaSearch className=" absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-lg pointer-events-none" />

        <form action="" onSubmit={handleSubmit}>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="laurenaricag"
            className=" w-full h-12 pl-12 pr-6 rounded-xl bg-gray-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-sm sm:text-base text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-blue-500/70 dark:focus:ring-1 dark:focus:ring-blue-500/70 transition"
          />
        </form>
      </div>
      <p className="mt-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
        Presiona Enter para buscar más 100M+ de perfiles
      </p>
    </div>
  );
};

export default SearchBar;

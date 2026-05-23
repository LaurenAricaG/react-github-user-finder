import { useState } from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    onSearch(value.trim());
  };

  return (
    <div className="w-full max-w-xl mx-auto text-left sm:text-center">
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col sm:flex-row gap-2 sm:gap-0"
      >
        <div className="relative flex-1">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-base pointer-events-none" />
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Ej: laurenaricag"
            autoComplete="off"
            spellCheck={false}
            className="w-full h-12 pl-11 pr-4 sm:pr-32 rounded-xl sm:rounded-r-none bg-white dark:bg-[#161B22] border border-slate-200 dark:border-[#1E293B] text-sm sm:text-base text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 shadow-sm focus:outline-none focus:border-[#1152D4]/60 focus:ring-2 focus:ring-[#1152D4]/20 transition"
          />
        </div>
        <button
          type="submit"
          disabled={!value.trim()}
          className="flex items-center justify-center gap-2 h-12 px-6 rounded-xl sm:rounded-l-none sm:rounded-r-xl bg-[#1152D4] text-white text-sm font-medium shadow-sm hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          Buscar
          <FaArrowRight className="text-xs sm:hidden" />
        </button>
      </form>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400 text-center">
        Presiona{" "}
        <kbd className="rounded border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 font-mono text-[10px] text-slate-600 dark:text-slate-300">
          Enter
        </kbd>{" "}
        para buscar entre millones de perfiles públicos
      </p>
    </div>
  );
};

export default SearchBar;

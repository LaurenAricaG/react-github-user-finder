import { useState } from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch, compact = false, defaultValue = "" }) => {
  const [value, setValue] = useState(defaultValue);
  const [prevDefaultValue, setPrevDefaultValue] = useState(defaultValue);

  // Sincronizar el estado value durante el renderizado si cambia defaultValue (para evitar set-state-in-effect)
  if (defaultValue !== prevDefaultValue) {
    setPrevDefaultValue(defaultValue);
    setValue(defaultValue);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    onSearch(value.trim());
  };

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex w-full gap-2">
        <div className="relative flex-1 min-w-0">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-sm pointer-events-none" />
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Buscar usuario..."
            autoComplete="off"
            spellCheck={false}
            aria-label="Buscar usuario de GitHub"
            className="w-full h-9 pl-9 pr-3 rounded-lg bg-white dark:bg-[#161B22] border border-slate-200 dark:border-[#1E293B] text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#1152D4]/60 focus:ring-2 focus:ring-[#1152D4]/20 transition"
          />
        </div>
        <button
          type="submit"
          disabled={!value.trim()}
          className="shrink-0 h-9 px-3 rounded-lg bg-[#1152D4] text-white text-xs font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          <span className="hidden sm:inline">Buscar</span>
          <FaArrowRight className="sm:hidden text-xs" />
        </button>
      </form>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto text-left sm:text-center">
      <form
        onSubmit={handleSubmit}
        className="flex w-full gap-2 items-center"
      >
        <div className="relative flex-1">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-base pointer-events-none" />
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Ej: github"
            autoComplete="off"
            spellCheck={false}
            className="w-full h-12 pl-11 pr-4 rounded-xl bg-white dark:bg-[#161B22] border border-slate-200 dark:border-[#1E293B] text-sm sm:text-base text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 shadow-sm focus:outline-none focus:border-[#1152D4]/60 focus:ring-2 focus:ring-[#1152D4]/20 transition"
          />
        </div>
        <button
          type="submit"
          disabled={!value.trim()}
          className="shrink-0 h-12 px-4 sm:px-6 rounded-xl bg-[#1152D4] text-white text-sm font-medium shadow-sm hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer flex items-center justify-center"
        >
          <span className="hidden sm:inline">Buscar</span>
          <FaArrowRight className="sm:hidden text-xs" />
        </button>
      </form>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400 text-center">
        Presiona{" "}
        <kbd className="rounded border border-slate-300 dark:border-slate-700 bg-slate-200/70 dark:bg-slate-800 px-1.5 py-0.5 font-mono text-[10px] text-slate-700 dark:text-slate-300">
          Enter
        </kbd>{" "}
        para buscar entre millones de perfiles públicos
      </p>
    </div>
  );
};

export default SearchBar;

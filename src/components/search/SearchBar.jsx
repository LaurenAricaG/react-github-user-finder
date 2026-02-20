import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="w-full max-w-2xl mb-12 text-center ">
      <h1 className="text-xl md:text-4xl font-bold mb-5 tracking-tight text-slate-800 dark:text-slate-100">
        Encuentra a tu proximo colaborador.
      </h1>

      <div className="relative w-full max-w-xl mx-auto">
        <FaSearch className=" absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-lg pointer-events-none" />

        <input
          type="text"
          placeholder="Ingresa el usuario de github"
          className=" w-full h-12 sm:h-14 pl-11 pr-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-sm sm:text-base text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/70 focus:border-primary transition"
        />
      </div>
      <p className="mt-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
        Presiona Enter para buscar más 100M+ de perfiles
      </p>
    </div>
  );
};

export default SearchBar;

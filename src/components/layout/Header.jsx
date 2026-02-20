import { BiTerminal } from "react-icons/bi";
import { FaMoon, FaSun } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="w-full px-6 py-6 md:px-16 flex justify-between items-center border-b border-slate-200 dark:border-slate-800 flex-wrap">
      <div className="flex items-center gap-2 text-slate-200">
        <BiTerminal className="text-[#177bed] h-6 w-6" />
        <h1 className="text-lg font-semibold">GitSearch</h1>
      </div>
      <div className="flex gap-5 text-slate-200 items-center">
        <button className="hover:bg-slate-200 dark:hover:bg-slate-800 p-2 rounded-md cursor-pointer transition-colors">
          <FaSun />
        </button>
        <a
          href="#"
          className="hidden sm:block text-sm font-medium hover:text-primary transition-colors"
        >
          Documentación
        </a>
      </div>
    </header>
  );
};

export default Header;

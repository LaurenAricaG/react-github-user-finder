import { Link } from "react-router-dom";
import { BiTerminal } from "react-icons/bi";
import ConfigDrawer from "../common/ConfigDrawer";
import { FaGear } from "react-icons/fa6";
import SearchBar from "../SearchBar";

const Header = ({
  open,
  setOpen,
  layout,
  onChangeLayout,
  onGoHome,
  isProfileRoute,
  currentUsername,
  onSearch,
}) => {
  return (
    <header className="w-full px-4 py-3 md:px-16 border-b border-slate-200 dark:border-slate-800">
      <div className="flex flex-wrap items-center gap-3 md:gap-4">
        <Link
          to="/"
          onClick={onGoHome}
          className="flex shrink-0 items-center gap-2 text-slate-800 dark:text-slate-200 hover:opacity-80 transition-opacity"
        >
          <BiTerminal className="text-[#1152D4] h-6 w-6" />
          <h1 className="text-lg font-semibold">GitSearch</h1>
        </Link>

        {isProfileRoute && onSearch && (
          <div className="order-3 w-full md:order-none md:flex-1 md:max-w-md md:mx-auto">
            <SearchBar
              compact
              defaultValue={currentUsername}
              onSearch={onSearch}
            />
          </div>
        )}

        <div className="ml-auto flex shrink-0 items-center gap-3 md:gap-5">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="hover:bg-slate-200 dark:hover:bg-slate-800 p-2 rounded-md cursor-pointer transition-colors text-gray-500 dark:text-gray-400"
            aria-label="Abrir configuración"
          >
            <FaGear />
          </button>
          <a
            href="https://docs.github.com/en/rest"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-sm font-medium hover:text-[#1152D4] transition-colors text-slate-800 dark:text-slate-200"
          >
            Documentación
          </a>
        </div>
      </div>

      <ConfigDrawer
        isOpen={open}
        onClose={() => setOpen(false)}
        layout={layout}
        onChangeLayout={onChangeLayout}
      />
    </header>
  );
};

export default Header;

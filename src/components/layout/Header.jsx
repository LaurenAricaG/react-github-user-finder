import { BiTerminal } from "react-icons/bi";
import ConfigDrawer from "../common/ConfigDrawer";
import { FaGear } from "react-icons/fa6";

const Header = ({ open, setOpen, layout, onChangeLayout }) => {
  return (
    <header className="w-full px-6 py-3 md:px-16 flex justify-between items-center border-b border-slate-200 dark:border-slate-800 flex-wrap">
      <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
        <BiTerminal className="text-[#1152D4] h-6 w-6" />
        <h1 className="text-lg font-semibold">GitSearch</h1>
      </div>
      <div className="flex gap-5  items-center">
        <button
          onClick={() => setOpen(true)}
          className="hover:bg-slate-200 dark:hover:bg-slate-800 p-2 rounded-md cursor-pointer transition-colors text-gray-500 dark:text-gray-400"
        >
          <FaGear />
        </button>
        <a
          href="https://github.com/"
          target="_blank"
          className="hidden sm:block text-sm font-medium hover:text-primary transition-colors text-slate-800 dark:text-slate-200"
        >
          Documentación
        </a>
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

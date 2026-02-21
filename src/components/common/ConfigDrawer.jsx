import { FaMoon, FaSun, FaTimes, FaPalette, FaDesktop } from "react-icons/fa";
import { useTheme } from "../../hooks/useTheme";
import { VscSplitHorizontal, VscSplitVertical } from "react-icons/vsc";

const ConfigDrawer = ({ isOpen, onClose, layout, onChangeLayout }) => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 z-50
        shadow-2xl border-l border-gray-200 dark:border-gray-700
        transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Configuración
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <FaTimes className="text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaPalette className="text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                Tema
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setTheme("light")}
                className={`p-3 rounded-lg border-2 ${
                  theme === "light"
                    ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                    : "border-gray-200 dark:border-gray-700"
                }`}
              >
                <FaSun className="mx-auto mb-1" />
                <div className="text-xs">Claro</div>
              </button>

              <button
                onClick={() => setTheme("dark")}
                className={`p-3 rounded-lg border-2 ${
                  theme === "dark"
                    ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                    : "border-gray-200 dark:border-gray-700"
                }`}
              >
                <FaMoon className="mx-auto mb-1" />
                <div className="text-xs">Oscuro</div>
              </button>

              <button
                onClick={() => setTheme("system")}
                className={`p-3 rounded-lg border-2 ${
                  theme === "system"
                    ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                    : "border-gray-200 dark:border-gray-700"
                }`}
              >
                <FaDesktop className="mx-auto mb-1" />
                <div className="text-xs">Sistema</div>
              </button>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaDesktop className="text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                Diseño
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onChangeLayout("vertical")}
                className={` p-3 rounded-lg border-2 text-sm transition flex flex-col items-center justify-center gap-1 ${
                  layout === "vertical"
                    ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                    : "border-gray-200 dark:border-gray-700"
                }`}
              >
                <VscSplitVertical className="text-lg" />
                <span>Info vertical</span>
              </button>

              <button
                onClick={() => onChangeLayout("horizontal")}
                className={` p-3 rounded-lg border-2 text-sm transition flex-col items-center justify-center gap-1 hidden md:flex ${
                  layout === "horizontal"
                    ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                    : "border-gray-200 dark:border-gray-700"
                }`}
              >
                <VscSplitHorizontal className="text-lg" />
                <span>Info horizontal</span>
              </button>
            </div>

            <div className="md:hidden mt-2 text-xs text-gray-500 dark:text-gray-400">
              En móviles la información se muestra en vertical
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfigDrawer;

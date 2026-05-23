import {
  FaGithub,
  FaMoon,
  FaSearch,
  FaShareAlt,
  FaCodeBranch,
} from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { VscRepo } from "react-icons/vsc";
import SearchBar from "../SearchBar";

const QUICK_USERS = [
  { login: "octocat", label: "Octocat" },
  { login: "torvalds", label: "Linus T." },
  { login: "vercel", label: "Vercel" },
  { login: "facebook", label: "Meta" },
];

const FEATURES = [
  {
    icon: HiOutlineUserGroup,
    title: "Perfil completo",
    description:
      "Avatar, bio, ubicación, redes y estadísticas públicas en un solo vistazo.",
  },
  {
    icon: VscRepo,
    title: "Repositorios",
    description:
      "Lista paginada con lenguaje, estrellas y topics actualizados.",
  },
  {
    icon: FaShareAlt,
    title: "Compartir",
    description:
      "Descarga el avatar o comparte el perfil con un enlace directo.",
  },
  {
    icon: FaMoon,
    title: "Tema adaptable",
    description:
      "Modo claro, oscuro o según el sistema. Diseño horizontal o vertical.",
  },
];

const STEPS = [
  { step: "01", text: "Escribe un usuario de GitHub" },
  { step: "02", text: "Explora su perfil y métricas" },
  { step: "03", text: "Navega sus repos más recientes" },
];

const HeroLanding = ({ onSearch, error }) => {
  return (
    <section className="relative w-full flex-1 flex flex-col items-center">
      {/* Decoración de fondo */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <div className="hero-grid-bg absolute inset-0 opacity-60 dark:opacity-40" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[min(100%,42rem)] rounded-full bg-[#1152D4]/10 blur-3xl dark:bg-[#1152D4]/20" />
        <div className="absolute top-1/3 -right-24 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-500/10" />
        <div className="absolute bottom-0 -left-16 h-48 w-48 rounded-full bg-slate-400/10 blur-3xl dark:bg-slate-600/10" />
      </div>

      <div className="w-full max-w-3xl mx-auto text-center pt-4 sm:pt-10 pb-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-[#161B22]/80 px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 shadow-sm backdrop-blur-sm">
          <FaGithub className="text-[#1152D4]" />
          Conectado a la API de GitHub
        </span>

        <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-800 dark:text-slate-100 leading-[1.15]">
          Encuentra perfiles de{" "}
          <span className="text-[#1152D4]">desarrolladores</span> en segundos
        </h1>

        <p className="mt-4 mx-auto max-w-xl text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
          Explora repositorios, estadísticas y datos públicos de cualquier
          usuario. Ideal para revisar colaboradores antes de tu próximo
          proyecto.
        </p>

        <div className="mt-8">
          <SearchBar onSearch={onSearch} />
        </div>

        {error && (
          <div
            role="alert"
            className="mt-5 mx-auto max-w-md rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/20 p-4 text-left sm:text-center"
          >
            <p className="text-sm font-medium text-red-700 dark:text-red-300">
              {error}
            </p>
            <p className="mt-1 text-xs text-red-600 dark:text-red-400">
              Verifica el nombre de usuario e intenta nuevamente
            </p>
          </div>
        )}

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs text-slate-500 dark:text-slate-500">
            Prueba con:
          </span>
          {QUICK_USERS.map(({ login, label }) => (
            <button
              key={login}
              type="button"
              onClick={() => onSearch(login)}
              className="rounded-lg border border-slate-200 dark:border-[#1E293B] bg-white/70 dark:bg-[#161B22]/70 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-[#1152D4]/50 hover:text-[#1152D4] dark:hover:text-[#1152D4] hover:bg-[#1152D4]/5 transition-colors cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Tarjetas de características */}
      <div className="w-full max-w-5xl mt-10 sm:mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <article
            key={title}
            className="group rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white/70 dark:bg-[#161B22]/70 p-5 text-left shadow-sm hover:shadow-md hover:border-[#1152D4]/30 dark:hover:border-[#1152D4]/40 transition-all duration-300"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#1152D4]/10 text-[#1152D4] group-hover:bg-[#1152D4]/15 transition-colors">
              <Icon className="text-lg" />
            </div>
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100">
              {title}
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              {description}
            </p>
          </article>
        ))}
      </div>

      {/* Cómo funciona */}
      <div className="w-full max-w-3xl mt-12 sm:mt-16 rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white/50 dark:bg-[#161B22]/50 px-5 py-6 sm:px-8 sm:py-8">
        <div className="flex items-center justify-center gap-2 mb-6">
          <FaCodeBranch className="text-[#1152D4]" />
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300">
            Cómo funciona
          </h2>
        </div>
        <ol className="grid gap-4 sm:grid-cols-3">
          {STEPS.map(({ step, text }) => (
            <li
              key={step}
              className="flex flex-col items-center text-center sm:items-start sm:text-left gap-2"
            >
              <span className="text-2xl font-bold text-[#1152D4]/30 dark:text-[#1152D4]/50">
                {step}
              </span>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                {text}
              </span>
            </li>
          ))}
        </ol>
      </div>

      <p className="mt-10 flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500">
        <FaSearch className="shrink-0" />
        Datos en tiempo real · Sin registro · 100% frontend
      </p>
    </section>
  );
};

export default HeroLanding;

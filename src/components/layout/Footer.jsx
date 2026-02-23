import { BiCopyright } from "react-icons/bi";
import { BsDot } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-4 sm:py-6">
      <p
        className="flex flex-col sm:flex-row items-center justify-center
               gap-1.5 sm:gap-2.5
               text-center text-xs sm:text-sm md:text-base
               text-slate-500 dark:text-slate-400"
      >
        {/* Texto */}
        <span className="leading-tight">
          Web minimalista utilizando API de GitHub
        </span>

        {/* Separador */}
        <span className="hidden sm:inline-flex items-center text-slate-400 dark:text-slate-600">
          <BsDot />
        </span>

        {/* Copyright */}
        <span className="inline-flex items-center gap-1 leading-tight">
          <BiCopyright className="text-[0.9em]" />
          {new Date().getFullYear()}
        </span>
      </p>
    </footer>
  );
};

export default Footer;

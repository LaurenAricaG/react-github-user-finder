import { BiCopyright } from "react-icons/bi";
import { BsDot } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-4 sm:py-6">
      <p className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-center text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300">
        <span>Web minimalista utilizando API de Github</span>
        <span className="hidden sm:inline-flex items-center">
          <BsDot />
        </span>
        <span className="inline-flex items-center gap-1">
          <BiCopyright /> 2025
        </span>
      </p>
    </footer>
  );
};

export default Footer;

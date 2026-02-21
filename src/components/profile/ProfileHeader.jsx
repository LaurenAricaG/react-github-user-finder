import { BsLink, BsShare } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { RiShareBoxLine } from "react-icons/ri";

const ProfileHeader = ({ user, layout }) => {
  return (
    <div className="bg-white/70 dark:bg-[#161B22] border dark:border-[#1E293B] border-slate-300 px-4 py-8 rounded-2xl flex flex-col items-center gap-1">
      <img
        src="https://avatars.githubusercontent.com/u/161263207?v=4"
        alt=""
        className="rounded-full h-25 w-25 mb-4"
      />
      <h2 className="text-slate-800 dark:text-slate-200 font-bold text-lg -m-2">
        Alex Rivera
      </h2>
      <p className="text-[#1152D4]">@arivera_dev</p>
      <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Sapiente, iusto!
      </p>
      <ul className="flex justify-around w-full py-3 mt-5 border-t border-b border-slate-300 dark:border-[#1E293B]">
        <li className="flex flex-col text-center">
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
            2.4k
          </p>
          <p className="text-[10px] text-slate-600 dark:text-slate-400">
            FOLLOWERS
          </p>
        </li>
        <li className="flex flex-col text-center">
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
            842
          </p>
          <p className="text-[10px] text-slate-600 dark:text-slate-400">
            FOLLOWING
          </p>
        </li>
        <li className="flex flex-col text-center">
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
            120
          </p>
          <p className="text-[10px] text-slate-600 dark:text-slate-400">
            REPOS
          </p>
        </li>
      </ul>

      <div className="text-sm self-start space-y-2 mt-5">
        <p className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
          <GrLocation className="shrink-0 text-[#1152D4]" />
          <span>San Francisco, CA</span>
        </p>

        <p className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
          <BsLink className="shrink-0 text-[#1152D4]" />
          <a href="#" className="text-slate-500 dark:text-slate-400">
            alexrivera.io
          </a>
        </p>

        <p className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
          <BsShare className="shrink-0 text-[#1152D4]" />
          <span>@rivera_tweet</span>
        </p>
      </div>

      <a
        href="https://github.com/tu-usuario"
        target="_blank"
        rel="noopener noreferrer"
        className=" mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
      >
        <RiShareBoxLine className="text-lg" />
        <span>Ir a GitHub</span>
      </a>
    </div>
  );
};

export default ProfileHeader;

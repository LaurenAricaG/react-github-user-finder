import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { buildProfilePath } from "../../utils/profileUrl";
import { setDefaultMeta } from "../../utils/metaTags";

const AppLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isProfileRoute = location.pathname.startsWith("/user/");

  const username = isProfileRoute
    ? decodeURIComponent(location.pathname.replace(/^\/user\//, ""))
    : "";

  const [layout, setLayout] = useState(
    () => localStorage.getItem("layout") || "horizontal",
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("layout", layout);
  }, [layout]);

  useEffect(() => {
    setDefaultMeta();
  }, []);

  const handleGoHome = () => {
    navigate("/");
    setDefaultMeta();
  };

  const handleSearch = (value) => {
    navigate(buildProfilePath(value));
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f6f6f8] dark:bg-[#0D1117] text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <Header
        open={open}
        setOpen={setOpen}
        layout={layout}
        onChangeLayout={setLayout}
        onGoHome={handleGoHome}
        isProfileRoute={isProfileRoute}
        currentUsername={username}
        onSearch={handleSearch}
      />

      <main className="flex-1 flex flex-col items-center px-4 pt-4 sm:pt-6 pb-8 max-w-6xl mx-auto w-full">
        <Outlet context={{ layout }} />
      </main>

      <Footer />
    </div>
  );
};

export default AppLayout;

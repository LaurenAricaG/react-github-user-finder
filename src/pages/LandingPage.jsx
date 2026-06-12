import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeroLanding from "../features/search/components/HeroLanding";
import { buildProfilePath } from "../utils/profileUrl";
import { setDefaultMeta } from "../utils/metaTags";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setDefaultMeta();
  }, []);

  const handleSearch = (value) => {
    navigate(buildProfilePath(value));
  };

  return <HeroLanding onSearch={handleSearch} />;
};

export default LandingPage;

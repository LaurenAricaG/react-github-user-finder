import { useNavigate } from "react-router-dom";
import HeroLanding from "../components/HeroLanding";
import { buildProfilePath } from "../utils/profileUrl";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleSearch = (value) => {
    navigate(buildProfilePath(value));
  };

  return <HeroLanding onSearch={handleSearch} />;
};

export default LandingPage;

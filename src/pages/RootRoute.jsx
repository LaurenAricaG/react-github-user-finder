import { Navigate, useSearchParams } from "react-router-dom";
import { buildLegacyRedirectPath } from "../utils/profileUrl";
import LandingPage from "./LandingPage";

const RootRoute = () => {
  const [searchParams] = useSearchParams();
  const legacyPath = buildLegacyRedirectPath(`?${searchParams.toString()}`);

  if (legacyPath) {
    return <Navigate to={legacyPath} replace />;
  }

  return <LandingPage />;
};

export default RootRoute;

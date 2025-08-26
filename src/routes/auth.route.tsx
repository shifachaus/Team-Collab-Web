import { Navigate, useLocation } from "react-router-dom";
import { isAuthRoute } from "./common/routePaths";

const AuthRoute = () => {
  const location = useLocation();

  const _isAuthRoute = isAuthRoute(location.pathname);

  return <Navigate to={`workspace/`} replace />;
};

export default AuthRoute;

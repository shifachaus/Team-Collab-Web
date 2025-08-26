import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  return <Navigate to="/" replace />;
};

export default ProtectedRoute;

import { Navigation, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoutes = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  if (!user) {
    return <Navigation to="/login" state={{ from: location }} replace />;
  };
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigation to="/unauthorized" replace />;
  }
  return children;
}
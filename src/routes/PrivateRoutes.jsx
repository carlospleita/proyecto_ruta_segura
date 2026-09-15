import { Navigation, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoutes = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  if (!user) {
    return <Navigation to="/login" state={{ from: location }} replace />;
  }
  return children;
}
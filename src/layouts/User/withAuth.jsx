import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUserAuthData } from "../../redux/AuthSlice/index.slice";
import userRouteMap from "../../routes/User/userRouteMap";
import { isUserAuthenticated } from "../../utils/auth.util";

export function PrivateAuthGuard({ children }) {
  const userAuthData = useSelector(getUserAuthData);

  if (!isUserAuthenticated(userAuthData)) {
    return <Navigate to={userRouteMap.LOGIN.path} replace />;
  }

  return children;
}

export function PublicAuthGuard({ children }) {
  const userAuthData = useSelector(getUserAuthData);

  if (isUserAuthenticated(userAuthData)) {
    return <Navigate to={userRouteMap.PROFILE.path} replace />;
  }

  return children;
}

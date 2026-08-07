import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  getUserAuthData,
  logoutUserAuthAction,
} from "../../../redux/AuthSlice/index.slice";
import userRouteMap from "../../../routes/User/userRouteMap";
import { isUserAuthenticated } from "../../../utils/auth.util";

const HomePage = () => {
  const userAuthData = useSelector(getUserAuthData);
  const isAuthenticated = isUserAuthenticated(userAuthData);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUserAuthAction());
    toast.success("Logged out successfully");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="mb-4">Welcome to User Login App</h1>
        <div className="d-grid gap-3 col-6 mx-auto">
          <Link
            to={userRouteMap.LOGIN.path}
            className="text-decoration-none"
            style={{
              pointerEvents: isAuthenticated ? "none" : "auto",
              opacity: isAuthenticated ? 0.5 : 1,
            }}
          >
            <button className="btn btn-primary btn-lg w-100" disabled={isAuthenticated}>
              Login
            </button>
          </Link>
          <Link
            to={userRouteMap.SIGNUP.path}
            className="text-decoration-none"
            style={{
              pointerEvents: isAuthenticated ? "none" : "auto",
              opacity: isAuthenticated ? 0.5 : 1,
            }}
          >
            <button className="btn btn-success btn-lg w-100" disabled={isAuthenticated}>
              Signup
            </button>
          </Link>
          <Link
            to={userRouteMap.PROFILE.path}
            className="text-decoration-none"
            style={{
              pointerEvents: !isAuthenticated ? "none" : "auto",
              opacity: !isAuthenticated ? 0.5 : 1,
            }}
          >
            <button disabled={!isAuthenticated} className="btn btn-info btn-lg w-100">
              User Profile
            </button>
          </Link>
          <Link
            to={userRouteMap.PROFILE.path}
            className="text-decoration-none"
            style={{
              pointerEvents: !isAuthenticated ? "none" : "auto",
              opacity: !isAuthenticated ? 0.5 : 1,
            }}
          >
            <button
              type="button"
              onClick={handleLogout}
              className="btn btn-danger btn-lg w-100"
              disabled={!isAuthenticated}
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

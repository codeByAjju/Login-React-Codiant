import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginForm } from "../../../components/AuthElement";
import { updateUserAuthdataLogin } from "../../../redux/AuthSlice/index.slice";
import { AuthServices } from "../../../services/User/Auth/index.service";
import userRouteMap from "../../../routes/User/userRouteMap";

function UserLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    const { email, password } = values || {};

    try {
      const payload = { email, password };
      const res = await AuthServices.Login(payload);

      if (res.status === 200) {
        toast.success("Login successfully");
        const userData = {
          email,
          token: res.data.token,
          ...res.data.userDetails,
          role: "user",
        };
        dispatch(updateUserAuthdataLogin(userData));
        navigate(userRouteMap.PROFILE.path);
      } else {
        toast.error(res.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      toast.error("Something went wrong during login");
    }
  };

  return <LoginForm onSubmit={handleLogin} />;
}

export default UserLogin;

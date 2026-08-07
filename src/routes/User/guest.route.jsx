import { UserLogin, UserSignup } from "../../pages/Auth";
import userRouteMap from "./userRouteMap";

export default function route() {
  return [
    {
      path: userRouteMap.LOGIN.path,
      key: userRouteMap.LOGIN.path,
      name: "Login",
      private: false,
      element: <UserLogin />,
    },
    {
      path: userRouteMap.SIGNUP.path,
      key: userRouteMap.SIGNUP.path,
      name: "Signup",
      private: false,
      element: <UserSignup />,
    },
  ];
}

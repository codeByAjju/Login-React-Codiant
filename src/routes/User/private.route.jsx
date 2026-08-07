import { UserProfile } from "../../pages/User";
import userRouteMap from "./userRouteMap";

export default function route() {
  return [
    {
      path: userRouteMap.PROFILE.path,
      key: userRouteMap.PROFILE.path,
      name: "User Profile",
      private: true,
      element: <UserProfile />,
    },
  ];
}

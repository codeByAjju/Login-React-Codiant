import { HomePage } from "../../pages/User";
import userRouteMap from "./userRouteMap";

export default function route() {
  return [
    {
      path: userRouteMap.HOME.path,
      key: userRouteMap.HOME.path,
      name: "Home",
      private: false,
      element: <HomePage />,
    },
  ];
}

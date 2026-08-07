import { baseRoutes } from "../../helpers/baseRoutes";

const userRouteMap = {
  HOME: { path: `${baseRoutes.userBaseRoutes}/` },
  LOGIN: { path: `${baseRoutes.userBaseRoutes}/login` },
  SIGNUP: { path: `${baseRoutes.userBaseRoutes}/signup` },
  PROFILE: { path: `${baseRoutes.userBaseRoutes}/profile` },
};

export default userRouteMap;

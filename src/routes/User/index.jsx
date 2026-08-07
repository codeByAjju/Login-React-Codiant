import {
  UserGuestLayout,
  UserLayout,
  UserPrivateLayout,
  UserPublicLayout,
} from "../../layouts";
import guestRoutes from "./guest.route";
import privateRoutes from "./private.route";
import publicRoutes from "./public.route";

export const userRoutes = () => {
  return [
    {
      element: <UserLayout />,
      children: [
        {
          element: <UserPublicLayout />,
          children: [...publicRoutes()],
        },
        {
          element: <UserGuestLayout />,
          children: [...guestRoutes()],
        },
        {
          element: <UserPrivateLayout />,
          children: [...privateRoutes()],
        },
      ],
    },
  ];
};

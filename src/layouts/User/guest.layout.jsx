import { Outlet } from "react-router-dom";
import AppLayout from "../App/index.layout";
import { PublicAuthGuard } from "./withAuth";

function UserGuestLayout() {
  return (
    <PublicAuthGuard>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </PublicAuthGuard>
  );
}

export default UserGuestLayout;

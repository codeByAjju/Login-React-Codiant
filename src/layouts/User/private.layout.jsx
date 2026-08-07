import { Outlet } from "react-router-dom";
import AppLayout from "../App/index.layout";
import { PrivateAuthGuard } from "./withAuth";

function UserPrivateLayout() {
  return (
    <PrivateAuthGuard>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </PrivateAuthGuard>
  );
}

export default UserPrivateLayout;

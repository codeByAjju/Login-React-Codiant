import { Outlet } from "react-router-dom";
import AppLayout from "../App/index.layout";

function UserPublicLayout() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}

export default UserPublicLayout;

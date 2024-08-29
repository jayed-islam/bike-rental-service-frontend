import Sidebar from "./sidebar";
import { routes } from "./config-navigation";
import { Outlet } from "react-router-dom";

const AccountLayout = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex items-start gap-5 max-w-5xl mx-auto py-7">
        <Sidebar routes={routes} />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AccountLayout;

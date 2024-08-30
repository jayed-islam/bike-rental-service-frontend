import Sidebar from "./sidebar";
import { routes } from "./config-navigation";
import { Outlet } from "react-router-dom";
import useBoolean from "../../hooks/use-boolean";
import CustomButton from "../../components/common-button";

const AccountLayout = () => {
  const state = useBoolean();
  return (
    <div className="bg-gray-100">
      <CustomButton
        onClick={state.toggle}
        title="Open Dashboard Sidebar"
        className="mt-5 ml-5 xl:hidden"
      />
      <div className="flex items-start gap-5 max-w-5xl mx-auto py-7">
        <Sidebar routes={routes} state={state} />
        <div></div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AccountLayout;

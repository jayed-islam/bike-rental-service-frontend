import Sidebar from "./sidebar";
import { routes } from "./config-navigation";
import { Outlet } from "react-router-dom";
import useBoolean from "../../hooks/use-boolean";
import CustomButton from "../../components/common-button";

const AccountLayout = () => {
  const state = useBoolean();
  return (
    <div className="bg-gray-100 dark:bg-[#060417]">
      <CustomButton
        onClick={state.toggle}
        title="Open Dashboard Sidebar"
        className="mt-5 ml-5 lg:hidden"
      />
      <Sidebar routes={routes} state={state} className="lg:hidden" />
      <div className="items-start gap-5 max-w-5xl mx-auto py-7 w-full hidden lg:flex">
        <Sidebar routes={routes} state={state} className="" />
        <div className="">
          <Outlet />
        </div>
      </div>
      <div className="px-5 py-7 lg:hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default AccountLayout;

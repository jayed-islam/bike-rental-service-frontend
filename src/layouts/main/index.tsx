import { Outlet } from "react-router-dom";
import Footer from "./footer";
import HeaderMain from "./header-main";

const MainLayout = () => {
  return (
    <>
      {/* <HeroHeader />
      <Header /> */}
      <HeaderMain />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;

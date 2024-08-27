import Header from "./header-routes";
import HeroHeader from "./hero-header";

const HeaderMain = () => {
  return (
    <div className="bg-black">
      <HeroHeader />
      <Header />
    </div>
  );
};

export default HeaderMain;

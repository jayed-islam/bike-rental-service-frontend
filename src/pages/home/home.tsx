import { Helmet } from "react-helmet-async";
import HomeView from "../../sections/home/view/home-view-content";
import ScrollToTop from "../../hooks/use-scroll-to-top";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home: Fantasy Sports</title>
      </Helmet>
      <ScrollToTop />
      <HomeView />
    </>
  );
}

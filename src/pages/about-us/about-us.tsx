import { Helmet } from "react-helmet-async";
import AboutUsView from "../../sections/about/about-us-view";
import ScrollToTop from "../../hooks/use-scroll-to-top";

export default function AboutUsPage() {
  return (
    <>
      <Helmet>
        <title>About Us: Best Bike</title>
      </Helmet>
      <ScrollToTop />
      <AboutUsView />
    </>
  );
}

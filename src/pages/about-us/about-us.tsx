import { Helmet } from "react-helmet-async";
import AboutUsView from "../../sections/about/about-us-view";

export default function AboutUsPage() {
  return (
    <>
      <Helmet>
        <title>About Us: Best Bike</title>
      </Helmet>
      <AboutUsView />
    </>
  );
}

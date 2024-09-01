import { Helmet } from "react-helmet-async";
import CompaireView from "../../sections/compaire/compaire-view";
import ScrollToTop from "../../hooks/use-scroll-to-top";

export default function CompairePage() {
  return (
    <>
      <Helmet>
        <title>Fast Bike: Compaire Page</title>
      </Helmet>
      <ScrollToTop />
      <CompaireView />
    </>
  );
}

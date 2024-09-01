import { Helmet } from "react-helmet-async";
import AllBikeListView from "../../sections/bike/view/all-bike-list-view";
import ScrollToTop from "../../hooks/use-scroll-to-top";

export default function AllBikeListPage() {
  return (
    <>
      <Helmet>
        <title>Bikes</title>
      </Helmet>
      <ScrollToTop />
      <AllBikeListView />
    </>
  );
}

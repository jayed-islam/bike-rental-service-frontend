import { Helmet } from "react-helmet-async";
import BikeListView from "../../sections/bike/view/bike-list-view";
import ScrollToTop from "../../hooks/use-scroll-to-top";

export default function BikeListPage() {
  return (
    <>
      <Helmet>
        <title>Bike: list</title>
      </Helmet>
      <ScrollToTop />
      <BikeListView />
    </>
  );
}

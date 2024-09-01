import { Helmet } from "react-helmet-async";
import RentalListView from "../../sections/my-rental/view/rental-list-view";
import ScrollToTop from "../../hooks/use-scroll-to-top";

export default function RentalListPage() {
  return (
    <>
      <Helmet>
        <title>Bike: Rental List</title>
      </Helmet>
      <ScrollToTop />
      <RentalListView />
    </>
  );
}

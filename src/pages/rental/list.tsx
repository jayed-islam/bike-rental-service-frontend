import { Helmet } from "react-helmet-async";
import RentalListView from "../../sections/my-rental/view/rental-list-view";

export default function RentalListPage() {
  return (
    <>
      <Helmet>
        <title>Bike: Rental List</title>
      </Helmet>
      <RentalListView />
    </>
  );
}

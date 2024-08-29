import { Helmet } from "react-helmet-async";
import MyRentalView from "../../sections/my-rental/view/my-rental-view";

export default function MyrentalPage() {
  return (
    <>
      <Helmet>
        <title>Bike: My Rental</title>
      </Helmet>
      <MyRentalView />
    </>
  );
}

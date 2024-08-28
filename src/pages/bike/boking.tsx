import { Helmet } from "react-helmet-async";
import BookingView from "../../sections/booking/view/booking-view";

export default function BookinPage() {
  return (
    <>
      <Helmet>
        <title>Bike: booking</title>
      </Helmet>
      <BookingView />
    </>
  );
}

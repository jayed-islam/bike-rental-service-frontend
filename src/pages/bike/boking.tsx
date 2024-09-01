import { Helmet } from "react-helmet-async";
import BookingView from "../../sections/booking/view/booking-view";
import ScrollToTop from "../../hooks/use-scroll-to-top";

export default function BookinPage() {
  return (
    <>
      <Helmet>
        <title>Bike: booking</title>
      </Helmet>
      <ScrollToTop />
      <BookingView />
    </>
  );
}

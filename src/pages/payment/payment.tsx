import { Helmet } from "react-helmet-async";
import PaymentView from "../../sections/payment/payment-view";
import { useLocation } from "react-router-dom";
import ScrollToTop from "../../hooks/use-scroll-to-top";

export default function PaymentPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const bikeId = searchParams.get("id") || "";
  const startTime = searchParams.get("startTime") || "";
  const isFromUserPanel = searchParams.get("isFromUserPanel") || "";
  const bookingId = searchParams.get("bookingId") || "";
  return (
    <>
      <Helmet>
        <title>Payment: Fast Bike</title>
      </Helmet>
      <ScrollToTop />
      <PaymentView
        id={bikeId}
        startTime={startTime}
        bookingId={bookingId}
        isFromUserPanel={isFromUserPanel}
      />
    </>
  );
}

// http://localhost:5000/api/payment/success?tnxId=TXN-1725039983382&bikeId=66cda3177382ce64da2fbb6a&startTime=2024-08-17T23:46&coupon=DISCOUNT&userId=66cda2517382ce64da2fbb60&isFromUserPanel=no&bookingId=bookingId

import { Helmet } from "react-helmet-async";
import PaymentView from "../../sections/payment/payment-view";
import { useLocation } from "react-router-dom";

export default function PaymentPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const bikeId = searchParams.get("id") || "";
  const startTime = searchParams.get("startTime") || "";
  return (
    <>
      <Helmet>
        <title>Payment: Fast Bike</title>
      </Helmet>
      <PaymentView id={bikeId} startTime={startTime} />
    </>
  );
}

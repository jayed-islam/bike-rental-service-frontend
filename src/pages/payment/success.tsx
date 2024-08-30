import { Helmet } from "react-helmet-async";
import PaymentConfirm from "../../sections/payment/payment-confirmaition";

export default function PaymentSuccessPage() {
  return (
    <>
      <Helmet>
        <title>Payment: Success</title>
      </Helmet>
      <PaymentConfirm />
    </>
  );
}

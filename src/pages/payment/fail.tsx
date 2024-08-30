import { Helmet } from "react-helmet-async";
import PaymentFail from "../../sections/payment/payment-fail";

export default function PaymentFailPage() {
  return (
    <>
      <Helmet>
        <title>Payment: Fail</title>
      </Helmet>
      <PaymentFail />
    </>
  );
}

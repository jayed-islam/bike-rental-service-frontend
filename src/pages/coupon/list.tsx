import { Helmet } from "react-helmet-async";
import CouponListView from "../../sections/coupon/coupon-list-view";

export default function CouponListPage() {
  return (
    <>
      <Helmet>
        <title>Coupon: list</title>
      </Helmet>
      <CouponListView />
    </>
  );
}

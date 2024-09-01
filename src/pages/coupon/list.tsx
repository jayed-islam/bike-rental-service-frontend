import { Helmet } from "react-helmet-async";
import CouponListView from "../../sections/coupon/coupon-list-view";
import ScrollToTop from "../../hooks/use-scroll-to-top";

export default function CouponListPage() {
  return (
    <>
      <Helmet>
        <title>Coupon: list</title>
      </Helmet>
      <ScrollToTop />
      <CouponListView />
    </>
  );
}

import { Helmet } from "react-helmet-async";
import BikeAdminListView from "../../sections/bike/view/bike-admin-list";
import ScrollToTop from "../../hooks/use-scroll-to-top";

export default function BikeAdminListPage() {
  return (
    <>
      <Helmet>
        <title>Bike: admin list</title>
      </Helmet>
      <ScrollToTop />
      <BikeAdminListView />
    </>
  );
}

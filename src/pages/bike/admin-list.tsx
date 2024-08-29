import { Helmet } from "react-helmet-async";
import BikeAdminListView from "../../sections/bike/view/bike-admin-list";

export default function BikeAdminListPage() {
  return (
    <>
      <Helmet>
        <title>Bike: admin list</title>
      </Helmet>
      <BikeAdminListView />
    </>
  );
}

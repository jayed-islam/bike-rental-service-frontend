import { Helmet } from "react-helmet-async";
import BikeListView from "../../sections/bike/view/bike-list-view";

export default function BikeListPage() {
  return (
    <>
      <Helmet>
        <title>Bike: list</title>
      </Helmet>
      <BikeListView />
    </>
  );
}

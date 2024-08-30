import { Helmet } from "react-helmet-async";
import AllBikeListView from "../../sections/bike/view/all-bike-list-view";

export default function AllBikeListPage() {
  return (
    <>
      <Helmet>
        <title>Bikes</title>
      </Helmet>
      <AllBikeListView />
    </>
  );
}

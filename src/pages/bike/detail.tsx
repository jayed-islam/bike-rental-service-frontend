import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import BikeDetailView from "../../sections/bike/view/bike-detail-view";

export default function BikeDetailPage() {
  const { id } = useParams();
  return (
    <>
      <Helmet>
        <title>Bike Detail: Fast Bike</title>
      </Helmet>
      <BikeDetailView id={id as string} />
    </>
  );
}

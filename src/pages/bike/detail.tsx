import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import BikeDetailView from "../../sections/bike/view/bike-detail-view";
import ScrollToTop from "../../hooks/use-scroll-to-top";

export default function BikeDetailPage() {
  const { id } = useParams();
  return (
    <>
      <Helmet>
        <title>Bike Detail: Fast Bike</title>
      </Helmet>
      <ScrollToTop />
      <BikeDetailView id={id as string} />
    </>
  );
}

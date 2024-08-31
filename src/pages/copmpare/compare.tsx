import { Helmet } from "react-helmet-async";
import CompaireView from "../../sections/compaire/compaire-view";

export default function CompairePage() {
  return (
    <>
      <Helmet>
        <title>Fast Bike: Compaire Page</title>
      </Helmet>
      <CompaireView />
    </>
  );
}

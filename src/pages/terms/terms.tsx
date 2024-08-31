import { Helmet } from "react-helmet-async";
import TermsAndConditions from "../../sections/terms/terms";

export default function TermsAndConditionPage() {
  return (
    <>
      <Helmet>
        <title>Fast Bike: Terms Condition</title>
      </Helmet>
      <TermsAndConditions />
    </>
  );
}

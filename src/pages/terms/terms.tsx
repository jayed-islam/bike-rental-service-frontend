import { Helmet } from "react-helmet-async";
import TermsAndConditions from "../../sections/terms/terms";
import ScrollToTop from "../../hooks/use-scroll-to-top";

export default function TermsAndConditionPage() {
  return (
    <>
      <Helmet>
        <title>Fast Bike: Terms Condition</title>
      </Helmet>
      <ScrollToTop />
      <TermsAndConditions />
    </>
  );
}

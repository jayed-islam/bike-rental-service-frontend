import { Helmet } from "react-helmet-async";
import PrivacyPolicy from "../../sections/terms/privacy-polict-view";
import ScrollToTop from "../../hooks/use-scroll-to-top";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Fast Bike: Privacy Policy</title>
      </Helmet>
      <ScrollToTop />
      <PrivacyPolicy />
    </>
  );
}

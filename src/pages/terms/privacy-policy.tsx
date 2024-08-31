import { Helmet } from "react-helmet-async";
import PrivacyPolicy from "../../sections/terms/privacy-polict-view";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Fast Bike: Privacy Policy</title>
      </Helmet>
      <PrivacyPolicy />
    </>
  );
}

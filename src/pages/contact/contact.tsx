import { Helmet } from "react-helmet-async";
import HomeContactView from "../../sections/home/home-contact-view";

export default function ContaceUsPage() {
  return (
    <>
      <Helmet>
        <title>Fast Bike: Contact Us</title>
      </Helmet>
      <HomeContactView />
    </>
  );
}

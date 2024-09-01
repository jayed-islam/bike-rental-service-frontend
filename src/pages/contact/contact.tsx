import { Helmet } from "react-helmet-async";
import HomeContactView from "../../sections/home/home-contact-view";
import ScrollToTop from "../../hooks/use-scroll-to-top";

export default function ContaceUsPage() {
  return (
    <>
      <Helmet>
        <title>Fast Bike: Contact Us</title>
      </Helmet>
      <ScrollToTop />
      <HomeContactView />
    </>
  );
}

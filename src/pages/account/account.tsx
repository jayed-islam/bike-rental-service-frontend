import { Helmet } from "react-helmet-async";
import AccountView from "../../sections/account/view/account-view";
import ScrollToTop from "../../hooks/use-scroll-to-top";

export default function AccountPage() {
  return (
    <>
      <Helmet>
        <title>Bike: booking</title>
      </Helmet>
      <ScrollToTop />
      <AccountView />
    </>
  );
}

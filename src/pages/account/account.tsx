import { Helmet } from "react-helmet-async";
import AccountView from "../../sections/account/view/account-view";

export default function AccountPage() {
  return (
    <>
      <Helmet>
        <title>Bike: booking</title>
      </Helmet>
      <AccountView />
    </>
  );
}

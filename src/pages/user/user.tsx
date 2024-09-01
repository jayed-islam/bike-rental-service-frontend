import { Helmet } from "react-helmet-async";
import UserListView from "../../sections/user/view/user-list-view";
import ScrollToTop from "../../hooks/use-scroll-to-top";

export default function UserListPage() {
  return (
    <>
      <Helmet>
        <title>User: list</title>
      </Helmet>
      <ScrollToTop />
      <UserListView />
    </>
  );
}

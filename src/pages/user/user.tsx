import { Helmet } from "react-helmet-async";
import UserListView from "../../sections/user/view/user-list-view";

export default function UserListPage() {
  return (
    <>
      <Helmet>
        <title>User: list</title>
      </Helmet>
      <UserListView />
    </>
  );
}

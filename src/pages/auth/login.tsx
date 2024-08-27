import { Helmet } from "react-helmet-async";
import LoginView from "../../sections/auth/login-view";

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Auth: Login</title>
      </Helmet>
      <LoginView />
    </>
  );
}

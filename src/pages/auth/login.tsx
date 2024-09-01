import { Helmet } from "react-helmet-async";
import LoginView from "../../sections/auth/login-view";
import ScrollToTop from "../../hooks/use-scroll-to-top";

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Auth: Login</title>
      </Helmet>
      <ScrollToTop />
      <LoginView />
    </>
  );
}

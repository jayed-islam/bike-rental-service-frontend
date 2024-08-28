import { Helmet } from "react-helmet-async";
import SignUpView from "../../sections/auth/singnup-view";

export default function SignUpPage() {
  return (
    <>
      <Helmet>
        <title>Auth: SignUp</title>
      </Helmet>
      <SignUpView />
    </>
  );
}

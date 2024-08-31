import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main";
import HomePage from "../pages/home/home";
import SuccessPage from "../pages/success/page";
import AboutUsPage from "../pages/about-us/about-us";
import LoginPage from "../pages/auth/login";
import SignUpPage from "../pages/auth/signup";
import BikeListPage from "../pages/bike/list";
import AccountLayout from "../layouts/account";
import MyrentalPage from "../pages/rental/my-rental";
import AccountPage from "../pages/account/account";
import BikeDetailPage from "../pages/bike/detail";
import PaymentPage from "../pages/payment/payment";
import BikeAdminListPage from "../pages/bike/admin-list";
import UserListPage from "../pages/user/user";
import RentalListPage from "../pages/rental/list";
import CouponListPage from "../pages/coupon/list";
import NotFoundPage from "../components/not-fount-page";
import AllBikeListPage from "../pages/bike/all-bike";
import PaymentSuccessPage from "../pages/payment/success";
import PaymentFailPage from "../pages/payment/fail";
import ProtectedRoute from "./protected-route-handler";
import TermsAndConditionPage from "../pages/terms/terms";
import PrivacyPolicyPage from "../pages/terms/privacy-policy";
import ContaceUsPage from "../pages/contact/contact";
import CompairePage from "../pages/copmpare/compare";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/success",
        element: <SuccessPage />,
      },
      {
        path: "/terms",
        element: <TermsAndConditionPage />,
      },
      {
        path: "/compaire-bike",
        element: <CompairePage />,
      },
      {
        path: "/contact-us",
        element: <ContaceUsPage />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "/payment/success",
        element: <PaymentSuccessPage />,
      },

      {
        path: "/payment/fail",
        element: <PaymentFailPage />,
      },

      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/bike/:id",
        element: <BikeDetailPage />,
      },
      {
        path: "/payment",
        element: (
          <ProtectedRoute roles={["ADMIN", "USER"]}>
            <PaymentPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/all-bike",
        element: <AllBikeListPage />,
      },
      {
        path: "account",
        element: <AccountLayout />,
        children: [
          {
            index: true,
            element: (
              <ProtectedRoute roles={["ADMIN", "USER"]}>
                <AccountPage />,
              </ProtectedRoute>
            ),
          },
          {
            path: "/account/bike-list",
            element: (
              <ProtectedRoute roles={["USER"]}>
                <BikeListPage />,
              </ProtectedRoute>
            ),
          },
          {
            path: "/account/bike-lists",
            element: (
              <ProtectedRoute roles={["ADMIN"]}>
                <BikeAdminListPage />,
              </ProtectedRoute>
            ),
          },
          // {
          //   path: "/account/booking",
          //   element: (
          //     <ProtectedRoute roles={["ADMIN"]}>
          //       <BookinPage />,
          //     </ProtectedRoute>
          //   ),
          // },
          {
            path: "/account/my-rentals",
            element: (
              <ProtectedRoute roles={["USER"]}>
                <MyrentalPage />,
              </ProtectedRoute>
            ),
          },
          {
            path: "/account/users",
            element: (
              <ProtectedRoute roles={["ADMIN"]}>
                <UserListPage />,
              </ProtectedRoute>
            ),
          },
          {
            path: "/account/rentals",
            element: (
              <ProtectedRoute roles={["ADMIN"]}>
                <RentalListPage />,
              </ProtectedRoute>
            ),
          },
          {
            path: "/account/coupon",
            element: (
              <ProtectedRoute roles={["ADMIN"]}>
                <CouponListPage />,
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default routes;

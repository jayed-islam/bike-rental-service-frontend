import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main";
import HomePage from "../pages/home/home";
import AllProductPage from "../pages/product/all-product";
import SingleProductDetailsPage from "../pages/product/single-product";
import SuccessPage from "../pages/success/page";
import AboutUsPage from "../pages/about-us/about-us";
import LoginPage from "../pages/auth/login";
import SignUpPage from "../pages/auth/signup";
import BikeListPage from "../pages/bike/list";
import AccountLayout from "../layouts/account";
import BookinPage from "../pages/bike/boking";
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
        path: "/all-products",
        element: <AllProductPage />,
      },
      {
        path: "/product/:id",
        element: <SingleProductDetailsPage />,
      },

      {
        path: "/success",
        element: <SuccessPage />,
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
        element: <PaymentPage />,
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
            element: <AccountPage />,
          },
          {
            path: "/account/bike-list",
            element: <BikeListPage />,
          },
          {
            path: "/account/bike-lists",
            element: <BikeAdminListPage />,
          },
          {
            path: "/account/booking",
            element: <BookinPage />,
          },
          {
            path: "/account/my-rentals",
            element: <MyrentalPage />,
          },
          {
            path: "/account/users",
            element: <UserListPage />,
          },
          {
            path: "/account/rentals",
            element: <RentalListPage />,
          },
          {
            path: "/account/coupon",
            element: <CouponListPage />,
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

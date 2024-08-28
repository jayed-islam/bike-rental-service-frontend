import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main";
import HomePage from "../pages/home/home";
import AllProductPage from "../pages/product/all-product";
import SingleProductDetailsPage from "../pages/product/single-product";
import SuccessPage from "../pages/success/page";
import ManageProducPage from "../pages/manage-product/manage-product";
import AboutUsPage from "../pages/about-us/about-us";
import LoginPage from "../pages/auth/login";
import SignUpPage from "../pages/auth/signup";
import BikeListPage from "../pages/bike/list";
import AccountLayout from "../layouts/account";
import BookinPage from "../pages/bike/boking";
import MyrentalPage from "../pages/my-rental/my-rental";
import AccountPage from "../pages/account/account";

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
        path: "/manage-products",
        element: <ManageProducPage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
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
            path: "/account/booking",
            element: <BookinPage />,
          },
          {
            path: "/account/my-rentals",
            element: <MyrentalPage />,
          },
        ],
      },
    ],
  },
]);

export default routes;

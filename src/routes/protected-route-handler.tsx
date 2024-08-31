import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout } from "../redux/reducers/auth/authSlice";
import SplashScreen from "../components/loading-screen";

type TProtectedRoute = {
  children: ReactNode;
  roles: Array<"ADMIN" | "USER">;
};

const ProtectedRoute = ({ children, roles }: TProtectedRoute) => {
  const { user, authLoading } = useAppSelector((state) => state.auth);

  const accessToken = localStorage?.getItem("accessToken");
  const dispatch = useAppDispatch();

  if (authLoading) {
    return <SplashScreen />;
  }

  // Check if user's role is defined and is included in the allowed roles
  if (!user?.role || !roles.includes(user.role as "ADMIN" | "USER")) {
    dispatch(logout());
    return <Navigate to="/login" replace={true} />;
  }

  if (!accessToken) {
    return <Navigate to="/login" replace={true} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

import { FC, ReactNode, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { useAppDispatch, useAppSelector } from "./hooks";
import { useGetMeQuery } from "./reducers/auth/authApi";
import { logout, setToken } from "./reducers/auth/authSlice";
import { isValidToken } from "../utils/auth-utils";

interface IReudxProviderProps {
  children: ReactNode;
}

export const ReduxProvider: FC<IReudxProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <GLobalApiCallProvider>{children}</GLobalApiCallProvider>
    </Provider>
  );
};

const GLobalApiCallProvider: FC<IReudxProviderProps> = ({ children }) => {
  const { accessToken } = useAppSelector((state) => state.auth);

  useGetMeQuery(undefined, {
    skip: !(accessToken && isValidToken(accessToken)),
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage?.getItem("accessToken");
    if (token && isValidToken(token)) {
      dispatch(setToken(token));
    } else {
      dispatch(logout());
    }
  }, [dispatch]);

  return <>{children}</>;
};

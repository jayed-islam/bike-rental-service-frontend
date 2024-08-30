/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Alert, Container, Paper } from "@mui/material";
import { AuthFormValues, authValidationSchema } from "./auth-validation";
import { useAppDispatch } from "../../redux/hooks";
import { setToken } from "../../redux/reducers/auth/authSlice";
import { RHFTextField } from "../../components/react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { paths } from "../../layouts/paths";
import FormProvider from "../../components/react-hook-form/hook-form-controller";
import { useLoginUserMutation } from "../../redux/reducers/auth/authApi";

// ----------------------------------------------------------------------

export default function LoginView() {
  const methods = useForm<AuthFormValues>({
    resolver: zodResolver(authValidationSchema),
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const [adminLogin, { isLoading }] = useLoginUserMutation();

  console.log("err", errors);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await adminLogin(data).unwrap();
      if (response.success) {
        dispatch(setToken(response?.token));
        toast.success(response.message);
        // navigate(paths.root);
        const queryParams = new URLSearchParams(location.search);
        const redirectPath = queryParams.get("redirect") || "/account";
        navigate(redirectPath);
      } else {
        toast.error(response.message);
        setErrorMessage(response.message);
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast.error(error.data.message);
      setErrorMessage(error.data.message);
    }
  });

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(null);
      }, 11000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const renderForm = (
    <>
      <Stack
        spacing={3}
        sx={{
          mt: 3,
        }}
      >
        <RHFTextField label="Email" name="email" />
        <RHFTextField label="Password" type="password" name="password" />
      </Stack>

      {/* <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        sx={{ my: 3 }}
      >
        <Link href="/" className="hover:underline">
          Forgot password?
        </Link>
      </Stack> */}

      <button
        type="submit"
        className="bg-sky-800 px-5 py-3 mt-5 text-center text-white hover:bg-sky-900 transition-all duration-500 cursor-pointer "
      >
        {isLoading ? "Loading..." : "Login"}
      </button>

      <Typography variant="body2" sx={{ mt: 2 }} textAlign="center">
        Don’t have an account?
        <NavLink
          to={paths.auth.signup}
          className="pl-2 text-green-500 hover:underline"
        >
          Get started
        </NavLink>
      </Typography>
    </>
  );

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={6} sx={{ padding: 4, my: 8 }}>
        <FormProvider methods={methods} onSubmit={onSubmit}>
          <Stack>
            <Typography variant="h4">Sign in to Fast Bike</Typography>

            {errorMessage && (
              <Alert severity="error" sx={{ mt: 3 }}>
                {errorMessage}
              </Alert>
            )}

            {renderForm}
          </Stack>
        </FormProvider>
      </Paper>
    </Container>
  );
}

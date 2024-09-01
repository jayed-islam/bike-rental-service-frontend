/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import toast from "react-hot-toast";
import FormProvider from "../../components/react-hook-form/hook-form-controller";
import { RHFTextField } from "../../components/react-hook-form";
import { useGetSingleBikeQuery } from "../../redux/reducers/bike/bikeApi";
import CustomButton from "../../components/common-button";
import { useForm } from "react-hook-form";
import { PaymentFormData, paymentSchema } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { ICoupon } from "../../types/coupon";
import { useAppSelector } from "../../redux/hooks";
import { useMakeBookingMutation } from "../../redux/reducers/rental/rentalApi";

interface Props {
  id: string;
  startTime: string;
  bookingId?: string;
  isFromUserPanel?: string;
}

const PaymentView: React.FC<Props> = ({
  id,
  startTime,
  bookingId,
  isFromUserPanel,
}) => {
  const {
    data: bike,
    isLoading: isBikeLoading,
    error,
  } = useGetSingleBikeQuery(id);
  const { user } = useAppSelector((state) => state.auth);

  const methods = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      address: user?.address || "",
      email: user?.email || "",
      name: user?.name || "",
      phone: user?.phone || "",
    },
  });

  const [coupon, setSelectedCoupon] = useState<ICoupon>();

  useEffect(() => {
    const couponJson = localStorage.getItem("coupon");
    if (couponJson) {
      setSelectedCoupon(JSON.parse(couponJson));
    }
  }, []);

  const { handleSubmit } = methods;

  const [createBooking, { isLoading }] = useMakeBookingMutation();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    const payload = {
      bikeId: bike?.data._id as string,
      startTime: startTime,
      ...(coupon?.code && { coupon: coupon.code }),
      id: bookingId,
      isFromUserPanel: isFromUserPanel,
    };

    try {
      const res = await createBooking(payload).unwrap();
      if (res.success) {
        // toast.success(res.message);
        window.location.href = res.data.payment_url;
      } else {
        toast.error(res.message);
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.data.message);
    }
  });

  // if (!user) {
  //   return (
  //     <div className="flex justify-center items-center h-96">
  //       <Typography variant="h6" color="error">
  //         Failed to load user data.
  //       </Typography>
  //     </div>
  //   );
  // }

  if (isBikeLoading || !user) {
    return (
      <div className="flex justify-center items-center h-96">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-96">
        <Typography variant="h6" color="error">
          Failed to load bike details.
        </Typography>
      </div>
    );
  }

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <div className="bg-gray-100">
        <h2 className="text-2xl font-bold md:text-3xl max-w-5xl mx-auto px-5 xl:px-0 pt-7">
          Checkout
        </h2>
        {isFromUserPanel === "yes" ? (
          <div className="max-w-5xl mx-auto py-7 flex items-center justify-center">
            <div className="w-full lg:w-[35rem] bg-white h-56 flex items-center justify-center flex-col ">
              <h3 className="text-center max-w-[15rem] mx-auto text-lg font-semibold  mb-5">
                You are paying your previous unpaid booking for this booking id{" "}
                <strong>{bookingId}</strong>
              </h3>
              <CustomButton
                type="submit"
                loading={isLoading}
                title="Pay Now"
                className="mt-5"
              />
            </div>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto px-5 xl:px-0 py-7 w-full">
            <div className="flex items-start gap-7 lg:flex-row flex-col w-full">
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 py-5 bg-white p-5 shadow-lg rounded-lg">
                <RHFTextField name="name" label="Name" fullWidth />
                <RHFTextField name="email" label="Email" disabled fullWidth />
                <RHFTextField name="phone" label="Phone" />
                <RHFTextField
                  name="address"
                  label="Address"
                  className="md:col-span-2"
                />
              </div>
              <div className="w-full md:w-[60%] bg-white p-6 shadow-lg rounded-lg">
                <div>
                  <Typography
                    variant="h6"
                    mb={2}
                    className="font-semibold text-gray-800 border-b pb-2 border-gray-200"
                  >
                    Bike Information
                  </Typography>
                  <div className="space-y-3">
                    <Typography variant="body1" className="text-gray-700">
                      <span className="font-medium">Name:</span>{" "}
                      {bike?.data.name}
                    </Typography>
                    <Typography variant="body1" className="text-gray-700">
                      <span className="font-medium">Brand:</span>{" "}
                      {bike?.data?.brand}
                    </Typography>
                    <Typography variant="body1" className="text-gray-700">
                      <span className="font-medium">Model:</span>{" "}
                      {bike?.data?.model}
                    </Typography>
                    <Typography variant="body1" className="text-gray-700">
                      <span className="font-medium">Price Per Hour:</span> $
                      {bike?.data?.pricePerHour}
                    </Typography>

                    <h2 className="text-gray-700 mt-5">
                      <strong>Start Time:</strong> {startTime}
                    </h2>
                  </div>

                  {coupon && (
                    <Box
                      mt={4}
                      p={4}
                      className="bg-gradient-to-r from-green-100 to-green-50 rounded-md border border-green-200 shadow-inner"
                    >
                      <Typography
                        variant="h6"
                        className="font-semibold mb-2 text-green-800"
                      >
                        Coupon Applied
                      </Typography>
                      <div className="space-y-2">
                        <Typography variant="body1" className="text-green-700">
                          <span className="font-medium">Code:</span>{" "}
                          {coupon.code}
                        </Typography>
                        <Typography variant="body1" className="text-green-700">
                          <span className="font-medium">Discount:</span>{" "}
                          {coupon.discountAmount}%
                        </Typography>
                      </div>
                    </Box>
                  )}

                  <CustomButton
                    type="submit"
                    loading={isLoading}
                    title="Book Now"
                    className="mt-5"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </FormProvider>
  );
};

export default PaymentView;

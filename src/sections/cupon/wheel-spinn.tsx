/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import "./wheel.css";
import CustomButton from "../../components/common-button";
import { useGetAllCouponsQuery } from "../../redux/reducers/coupon/couponApi";

interface WheelProps {
  onEnd: (discount: any) => void;
}

const WheelComponent: React.FC<WheelProps> = ({ onEnd }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const { data } = useGetAllCouponsQuery();

  const startSpin = () => {
    setIsSpinning(true);
    const randomIndex = Math.floor(Math.random() * (data?.data?.length || 0));
    const selectedCoupon = data?.data[randomIndex];

    setTimeout(() => {
      setIsSpinning(false);
      if (selectedCoupon) {
        onEnd(selectedCoupon);
      }
    }, 3000); // Spin duration
  };

  return (
    <div className="wheel-container">
      <div className={`wheel ${isSpinning ? "spinning" : ""}`}>
        {data?.data?.map((item) => (
          <div key={item.code} className="wheel-segment">
            {item.discountAmount}%
          </div>
        ))}
      </div>
      <CustomButton
        className="mt-5"
        onClick={startSpin}
        loading={isSpinning}
        title="Spin the Wheel"
      />
    </div>
  );
};

export default WheelComponent;

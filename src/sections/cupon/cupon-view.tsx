/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import WheelComponent from "./wheel-spinn";
import CouponModal from "./cupon-dialog";
import { ICoupon } from "../../types/coupon";

const CouponSection = () => {
  const [isCouponVisible, setIsCouponVisible] = useState(false);
  const [couponCode, setCouponCode] = useState<ICoupon>();

  const handleWheelEnd = (coupon: any) => {
    setCouponCode(coupon);
    localStorage.setItem("coupon", JSON.stringify(coupon));
    setIsCouponVisible(true);
  };

  return (
    <div>
      <WheelComponent onEnd={handleWheelEnd} />
      <CouponModal
        isVisible={isCouponVisible}
        couponCode={couponCode?.discountAmount.toString() ?? ""}
        onClose={() => setIsCouponVisible(false)}
      />
    </div>
  );
};

export default CouponSection;
